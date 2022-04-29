import { Box, Grid, GridItem, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { TextContentSection } from './TextContentSection';
import { TextHeaderSection } from './TextHeaderSection';
import { InstagramIcon } from './InstagramIcon';

const FooterSection: React.FC = () => {
    return (
        <Box
            as="footer"
            width="100%"
            height="auto"
            padding="2rem"
            backgroundImage="url(/images/layout/bg-top.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
        >
            <Grid
                justifyContent="space-between"
                alignItems="center"
                padding={{
                    base: "0",
                    md: "0 1.5rem",
                    lg:"0 1rem",
                    xl:"0 4rem",
                }}
                width="100%"
                maxWidth="1400px"
                margin="0 auto"
                display={['flex', 'flex', 'grid']}
                flexDir={['column', 'column', 'initial']}
                templateColumns="repeat(12, 1fr)"
                gap={6}
            >
                <GridItem colSpan={{ base: 12, lg: 4 }} >
                    <TextContentSection wordBreak="break-word" textAlign={{base: 'center', lg:'left'}} padding="0 0.5rem" fontFamily="Philosopher-Italic">
                        {'"Pois onde estiver o amor, alí estará também o nosso coração." Lc 12:34'}
                    </TextContentSection>
                </GridItem>
                <GridItem colSpan={{ base: 12, lg: 5 }}>
                    <TextHeaderSection mb="1rem" textAlign={{base: 'center', lg:'left'}}>
                        Contatos
                    </TextHeaderSection>
                    <TextContentSection textAlign={{base: 'center', lg:'left'}}>
                        caio.cezar.dequeiroz@gmail.com
                    </TextContentSection>
                    <TextContentSection textAlign={{base: 'center', lg:'left'}}>
                        lima.annec@gmail.com
                    </TextContentSection>
                </GridItem>
                <GridItem colSpan={{ base: 12, lg: 3 }}>
                    <Flex width="100%" justifyContent="center" alignItems={{base: 'center', lg:'flex-start'}} flexDirection="column">
                        <TextHeaderSection mb="0.25rem" textAlign={{base: 'center', lg:'left'}}>
                            Social
                        </TextHeaderSection>
                        <Flex justifyContent="center" alignItems="center" mb="0.5rem">
                            <Link href="https://www.instagram.com/caiocezardequeiroz/" target="_blank" rel="noopener">
                                <InstagramIcon/>
                            </Link>
                            <TextContentSection ml="0.5rem">Caio Queiroz</TextContentSection>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center">
                            <Link href="https://www.instagram.com/anne.limac/" target="_blank" rel="noopener">
                                <InstagramIcon/>
                            </Link>
                            <TextContentSection ml="0.5rem">Anne Queiroz</TextContentSection>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
            <TextContentSection fontSize="0.75rem" textAlign="center" marginTop={{base: '1rem', lg:'0.5rem'}}>
                © 2022 - desenvolvido por Caio Queiroz e Anne Queiroz
            </TextContentSection>
        </Box>
    );
}

export { FooterSection };