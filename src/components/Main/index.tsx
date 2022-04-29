import { Box, Flex,  useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { ButtonToTopPage } from '../ButtonToTopPage';

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({
    children
}) => {
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
        const callback = () => {
            const oneParthOfVH = window.innerHeight / 100;
            const elementHero = document.getElementById('hero')?.getBoundingClientRect()?.top;
            if (elementHero && elementHero < -(oneParthOfVH * 59)) {
                if (!isOpen) {
                    onToggle();
                }
            } else {
                if (isOpen) {
                    onToggle();
                }
            }
        }
        document.getElementById('content-main')?.addEventListener('scroll', callback);
        return () => document.getElementById('content-main')?.removeEventListener('scroll', callback);
    });

    return (
        <Box
            id="content-main"
            overflowX="hidden"
            width="100vw"
            minHeight="100vh"
            height="auto"
            bgGradient="linear(45deg, primaryColor.500)"
            backgroundSize="200% 200%"
            scrollBehavior="smooth"
        >

            <Flex
                id="container-main"
                width="100%"
                minWidth="100vw"
                height="100vh"
                backdropFilter="blur(8.5px)"
                borderRadius="5px"
            >
                {children}
            </Flex>
            <ButtonToTopPage isOpen={isOpen}/>                    

        </Box>
    )
}
export {Main}