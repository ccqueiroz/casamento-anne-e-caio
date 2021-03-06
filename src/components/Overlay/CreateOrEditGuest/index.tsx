import React, { useState, useCallback, ChangeEvent, useEffect, useMemo } from 'react';
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    GridItem,
    Radio,
    RadioGroup,
    ModalProps as ChakraModalProps,
    Text,
    useDisclosure,
    Flex,
    Button,
} from '@chakra-ui/react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { Modal } from '../Modal';
import { GuestsModel } from '../../../data/model/Guests';
import { InscriptionType } from '../../../data/enums/InscriptionType';
import { Input } from '../../Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import { FileWithPreview } from '../../../data/model/Files';
import { isPhone } from 'brazilian-values';
import InputUpload from '../../Form/InputUpload';
import { VaccineCard } from '../VaccineCard';
import toast from 'react-hot-toast';
import { HandleMessageResponse } from '../../../data/model/Api/HandleMessageModel';
import { actionService } from '../../../services/subscribe';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { actionDashboard } from '../../../services/dashboard';
import { convertFirstLetterEachWorldToUppercase } from '../../../data/utils/convertFirstLetterEachWorldToUppercase';

export interface ModalCreateOrEditGuestProps extends Omit<ChakraModalProps, 'children'> {
    guest?: GuestsModel | undefined
    onClose: () => void
    inscriptionType: InscriptionType
    handleRefetch: () => void
}

