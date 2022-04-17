import React from 'react';
import bg from '../../../public/images/bg-layout.png'
import { Box, Text } from '@chakra-ui/react'
import { Hero } from '../Hero';
import { CountDown } from '../CountDown';
const Layout: React.FC = () => {
    return (
        <Box
            maxWidth="100%"
            display="flex"
            flexDirection="column"
            margin="0 auto"
        >
            <Hero />
            <CountDown />
        </Box>
    );
}

export { Layout }
