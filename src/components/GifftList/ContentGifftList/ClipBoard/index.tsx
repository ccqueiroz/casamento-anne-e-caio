import { Box, Button, Text, useClipboard } from '@chakra-ui/react';
import React, { useCallback } from 'react';

const TextWithClipBoardPix: React.FC = () => {
    const { hasCopied, onCopy } = useClipboard('04653621330');
    
    const handleClipBoard = useCallback(() => {
        if (!hasCopied) {
            onCopy()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasCopied])

    return (
        <Box
            width="100%"
            margin="1.5rem auto"
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