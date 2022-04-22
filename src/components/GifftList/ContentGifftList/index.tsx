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
            padding="1%"
        >
            <TextComponent
                text="Estamos muito felizes por você estar ao nosso lado nesse momento tão especial para nós!"
            />
            <TextComponent
                text="Se você quiser nos presentear, aqui está o nosso PIX 04653621330 (ITAÚ), chave do tipo CPF. Fique a vontade para nos enviar o que puder e quiser. ❤️"
                marginTop="1rem"
                marginBottom="1.5rem"
            />
            <TextWithClipBoardPix />
        </Box>
    );
}

export { ContentGifftList }