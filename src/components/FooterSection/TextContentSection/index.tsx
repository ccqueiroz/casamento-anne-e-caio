import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface TextContentSectionProps extends TextProps{}
const TextContentSection: React.FC<TextContentSectionProps> = ({
    children,
    ...rest
}) => {

    return (
        <Text
            letterSpacing="0.2rem"
            color="#0c6a6b"
            fontSize={{ base: "0.85rem", md: "0.95rem" }}
            {...rest}
        >
            {children}
        </Text>
    );
}

export { TextContentSection }