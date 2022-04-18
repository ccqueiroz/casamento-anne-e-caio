import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';

const HeaderCountDown: React.FC = () => {
    
    return (
        <Box
            width="100%%"
            maxWidth="1200px"
            margin="0 auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Divider width="35%" display={{ base: 'none', lg:'inline-block'}} bg="text.secondary" height="1px"/>
            <Text fontSize={{
                base: '1.25rem',
                lg:'1.725rem'
            }}
            color="text.secondary"
                fontWeight="bold"
                flexShrink={1}
                textAlign="center"
            >
                CONTAGEM REGRESSIVA
            </Text>
            <Divider width="35%" display={{ base: 'none', lg:'inline-block'}} bg="text.secondary" height="1px"/>
        </Box>
    );
}

export { HeaderCountDown }