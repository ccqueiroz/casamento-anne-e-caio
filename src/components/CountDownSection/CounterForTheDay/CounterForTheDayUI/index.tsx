import { Box, Text } from '@chakra-ui/react';
import React, {memo} from 'react';

interface CounterForTheDayUIProps {
    name: string
    value: number | null
}

const CounterForTheDayUI: React.FC<CounterForTheDayUIProps> = ({
    name,
    value
}) => {

    return (
        <Box
            width={{
                base: '100px',
            lg:'150px'
            }}
            height={{
                base: '100px',
                lg:'150px'
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="0.5rem"
        >
            <Box
                width={{
                    base: '70px',
                    lg:'85px'
                }}
                height={{
                    base: '70px',
                    lg:'85px'
                }}
                border="1px"
                borderRadius="50%"
                borderColor="text.secondary"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    fontFamily="TimesRoman"
                    letterSpacing="0.15"
                    color="text.secondary"
                    fontSize={{
                        base: "1.3rem",
                        lg:"1.6rem"
                    }}
                >
                    {value}
                </Text>
            </Box>
            <Text
                fontFamily="TimesRoman"
                letterSpacing="0.15"
                color="text.secondary"
                fontSize={{
                    base: "1.3rem",
                    lg:"1.6rem"
                }}
            >
                {name}
            </Text>
        </Box>
    );

}

export default memo(CounterForTheDayUI);