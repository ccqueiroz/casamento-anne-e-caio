import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({
    children
}) => {
    return (
        <Box
            overflowX="hidden"
            width="100vw"
            minHeight="100vh"
            height="auto"
            bgGradient="linear(45deg, primaryColor.500)"
            backgroundSize="200% 200%"
            position="relative"
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
        </Box>
    )
}
export {Main}