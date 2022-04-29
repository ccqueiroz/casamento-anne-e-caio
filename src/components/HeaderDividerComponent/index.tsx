import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Divider } from '../Divider';

interface HeaderDividerComponentProps {
    text: string
}

const HeaderDividerComponent: React.FC<HeaderDividerComponentProps> = ({
    text
}) => {

    return (
        <Box
            width="100%%"
            maxWidth="1350px"
            margin="0 auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="60px"
        >
            <Divider height="90%" flex={1} display={{ base: 'none', lg:'inline-block'}}/>
            <Text
                fontSize={{
                    base: '1.25rem',
                    lg:'1.725rem'
                }}
                color="text.secondary"
                fontWeight="bold"
                minWidth="auto"
                textAlign="center"
                wordBreak="unset"
                fontFamily="TimesRoman"
                letterSpacing="0.15rem"
            >
                {text.toUpperCase()}
            </Text>
            <Divider height="90%" flex={1} display={{ base: 'none', lg:'inline-block'}}/>
        </Box>
    );
}

export { HeaderDividerComponent }