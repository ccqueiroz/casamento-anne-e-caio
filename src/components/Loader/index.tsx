import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ChakraBox } from '../ChakraBox/ChakraBox';

const Loader: React.FC = () => {

    return (
        <Box
            width="100vw"
            height="100vh"
            overflow="hidden"
            display="flex"
            justify-content="center"
            alignItems="center"
            backgroundImage={"linear-gradient(45deg, rgba(170, 218, 233, 1), rgba(214, 238, 245, 1))"}
        >
            < ChakraBox
                position="absolute"
                left={{
                    base: "39%",
                    md: "44%",
                    lg: "46%",
                    xl: "47%",
                    '2xl': "48%"
                }}
                top={{
                    base: "42%",
                    md: "40%",
                    lg: "41%",
                    xl: "41%",
                    '2xl': "40%"
                }}
                transform="translate(-50%, -50%)"
                animate={{
                    opacity: [0, 0.8, 0, 0.8, 0],
                    scale: [0.8, 1.4, 0.8, 1.4, 0.8],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                    duration: 7,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <Image id={`heart-loader-1`} src="/images/coracao.png" width="25px" height="25px" alt="corações pulsantes"/>
            </ChakraBox>
            < ChakraBox
                position="absolute"
                left={{
                    base: "53%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                    '2xl': "50%"
                }}
                top={{
                    base: "36%",
                    md: "35%",
                    lg: "36%",
                    xl: "35%",
                    '2xl': "35%"
                }}
                transform="translate(-50%, -50%)"
                animate={{
                    opacity: [0, 0.8, 0, 0.8, 0],
                    scale: [0.8, 1.5, 0.8, 1.5, 0.8]
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <Image id={`heart-loader-2`} src="/images/coracao.png" width="25px" height="25px" alt="corações pulsantes"/>
            </ChakraBox>
            < ChakraBox
                position="absolute"
                left={{
                    base: "56%",
                    md: "54%",
                    lg: "53%",
                    xl: "51%",
                    '2xl': "51%"
                }}
                top={{
                    base: "48.3%",
                    md: "47.3%",
                    lg: "46.4%",
                    xl: "46.3%",
                    '2xl': "44.3%"
                }}
                transform="translate(-50%, -50%)"
                animate={{
                    opacity: [0, 0.8, 0, 0.8, 0],
                    scale: [0.8, 1.2, 0.8, 1.2, 0.8],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <Image id={`heart-loader-3`} src="/images/coracao.png" width="25px" height="25px" alt="corações pulsantes"/>
            </ChakraBox>
        </Box>
    );
}

export default Loader