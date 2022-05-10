import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface TextComponentProps extends Omit<TextProps, 'children'> {
    text: string | undefined,
    textIndent?: number
}

const TextComponent: React.FC<TextComponentProps> = ({
    text,
    letterSpacing="0.16rem",
    color="text.tertiary",
    fontSize="1.2rem",
    lineHeight = "1.8rem",
    textIndent = 50,
    textAlign = "justify",
    fontFamily = "TimesRoman",
    ...rest
}) => {
    
    return (
        <Text
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textAlign={textAlign}
            fontFamily={fontFamily}
            style={{ textIndent }}
            {...rest}
        >
            {text}
        </Text>
    );
}

export { TextComponent }