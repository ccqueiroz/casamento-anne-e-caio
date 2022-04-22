import React from 'react';
import { Box } from '@chakra-ui/react'
import { Hero } from '../Hero';
import { CountDown } from '../CountDownSection';
import { FrontDesk } from '../FrontDesk';
import { DressCode } from '../DressCode';
import { GifftList } from '../GifftList';
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
            <FrontDesk />
            <DressCode />
            <GifftList/>
        </Box>
    );
}

export { Layout }
