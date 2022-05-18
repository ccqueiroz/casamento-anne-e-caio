import React, { ChangeEvent, useCallback, useState } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    GridItem,
    Radio,
    RadioGroup,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { Input } from '../../Form/Input';
import InputMask from 'react-input-mask';
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { isPhone } from 'brazilian-values';
import { GuestsModel } from '../../../data/model/Guests';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputUpload from '../../Form/InputUpload';
import { VaccineCard } from '../../Overlay/VaccineCard';
import { FileWithPreview } from '../../../data/model/Files';
import toast from 'react-hot-toast';
import { actionService } from '../../../services/subscribe';
import { ModalGuestResponse } from '../../Overlay/GuestResponseModal';
import { GuestResponseModal } from '../../../data/model/UserResponseModal';
import { HandleMessageResponse } from '../../../data/model/Api/HandleMessageModel';
import { ModalGuestResponseGoTo } from '../../Overlay/GuestResponseModalGoTo';

type FunctionCallbackOpenModal = {
    onOpen: () => void
}

const FormAttendenceConfirmation: React.FC = () => {
    const { onOpen: onOpenVaccineCard, ...propsModalVaccineCard } = useDisclosure();
    const { onOpen: onOpenGuestResponse, onClose: onCloseGuestResponse, ...propsModalGuestResponse } = useDisclosure();
    const { onOpen: onOpenGuestResponseGoTo, onClose: onCloseGuestResponseGoTo, ...propsModalGuestResponseGoTo } = useDisclosure();
    const [dataGuestResponse, setDataGuestResponse] = useState<GuestResponseModal>({});
    const [filesData, setFilesData] = useState<Array<FileWithPreview>>([]);
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);
    const signUpFormSchema = yup.object().shape({
        phone: yup
            .string()
            .test('phone', 'Informe um número de telefone válido', (phone: string | undefined) => isPhone(phone || ''))
            .required("Por favor, informe seu telefone (whatsapp)"),
        email: yup.string().email("E-mail inválido. Por favor, informe um e-mail válido"),
        presenceAtTheEvent: yup.string().required('Por favor, informe se você poderá comparecer ao evento.'),
    })
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
        clearErrors,
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

    const reset = useCallback(() => {
        setDataGuestResponse({});
        setFilesData([]);
        setValue('email', '');
        setValue('phone', '');
        setValue('presenceAtTheEvent', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnOpenModalGuestResponses = useCallback(({statusCode, message, guest, onOpen}: GuestResponseModal & FunctionCallbackOpenModal) => {
        setDataGuestResponse({
            statusCode,
            message,
            guest,
        })
        onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCloseModalGuestResponse = useCallback(() => {
        reset();
        onCloseGuestResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCloseModalGuestResponseGoTo = useCallback(() => {
        reset();
        onCloseGuestResponseGoTo();
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
        if (data?.presenceAtTheEvent === 'Y' && filesData.length === 0) {
            toast.error('Por favor, faça o upload do seu cartão de vacina.');
            return;
        }
        setLoadingRequest(true);

        const dataPost = new FormData();
        if (data?.email) {
            dataPost.append('email', data?.email);
        }
        if (data?.presenceAtTheEvent) {
            dataPost.append('presenceAtTheEvent', data?.presenceAtTheEvent);            
        }
        dataPost.append('phone', data?.phone);
        dataPost.append('vaccineFile', filesData[0]);

        await actionService.subscribe(dataPost).then((res: HandleMessageResponse) => {
            if (res?.code === 200 && res?.guest?.presenceAtTheEvent === 'Y') {
                handleOnOpenModalGuestResponses({
                    guest: res.guest,
                    statusCode: res.code,
                    onOpen: onOpenGuestResponseGoTo
                });
                return
            }
            handleOnOpenModalGuestResponses({
                guest: res.guest,
                statusCode: res.code,
                onOpen: onOpenGuestResponse
            });
        }).catch((err) => {
            if (err?.response?.status === 404) {
                handleOnOpenModalGuestResponses({
                    statusCode: err?.response?.status,
                    message: err?.response?.data,
                    onOpen: onOpenGuestResponse
                });
                return;
            }
            toast.error('Falha no envio das informações. Por favor, tente novamente!');
        }).finally(() => setLoadingRequest(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesData]);

    return (
        <Box
            width="100%"
            maxWidth="700px"
            margin={{
                base: "0rem auto 0.5rem",
                md: "0.5rem auto 0.5rem",
                lg: "1rem auto 0.5rem"
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
                <GridItem mb="2.5rem">
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
                <GridItem mb="2.5rem">
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
                <GridItem mb="1rem">
                    <FormControl
                        isInvalid={!!errors.presenceAtTheEvent}
                        isRequired
                    >
                        <FormLabel mb="1rem">
                            <Text
                                as="label"
                                fontWeight="bold"
                                letterSpacing="0.2rem"
                                color="text.tertiary"
                                fontSize={{base:"1rem", md:"1.25rem"}}
                            >
                                Você irá comparecer ao evento?
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
                                    Não
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
                            />
                        </GridItem>
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
            <ModalGuestResponseGoTo
                onClose={handleCloseModalGuestResponseGoTo}
                guest={dataGuestResponse?.guest}
                statusCode={dataGuestResponse?.statusCode}
                message={dataGuestResponse?.message}
                {...propsModalGuestResponseGoTo}
            />
            <ModalGuestResponse
                onClose={handleCloseModalGuestResponse}
                guest={dataGuestResponse?.guest}
                statusCode={dataGuestResponse?.statusCode}
                message={dataGuestResponse?.message}
                {...propsModalGuestResponse}
            />
            <VaccineCard setFiles={setFilesData} {...propsModalVaccineCard}/>
        </Box>
    );
}

export { FormAttendenceConfirmation }