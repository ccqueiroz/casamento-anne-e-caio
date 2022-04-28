import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { TextComponent } from '../../TextComponent';

const TextCounterSection: React.FC = () => {

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
                text="Bem-vindos ao nosso site de casamento. Criamos esse espaço para compartilhar com vocês os detalhes da nossa cerimônia e recepção desse momento tão especial. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"
            />
            <TextComponent
                text="Aqui vocês encontrarão também informações sobre os trajes, localização do buffet, horário e etc."
                marginTop="1rem"
            />
            <TextComponent
                text="Ah, é importante também confirmar sua presença. Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários, principalmente com o passaporte de vacinação."
                marginTop="1rem"
            />
            <TextComponent
                text="Para nos presentear, vamos deixar aqui o nosso pix b57b76b6-3a5d-4ffc-9a01-28f8a43b82c6 (Chave aleatória), Anne Caroline Oliveira Lima. Fiquem à vontade!"
                marginTop="1rem"
            />
            <TextComponent
                text="Aguardamos vocês no nosso grande dia!"
                textIndent={0}
                marginTop="1rem"
            />
        </Box>
    );
}

export { TextCounterSection };