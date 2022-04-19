import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';

interface HeaderDividerComponentProps {
    text: string
}

const HeaderDividerComponent: React.FC<HeaderDividerComponentProps> = ({
    text
}) => {

    return (
        <Box
            width="100%%"
            maxWidth="1200px"
            margin="0 auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Divider flexShrink={1} display={{ base: 'none', lg:'inline-block'}} bg="text.secondary" height="1px"/>
            <Text
                fontSize={{
                    base: '1.25rem',
                    lg:'1.725rem'
                }}
                color="text.secondary"
                fontWeight="bold"
                minWidth="18%"
                flexShrink={1}
                textAlign="center"
            >
                {text.toUpperCase()}
            </Text>
            <Divider flexShrink={1} display={{ base: 'none', lg:'inline-block'}} bg="text.secondary" height="1px"/>
        </Box>
    );
}

export { HeaderDividerComponent }