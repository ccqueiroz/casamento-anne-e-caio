import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { BuffetPresentation } from './BuffetPresentation';
import { HeaderFrontDesk } from './HeaderFrontDesk';
import { MapBuffet } from './MapBuffet';

const FrontDesk: React.FC = () => {

    return (
        <Box
            width="100vw"
            height="auto"
            padding="1% 5% 1%"
            >
            <HeaderFrontDesk />
            <BuffetPresentation />
            <MapBuffet />
            <Image
                src="/images/layout/concha-titulo.png" width="284px" height={{
                lg:'70px',
                '2xl': '86px'
                }} alt="imagens de conchas" margin="0 auto"
                objectFit="contain"
                objectPosition="bottom"
            />
        </Box>
    );
}

export { FrontDesk }