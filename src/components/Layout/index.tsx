import React from 'react';
import { Box } from '@chakra-ui/react'
import { Hero } from '../Hero';
import { CountDown } from '../CountDownSection';
import { FrontDesk } from '../FrontDesk';
import { DressCode } from '../DressCode';
import { GifftList } from '../GifftList';
import { GallerySection } from '../GalleySection';
import { FooterSection } from '../FooterSection';
import { AttendenceConfirmation } from '../AttendenceConfirmation';
import { ButtonToTopPage } from '../ButtonToTopPage';
const Layout: React.FC = () => {
    return (
        <Box
            id="layout"
            maxWidth="100%"
            display="flex"
            flexDirection="column"
            margin="0 auto"
            position="relative"
        >
            <Hero />
            <CountDown />
            <FrontDesk />
            <DressCode />
            <GifftList />
            <GallerySection />
            <AttendenceConfirmation />
            <FooterSection />
        </Box>
    );
}

export { Layout }
