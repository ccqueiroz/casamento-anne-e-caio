import React, {memo} from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import { WrapperSections } from '../../../components/WrapperSections';
import { signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
const SignIn: React.FC = () => {
    return (
        <WrapperSections
            id="sigin"
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
                    width={{ base: "100%", md: "70%", lg: "50%" }}
                    maxWidth="516px"
                    backgroundImage="linear-gradient(270deg, #93c2c2, #aadae9, #93d1e4, #d6eef5)"
                    boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
                    margin="0 auto"
                    padding={{ base: "2rem 2rem", md: "2rem 5rem"}}
                    borderRadius="15px"
                >
                    <Box position="relative" height="70px" minWidth="240px" maxWidth="300px" margin="0 auto">
                        <Image
                            position="absolute"
                            left={{base: "48%"}}
                            transform="translateX(-50%)"
                            src="/images/brasao-main.svg"
                            alt="logo do casal Anne e Caio"
                            width={{base: "60%", lg: "65%"}}
                            height="100%"
                            objectFit="cover"
                            objectPosition="center"
                            margin="0 auto"
                            filter="drop-shadow(0px 0px 3px #93c2c2)"
                        />
                    </Box>
                    <Flex
                        width="100%"
                        minWidth="240px"
                        maxWidth="350px"
                        justifyContent="center"
                        alignItems="center"
                        margin="0 auto"
                    >
                        <Button
                            width="100%"
                            height={{base: "40px", md: "50px"}}
                            // onClick={() => signIn('google')}
                            type="button"
                            margin="1.25rem auto"
                            padding="2%"
                            fontWeight="bold"
                            letterSpacing="0.2rem"
                            color="#0c6a6b"
                            fontSize={{ base: "0.8rem", md: "1rem", lg:"1rem" }}
                            background="linear-gradient(45deg, #aadae9, #d6eef5)"
                            transition="background 300ms easy-in-out"
                            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                            leftIcon={<FcGoogle size="1.25rem"/>}
                            _hover={{
                                backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                            }}
                        >
                            Fazer Login com Google            
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </WrapperSections>
    );
};

export default memo(SignIn);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    // const session = await getSession({ req });
    // if(session){
    //     return {
    //         redirect:{
    //             destination: `/dashboard/lista-de-convidados`,
    //             permanent: false
    //         }
    //     };
    // }
    return {
        props:{}
    }
}
