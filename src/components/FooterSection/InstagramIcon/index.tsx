import { Box } from '@chakra-ui/react';
import React from 'react';

const InstagramIcon: React.FC = () => {

    return (
        <Box
            cursor="pointer"
            transform="scale(0.8)"
            width="2.5rem"
            height="2.5rem"
            backgroundImage="radial-gradient(
                circle at 33% 100%,
                #fed373 4%,
                #f15245 30%,
                #d92e7f 62%,
                #515ecf
            )"
            _hover={{
                filter:"opacity(0.8)"
            }}
            borderRadius="20%"
            position="relative"
            boxShadow="10px 2px 8px 1px rgba(0, 0, 0, 0.2)"
            _before={{
                content: "''",
                border: "3px solid white",
                backgroundColor:"transparente",
                borderRadius: "30%",
                width: "1.85rem",
                height: "1.85rem",
                top: "50%",
                left: "50%",
                transform:"translate(-50%, -50%)",
                position: "absolute",
                margin: "0 auto",
            }}
            _after={{
                content: "''",
                border: "2.5px solid white",
                borderRadius: "50%",
                width: "0.97rem",
                height: "0.97rem",
                top: "50%",
                left: "50%",
                transform:"translate(-50%, -50%)",
                position: "absolute",
                margin: "0 auto",
            }}
        >
            <Box
                as="span"
                border="1.5px solid white"
                borderRadius="100%"
                width="0"
                height="0"
                right="0.615rem"
                top="0.66rem"
                position="absolute"
                margin="auto"
            />
        </Box>
    );
}
export { InstagramIcon }