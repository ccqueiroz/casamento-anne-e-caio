import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { TextComponent } from '../../TextComponent';

const BuffetPresentation: React.FC = () => {
    return (
        <Box
            marginTop="1.5%"
            width="100%"
        >
            <Image
                margin="0 auto"
                src="/images/atlantis-buffet.jpg"
                alt="buffet espaço atlantis"
                height={{
                    base: '300px',
                    md: '450px',
                    lg: '480px',
                    '2xl':'500px'
                }}
                objectFit="contain"
                objectPosition="center"
                borderRadius="20px"
                boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
            />
            <Box
                width={{
                    base: "100%",
                    md: '70%',
                    lg:'70%',
                    xl: '55%',
                    '2xl':'50%'
                }}
                margin="1rem auto 1rem"
            >
                <TextComponent
                    text="Os noivos convidam para a cerimônia e recepção no dia 29 de maio de 2022, a partir de 15h30, no Atlantis Buffet, em Iparana, Caucaia. "
                    wordBreak="break-word"
                    textAlign="center"
                    textIndent={0}
                    letterSpacing="0.1rem"
                />
                <TextComponent
                    text="Não vai perder, né?"
                    wordBreak="break-word"
                    textAlign="center"
                    textIndent={0}
                    letterSpacing="0.1rem"
                />
            </Box>
        </Box>
    );
}

export { BuffetPresentation }