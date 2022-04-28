import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface BoxDivider extends Omit<BoxProps, 'children'>{}

const Divider: React.FC<BoxDivider> = ({...rest}) => {
    
    return (
        <Box
            as="span"
            backgroundImage="/images/divider.png"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="50% 53%"
            {...rest}
        />
    );
};

export { Divider }