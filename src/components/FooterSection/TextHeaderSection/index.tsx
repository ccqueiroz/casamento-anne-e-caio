import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface TextHeaderSectionProps extends TextProps{}
const TextHeaderSection: React.FC<TextHeaderSectionProps> = ({
    children,
    ...rest
}) => {

    return (
        <Text
            letterSpacing="0.2rem"
            color="#0c6a6b"
            fontSize={{ base: "0.85rem", md: "0.95rem" }}
            fontWeight="bold"
            {...rest}
        >
            {children}
        </Text>
    );
}

export { TextHeaderSection }