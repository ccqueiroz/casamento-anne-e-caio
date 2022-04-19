import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { TextComponent } from '../../../TextComponent';

const ContentTexts: React.FC = () => {

    return (
        <Flex
            width="100%"
            flexDirection="column"
        >
            <Box
                marginBottom={{
                    base: "1.5rem",
                    xl:"3rem"
                }}
            >
                <TextComponent
                    text="Passeio Completo"
                    textIndent={0}
                />
            </Box>
            <Box
                marginBottom="1.5rem"
            >
                <TextComponent
                    text="Eles"
                    textIndent={0}
                    fontWeight="bold"
                    fontStyle="italic"
                    marginBottom="1.5rem"
                />
                <TextComponent
                    text="Blusa, calça e sapato social. Terno e gravata é opcional. Lembrando que é um ambiente aberto, próximo à praia. Vá à vontade, mas seguindo as sugestões anteriores."
                    fontSize={{
                        base:"1rem",                        
                    }}
                    lineHeight="1.5rem"
                    wordBreak="break-word"
                />
            </Box>
            <Box
                marginBottom="1.5rem"
            >
                <TextComponent
                    text="Elas"
                    textIndent={0}
                    fontStyle="italic"
                    fontWeight="bold"
                    marginBottom="1.5rem"
                />
                <TextComponent
                    text="Sugerimos vestidos leves, midi/curto. Lembre-se que o ambiente é aberto, próximo à praia, com muita grama, então invista em saltos mais baixos ou quadrados para seu conforto."
                    fontSize={{
                        base:"1rem",                        
                    }}
                    lineHeight="1.5rem"
                    wordBreak="break-word"
                />
            </Box>
        </Flex>
    )
}

export { ContentTexts }