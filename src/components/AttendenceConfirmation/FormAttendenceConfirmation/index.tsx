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
} from '@chakra-ui/react';
import React from 'react';
import { Input } from '../../Form/Input';
import InputMask from 'react-input-mask';
import { SubmitHandler, useForm, Controller, FieldError } from 'react-hook-form'
import { UserModel } from '../../../data/model/User';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FormAttendenceConfirmation: React.FC = () => {
  const signUpFormSchema = yup.object().shape({
    phone: yup
      .string()
      .required("Por favor, informe seu telefone (whatsapp)"),
    email: yup.string().email("E-mail inválido. Por favor, informe um e-mail válido").required("Por favor, informe seu e-mail"),
    presenceAtTheEvent: yup.string().required('Por favor, informe se você poderá comparecer ao evento.')
  })
    const {
        register,
        handleSubmit,
        reset,
        trigger,
        setValue,
        getValues,
        control,
        clearErrors,
    formState: { errors, isSubmitting },
    } = useForm<UserModel>({
    resolver: yupResolver<yup.AnyObjectSchema>(signUpFormSchema),
  })
    return (
        <Box
            width="100%"
            maxWidth="700px"
            margin="2rem auto 0.5rem"
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
                    type="e-mail"
                    isRequired={true}
                    placeholder="Digite seu e-mail"
                    error={errors.email}
                    height="3rem"
                    {...register('email')}
                    />
                </GridItem>
                <GridItem mb="2rem">
                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, value } }) => (
                            <InputMask
                                mask="(99) 9 9999-9999"
                                onChange={(e) => onChange(e.target.value)}
                                value={value}
                            >
                                {() => (
                                    <Input
                                        placeholder={"Informe seu número de Whatsapp"}

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
                    <GridItem mb="2rem">
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
                                onChange={() => {}}
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
                                ml="5rem"
                                value="N"
                                pb={3}
                                colorScheme="cyan.200"
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
                <Flex
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    margin="0 auto"
                >
                    <Button
                        margin="0 auto"
                        padding="5%"
                        fontWeight="bold"
                        letterSpacing="0.2rem"
                        color="#0c6a6b"
                        fontSize={{ base: "1rem", md: "1.25rem" }}
                        background="linear-gradient(45deg, #aadae9, #d6eef5)"
                        transition="background 300ms easy-in-out"
                        boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                        _hover={{
                            backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                        }}
                    >
                        Enviar             
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    );
}

export { FormAttendenceConfirmation }