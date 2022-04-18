import React from 'react';
import { Box } from '@chakra-ui/react'
import { Hero } from '../Hero';
import { CountDown } from '../CountDownSection';
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
