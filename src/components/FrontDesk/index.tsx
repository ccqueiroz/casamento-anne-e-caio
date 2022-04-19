import { Box } from '@chakra-ui/react';
import React from 'react';
import { BuffetPresentation } from './BuffetPresentation';
import { HeaderFrontDesk } from './HeaderFrontDesk';

const FrontDesk: React.FC = () => {

    return (
        <Box
            width="100vw"
            height="auto"
            padding="1% 5% 1%"
            >
            <HeaderFrontDesk />
            <BuffetPresentation/>
        </Box>
    );
}

export { FrontDesk }