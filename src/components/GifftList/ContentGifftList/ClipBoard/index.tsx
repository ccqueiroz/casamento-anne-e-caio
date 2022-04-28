import { Box, Button, Text, useClipboard } from '@chakra-ui/react';
import React, { useCallback } from 'react';

const TextWithClipBoardPix: React.FC = () => {
    const { hasCopied, onCopy } = useClipboard('b57b76b6-3a5d-4ffc-9a01-28f8a43b82c6');

    return (
        <Box
            width="100%"
            margin="1.5rem auto 2.25rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Button
                disabled={hasCopied}
                color="#0c6a6b"
                background="linear-gradient(45deg, #aadae9, #d6eef5)"
                transition="background 300ms easy-in-out"
                _hover={{
                    backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                }}
                onClick={onCopy}
            >
                <Text>
                    {
                        !hasCopied ? 'Clique aqui para copiar a chave PIX' : 'PIX copiado com sucesso'
                    }
                </Text>
            </Button>
        </Box>
    );
}
export {TextWithClipBoardPix}