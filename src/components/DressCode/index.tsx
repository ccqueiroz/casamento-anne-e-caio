import { Box } from '@chakra-ui/react';
import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { DressCodeInformations } from './DressCodeInformations';
import { HeaderDressCode } from './HeaderDressCode';

const DressCode: React.FC = () => {

    return (
        <Box
            as="section"
            width="100vw"
            height="auto"
            padding="1% 5% 1%"
        >
            <HeaderDressCode />
            <DressCodeInformations />
            <ImagesFooterSection
                srcImage="/images/layout/concha-titulo.png"
                altimage="imagens de conchas"
            />
        </Box>
    );
}

export { DressCode }