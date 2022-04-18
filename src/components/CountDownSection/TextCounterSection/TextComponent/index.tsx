import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface TextComponentProps extends TextProps {
    text: string,
    textIndent?: number
}

const TextComponent: React.FC<TextComponentProps> = ({
    text,
    letterSpacing="0.2rem",
    color="text.tertiary",
    fontSize="1.2rem",
    lineHeight = "1.8rem",
    textIndent = 50,
    ...rest
}) => {
    
    return (
        <Text
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textAlign="justify"
            style={{ textIndent }}
            {...rest}
        >
            {text}
        </Text>
    );
}

export { TextComponent }