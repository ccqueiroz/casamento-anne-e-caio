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
                text="Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"
            />
            <TextComponent
                text="Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc."
                marginTop="1rem"
            />
            <TextComponent
                text="Ah, é importante também confirmar sua presença. Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários."
                marginTop="1rem"
            />
            <TextComponent
                text="Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas, ou então vocês podem utilizar a opção de cotas. Fiquem à vontade!"
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