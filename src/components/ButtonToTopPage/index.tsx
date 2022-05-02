import { Box, Button, Link, ScaleFade } from '@chakra-ui/react';
import React from 'react';
import { excludeHashLink } from '../../data/utils/excludeHashLink';
import { HiArrowNarrowUp } from 'react-icons/hi';

type ButtonToTopPageParams = {
    isOpen: boolean
}
const ButtonToTopPage: React.FC<ButtonToTopPageParams> = ({isOpen}) => {
    return (
        <ScaleFade initialScale={1} in={isOpen}>
            <Button
                id="buttonToTop"
                position="absolute"
                bottom={{base: "15%", md: "5%"}}
                right="5%"
                width="50px"
                height="50px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundImage="linear-gradient(205deg, rgba(12, 106, 107, 0.7), rgba(147, 194, 194, 0.7), rgba(170, 218, 233, 0.7) 5%)"
                boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
                borderRadius="50%"
                _hover={{
                    filter:"opacity(0.8)"
                }}
                onClick={() => excludeHashLink("hero")}
            >
                <Box
                    title="Ir para o topo da página"
                    aria-describedby={`link âncora para ir topo da página.`}
                    aria-labelledby={"ir ao topo da página"}
                >
                    <HiArrowNarrowUp color="#0c6a6b" size="1.5rem"/>
                </Box>
            </Button>
        </ScaleFade>
    );
 };

export { ButtonToTopPage };