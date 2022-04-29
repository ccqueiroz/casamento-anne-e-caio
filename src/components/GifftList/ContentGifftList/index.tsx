import { Box } from '@chakra-ui/layout';
import React from 'react';
import { TextComponent } from '../../TextComponent';
import { TextWithClipBoardPix } from './ClipBoard';

const ContentGifftList: React.FC = () => {
    return (
        <Box
            as="section"
            width="100%"
            maxWidth="900px"
            height="auto"
            margin="0 auto"
            padding="0.5% 1% 0"
        >
            <TextComponent
                text="Estamos muito felizes por você estar ao nosso lado nesse momento tão especial para nós!"
            />
            <TextComponent
                text="Se você quiser nos presentear, aqui está o nosso PIX b57b76b6-3a5d-4ffc-9a01-28f8a43b82c6 (ITAÚ), Anne Caroline Oliveira Lima, chave do tipo aleatória. Fique a vontade para nos enviar o que puder e quiser. ❤️"
                marginTop="1rem"
                marginBottom="1.5rem"
            />
            <TextWithClipBoardPix />
        </Box>
    );
}

export { ContentGifftList }