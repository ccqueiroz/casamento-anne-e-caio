import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BreakPointsProps } from '../../../data/model/BreakPoints';

const breakpointsFontSize = ({
    sm= '1.5rem',
    md= '2rem',
    xl= '2rem',
    x2xl = '3.5rem'
}: BreakPointsProps) => {
    return {
                sm,
                md,
                xl,
                '2xl': x2xl,
            }
}
const breakpointsLineHeight = ({
    sm= '2.5rem',
    md= '3rem',
    xl= '3rem',
    x2xl = '4.5rem'
}: BreakPointsProps) => {
    return {
                sm,
                md,
                xl,
                '2xl': x2xl,
            }
}
const textShadow = `0.1rem 0.1rem 0.4rem`

const EngagedAndDate: React.FC = () => {

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin={{
                base: "0 auto",
                md: "15px auto 0 auto",
                '2xl': "20px auto 0 auto"
            }}
        >
            <Text
                as="span"
                fontFamily="Abel-Text-Secondary"
                fontSize={{ ...breakpointsFontSize({}) }}
                color="text.secondary"
                lineHeight={{ ...breakpointsLineHeight({}) }}
                letterSpacing={'0.3rem'}
                fontWeight="bold"
                textShadow={textShadow}
            >
                Anne Caroline & Caio Queiroz
            </Text>
            <Text
                as="span"
                fontFamily="Abel-Text-Secondary"
                fontSize={{ ...breakpointsFontSize({sm: '1rem', md: '1.5rem', xl: '2rem', x2xl: '2rem'}) }}
                color="text.secondary"
                textAlign="center"
                lineHeight={{...breakpointsLineHeight({})}}
                textShadow={textShadow}
            >
                29.05.2022
            </Text>
            <Image src="/images/layout/conchas-top.png" width="300" height={{
                lg:'70px',
                '2xl': '86px'
            }} alt="imagens de conchas"/>
        </Flex>
    )
}
export { EngagedAndDate }