const CreateOrEditGuest: React.FC<ModalCreateOrEditGuestProps> = ({
    onClose,
    guest,
    inscriptionType,
    handleRefetch,
  ...rest
}) => {
    const { width } = useWindowSize();
    const [filesData, setFilesData] = useState<Array<FileWithPreview>>([]);
    const [urlFile, setUrlFile] = useState<string | undefined>(undefined);
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);
    const { onOpen: onOpenVaccineCard, ...propsModalVaccineCard } = useDisclosure();

    const signUpFormSchema = yup.object().shape({
        name: yup
            .string()
            .required("Por favor, informe o nome do convidado"),
        phone: yup
            .string()
            .test('phone', 'Informe um n??mero de telefone v??lido', (phone: string | undefined) => isPhone(phone || ''))
            .required("Por favor, informe seu telefone (whatsapp)"),
        email: yup.string().email("E-mail inv??lido. Por favor, informe um e-mail v??lido"),
        presenceAtTheEvent: yup
            .string()
            .test('presenceAtTheEvent', 'Por favor, informe se o convidado ir?? comparecer ao evento.', (presenceAtTheEvent: string | undefined) => {
                if (inscriptionType === InscriptionType.edit) {
                    return !!presenceAtTheEvent
                }
                return true
            })
            .nullable(),
    })
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm<GuestsModel>({
        resolver: yupResolver<yup.AnyObjectSchema>(signUpFormSchema),
    });

    const handleOnChangeRadioGroup = useCallback((event: string): void => {
        setValue('presenceAtTheEvent', event);
        clearErrors(['presenceAtTheEvent']);
        setFilesData([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const resetData = useCallback(() => {
        setFilesData([]);
        setValue('name', '');
        setValue('email', '');
        setValue('phone', '');
        setValue('presenceAtTheEvent', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCloseOverride = useCallback(() => {
        resetData();
        onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteAttachment = useCallback((fileName: string) => {
        const find = filesData
            ?.map((file: FileWithPreview) => file.name)
            ?.indexOf(fileName)
        if (find >= 0) {
            filesData.splice(find, 1)
            setFilesData([...filesData])
        }
    }, [filesData]);

    const submit: SubmitHandler<GuestsModel> = useCallback(async (data) => {
        setLoadingRequest(true);

        const dataPost = new FormData();
        if (data?.name) {
            dataPost.append('name', data?.name);
        }
        if (data?.email) {
            dataPost.append('email', data?.email);
        }
        if (data?.presenceAtTheEvent) {
            dataPost.append('presenceAtTheEvent', data?.presenceAtTheEvent);            
        }
        dataPost.append('phone', data?.phone);
        if (filesData[0]) {
            dataPost.append('vaccineFile', filesData[0]);
        }

        if (inscriptionType === InscriptionType.edit) {
            await actionDashboard.updateGuest(dataPost).then(async (res: HandleMessageResponse) => {
                handleRefetch();
                onCloseOverride();
                toast.success('Convidado editado com sucesso!');
            }).catch(() => {
                toast.error('Falha no envio das informa????es. Por favor, tente novamente!');
            }).finally(() => setLoadingRequest(false));
        } else {
            await actionDashboard.createGuest(dataPost).then(async () => {
                handleRefetch();
                onCloseOverride();
                toast.success('Convidado criado com sucesso!');
            })
            .catch(() => toast.error('Falha no envio das informa????es. Por favor, tente novamente!'))
            .finally(() => setLoadingRequest(false))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesData, inscriptionType]);
    
    const renderSizeModal = useMemo(() => {
        if (width && width <= 480) {
            return 'sm';
        } else {
            return '2xl';
        }
    }, [width]);

    const handleFormatName = useCallback((event: ChangeEvent<HTMLInputElement>, onChange: (...event: any[]) => void) => {
        const name = convertFirstLetterEachWorldToUppercase(event?.target?.value);
        onChange(name);
    }, [])
    
    useEffect(() => {
        reset(guest);
        if (guest?.urlVaccineCard) {
            setUrlFile(guest?.urlVaccineCard)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guest, InscriptionType]);

    return (
        <Modal
            size={renderSizeModal}
            backgroundModalContent="url(/images/layout/bg-top.png)"
            header={
                <Box>
                    <Text
                        fontSize={{ base: "1.5rem", md: "1.6rem", lg: "1.8rem" }}
                        fontWeight="bold"
                        color={'primary'}
                        textAlign={'center'}
                    >
                        {`${inscriptionType} Convidado`}
                    </Text>
                </Box>
            }
            onClose={onCloseOverride}
            {...rest}
        >
            <Box
                width="100%"
                maxWidth="700px"
                margin={{
                    base: "0rem auto 0.5rem",
                    md: "0.5rem auto 0.5rem",
                    lg: "0rem auto 0.5rem"
                }}
                as="form"
                onSubmit={handleSubmit(submit)}
            >
                <FormControl
                    width="80%"
                    padding="2% 8%"
                    height="auto"
                    margin="0 auto"
                >
                    <GridItem mb="2rem">

                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    id="name"
                                    label={"Nome"}
                                    type="text"
                                    IconType={undefined}
                                    placeholder="Digite o nome do convidado"
                                    error={errors.name}
                                    height="3rem"
                                    value={value}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleFormatName(event, onChange)}
                                />
                            )}
                        />
                    </GridItem>
                    {
                        inscriptionType === InscriptionType.edit && (
                            <GridItem mb="2rem">
                                <Input
                                id="email"
                                label={"E-mail"}
                                type="email"
                                placeholder="Digite seu e-mail"
                                error={errors.email}
                                height="3rem"
                                {...register('email')}
                                />
                            </GridItem>
                        )
                    }
                    <GridItem mb="2rem">
                        <Controller
                            control={control}
                            name="phone"
                            render={({ field: { onChange, value } }) => (
                                <InputMask
                                    name="phone"
                                    mask="(99) 9 9999-9999"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
                                    value={value}
                                >
                                    {() => (
                                        <Input
                                            placeholder={"Informe seu Whatsapp"}
                                            type="phone"
                                            label={"Telefone (Whatsapp)"}
                                            error={errors.phone}
                                            isRequired
                                            height="3rem"
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                    </GridItem>
                    {
                        inscriptionType === InscriptionType.edit && (
                            <>
                                <GridItem mb="1rem">
                                    <FormControl
                                        isInvalid={!!errors.presenceAtTheEvent}
                                        isRequired={inscriptionType === InscriptionType.edit}
                                        >
                                        <FormLabel mb="1rem">
                                            <Text
                                                as="label"
                                                fontWeight="bold"
                                                letterSpacing="0.2rem"
                                                color="text.tertiary"
                                                fontSize={{base:"1rem", md:"1.25rem"}}
                                                >
                                                Voc?? ir?? comparecer ao evento?
                                            </Text>
                                        </FormLabel>
                                        <RadioGroup
                                            value={getValues('presenceAtTheEvent')}
                                            onChange={handleOnChangeRadioGroup}
                                        >
                                            <Radio
                                                value="Y"
                                                pb={3}
                                                {...register('presenceAtTheEvent')}

                                                >
                                                <Text
                                                    colorScheme="text.secondary"
                                                    letterSpacing="0.2rem"
                                                    color="text.tertiary"
                                                    fontSize={{base:"1rem", md:"1.25rem"}}
                                                    >
                                                    Sim
                                                </Text>
                                            </Radio>
                                            <Radio
                                                value="N"
                                                ml="5rem"
                                                pb={3}
                                                {...register('presenceAtTheEvent')}
                                                >
                                                <Text
                                                    colorScheme="text.secondary"
                                                    letterSpacing="0.2rem"
                                                    color="text.tertiary"
                                                    fontSize={{base:"1rem", md:"1.25rem"}}
                                                    >
                                                    N??o
                                                </Text>
                                            </Radio>
                                        </RadioGroup>
                                        {!!errors.presenceAtTheEvent && (
                                            <FormErrorMessage>
                                                {errors.presenceAtTheEvent?.message}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                </GridItem>
                                {
                                    getValues('presenceAtTheEvent') === 'Y' && (
                                        <GridItem >
                                            <InputUpload
                                                openModal={onOpenVaccineCard}
                                                filesData={filesData}
                                                deleteAttachment={deleteAttachment}
                                                urlFile={urlFile}
                                                />
                                        </GridItem>
                                    )
                                }
                            </>
                        )
                    }
                    <Flex
                        width="100%"
                        justifyContent="center"
                        alignItems="center"
                        margin="0 auto"
                    >
                        <Button
                            type="submit"
                            margin="0 auto"
                            padding="5%"
                            fontWeight="bold"
                            letterSpacing="0.2rem"
                            color="#0c6a6b"
                            fontSize={{ base: "1rem", md: "1.25rem" }}
                            background="linear-gradient(45deg, #aadae9, #d6eef5)"
                            transition="background 300ms easy-in-out"
                            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                            isLoading={loadingRequest}
                            _hover={{
                                backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                            }}
                        >
                            Enviar             
                        </Button>
                    </Flex>
                </FormControl>
                <VaccineCard setFiles={setFilesData} {...propsModalVaccineCard}/>
            </Box>
        </Modal>
    );
}

export { CreateOrEditGuest }