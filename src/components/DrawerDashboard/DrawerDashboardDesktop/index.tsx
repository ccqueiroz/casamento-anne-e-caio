import {
    Box,
    Button,
    Flex,
    Image,
} from '@chakra-ui/react';
import React from 'react';
import { signOut } from 'next-auth/react';
import { Divider } from '../../Divider';
import { buttonList } from '../buttonsLists';
import Link from 'next/link';

const DrawerDashboardDesktop: React.FC = ({
    ...rest
}) => {
    return (
        <Box
            id="DrawerDashboardDesktop"
            height="100vh"
            width="40%"
            minWidth="180px"
            maxWidth="320px"
            background="#edf8fb"
            boxShadow="1px 1px 7px -2px rgba(74, 97, 97, 0.5)"
            position="absolute"
            left="0"
            top="0"
        >
            <Flex
                width="100%"
                height="100%"
                position="relative"
                flexDirection="column"
                alignItems="center"
            >
                <Image
                    position="relative"
                    src="/images/brasao-main.svg"
                    alt="logo do casal Anne e Caio"
                    width={{base: "60%", lg: "65%"}}
                    height="100px"
                    objectFit="cover"
                    objectPosition="center"
                    margin="0 auto"
                    filter="drop-shadow(0px 0px 3px #93c2c2)"
                />
                <Divider
                    width="90%"
                    backgroundColor="#edf8fb"
                    height="30px"
                />
                <Flex flex={1} padding="10% 1%" flexDirection="column" gap={45}>
                    {
                        buttonList?.map(button => (
                            <Link
                                key={button?.name}
                                href={button.href}
                                aria-describedby={`link âncora para ir à sessão ${button.name}`}
                                aria-labelledby={button.name}
                                passHref
                            >
                                <Box as="a"
                                    fontFamily="TimesRoman"
                                    fontSize="1.1rem"
                                    color="text.secondary"
                                    position="relative"
                                    transitionDuration="all 0.2s easy-in-out"
                                    _hover={{
                                        textDecoration: "none",
                                        filter: "opacity(0.6)",
                                    }}
                                >
                                    {button?.name}
                                </Box>
                            </Link>
                        ))
                    }
                </Flex>
                <Flex width="100%" height="50px" justifyContent="center" margin="1rem">
                    <Button colorScheme='blue' mr={3} onClick={() => signOut()}>
                        Deslogar                    
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export { DrawerDashboardDesktop };
