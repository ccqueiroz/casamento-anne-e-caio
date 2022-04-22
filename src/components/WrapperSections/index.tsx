import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface WrapperSectionsProps extends Omit<BoxProps, 'children'> {
    children: React.ReactNode
}

const WrapperSections: React.FC<WrapperSectionsProps> = ({
    children,
    width = "100vw",
    height = "auto",
    padding = "1% 5% 0%",
    as="section",
    ...rest
}) => {
    return (
        <Box
            as={as}
            width={width}
            height={height}
            padding={padding}
            {...rest}
        >
            {children}
        </Box>
    );
}

export { WrapperSections }