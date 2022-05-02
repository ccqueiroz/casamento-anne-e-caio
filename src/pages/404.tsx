import React, { memo, useEffect, useRef, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { WrapperSections } from '../components/WrapperSections';
import type { LottiePlayer } from 'lottie-web';
import { TextComponent } from '../components/TextComponent';
import Link from 'next/link';
import { GetStaticProps } from 'next';

const textShadow = `0.1rem 0.1rem 0.4rem`;

const Custom404: React.FC = () => {
    const refLottie = useRef<HTMLDivElement>(null);
    const [lottie, setLottie] = useState<LottiePlayer | null>(null);

    useEffect(() => {
        Promise.resolve(import('lottie-web')).then((lottieRes) => setLottie(lottieRes.default))
    }, []);

    useEffect(() => {
        if (lottie && refLottie && refLottie.current) {
            const animation = lottie.loadAnimation({
                container: refLottie.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'lottie/42818-beach.json'
            });

            return () => animation.destroy();
        }
    }, [lottie]);

    return (
        <WrapperSections
            id="404Error"
            width="100vw"
            height="100vh"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            flexDirection="column"
            position="relative"
            backgroundImage="url(/images/layout/bg-top.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            padding={{
                base: "30% 5%",
                md: '15% 5%',
                lg: '7% 5%'
            }}
        >
            <Box height={{base:" 40px", lg:"80px"}}>
                <TextComponent as="h1" text="404 NOT FOUND" textIndent={0} color="text.secondary" fontWeight="bold" fontSize={{
                    base: '2rem',
                    md: '2.5rem',
                    xl: '2.6rem',
                    '2xl': '2.9rem'
                }} textShadow={textShadow}/>
            </Box>
            <Box ref={refLottie}
                width="auto"
                height={{base: "50%", md:" 55%", lg:"70%", xl:"60%"}}
                margin="2rem 0 0 3rem"
                position="relative"
                top="-40px"
            />
            <Flex
                width={{
                    base: '100%',
                    md:" 70%",
                    xl: '30%'
                }}
                height="auto" justifyContent="center" alignItems="center" position="relative">
                <Link href="/" passHref prefetch scroll>
                    <a>
                        <Box
                            position="absolute"
                            left="50%"
                            transform="translateX(-50%)"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minWidth="150px"
                            minHeight="40px"
                            margin="0 auto" 
                            padding={{
                                base: "4%",
                                md: "3%",
                                lg: "2%"
                            }}
                            fontWeight="bold"
                            letterSpacing="0.2rem"
                            color="#0c6a6b"
                            borderRadius="10px"
                            background="linear-gradient(45deg, #aadae9, #d6eef5)"
                            transition="background 300ms easy-in-out"
                            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                            _hover={{
                                backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                            }}
                        >
                            <Box as="span" fontSize={{ base: "1.2rem", lg: "1.3rem" }}>
                                Voltar
                            </Box>
                        </Box>
                    </a>
                </Link>
            </Flex>
        </WrapperSections>
    );

}

export default memo(Custom404);

export const getStaticProps: GetStaticProps = async () => {
  return { 
    props: {},
    revalidate: 60 * 60 * 24 * 2 //48 horas
   }
}

