import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { BuffetPresentation } from './BuffetPresentation';
import { HeaderFrontDesk } from './HeaderFrontDesk';
import { MapBuffet } from './MapBuffet';

const FrontDesk: React.FC = () => {

    return (
        <Box
            as="section"
            width="100vw"
            height="auto"
            padding="1% 5% 0%"
        >
            <HeaderFrontDesk />
            <BuffetPresentation />
            <MapBuffet />
            <ImagesFooterSection
                srcImage="/images/layout/concha-titulo.png"
                altimage="imagens de conchas"
            />
        </Box>
    );
}

export { FrontDesk }