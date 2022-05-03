import React, {memo} from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import { Input } from '../../../components/Form/Input';
import { WrapperSections } from '../../../components/WrapperSections';

const SingUp: React.FC = () => {

    return (
        <WrapperSections
            id="dashboard"
            width="100vw"
            height="100vh"
            margin="0px auto 0px auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            backgroundImage="url(/images/layout/bg-top.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            padding={{
                base: '0 5%'
            }}
            _before={{
                content: {
                    base: "url(/images/layout/img-top-left.png)",
                    lg: "url(/images/layout/obj-mar.png)"
                },
                position: "absolute",
                right: {
                    base: "auto",
                    lg: 0
                },
                top: 0,
                left: {
                    base: 0,
                    lg: "auto"
                },
            }}
        >
            <Box
                width="100%"
                maxWidth="1200px"
                display="flex"
                flexDirection="column"
            >
                <Box
                    width="60%"
                    backgroundImage="linear-gradient(270deg, #93c2c2, #aadae9, #93d1e4, #d6eef5)"
                    boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
                    margin="0 auto"
                    padding="2rem 5rem"
                    borderRadius="15px"
                >
                    <Box position="relative" height="70px">
                        <Image
                            position="absolute"
                            left={{base: "48%"}}
                            top={{base: "0px", md: "5px"}}
                            transform="translateX(-50%)"
                            src="/images/brasao-main.svg"
                            alt="logo do casal Anne e Caio"
                            width={{base: "165px", md: "30%"}}
                            height="100%"
                            objectFit="cover"
                            objectPosition="center"
                            margin="0 auto"
                            filter="drop-shadow(0px 0px 3px #93c2c2)"
                        />
                    </Box>
                    <Flex flexDirection="column" gap={4}>
                        <Input
                            id="email"
                            label={"E-mail"}
                            type="email"
                            placeholder="Digite seu e-mail"
                            // error={errors.email}
                            height="3rem"
                            // {...register('email')}
                        />
                        <Input
                            id="email"
                            label={"Senha"}
                            type="email"
                            placeholder="Digite sua senha"
                            // error={errors.email}
                            height="3rem"
                            // {...register('email')}
                        />
                    </Flex>
                    <Flex
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    margin="0 auto"
                >
                    <Button
                        type="submit"
                        margin="1.25rem auto"
                        padding="2%"
                        fontWeight="bold"
                        letterSpacing="0.2rem"
                        color="#0c6a6b"
                        fontSize={{ base: "1rem", md: "1.15rem" }}
                        background="linear-gradient(45deg, #aadae9, #d6eef5)"
                        transition="background 300ms easy-in-out"
                        boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                        // isLoading={loadingRequest}
                        _hover={{
                            backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                        }}
                    >
                        Enviar             
                    </Button>
                </Flex>
                </Box>
            </Box>
        </WrapperSections>
    );
};

export default memo(SingUp);