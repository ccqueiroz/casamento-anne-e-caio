import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Image,
} from '@chakra-ui/react';
import { FocusableElement } from '@chakra-ui/utils';
import React from 'react';
import { RefObject } from 'react';
import { signOut } from 'next-auth/react';
import { Divider } from '../../Divider';
import { DrawerDashboardProps } from '..';
import { buttonList } from '../buttonsLists';
import Link from 'next/link';

const DrawerDashboardMobile: React.FC<DrawerDashboardProps> = ({
    isOpen,
    onOpen,
    onClose,
    ...rest
}) => {
  const btnRef: RefObject<FocusableElement> = React.useRef(null)
    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent background="#edf8fb" >
                <DrawerCloseButton />
                <DrawerHeader width="100%" margin="0 auto">
                    <Flex width="100%" height="115px" flexDirection="column" alignItems="center">
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
                            backgroundColor="#edf8fb"
                            height="25px"
                        />
                    </Flex>
                </DrawerHeader>
                <DrawerBody>
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
                </DrawerBody>
                <DrawerFooter display="flex" alignItems="center">
                    <Button colorScheme='blue' mr={3} onClick={() => signOut()}>
                        Deslogar                    
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export { DrawerDashboardMobile };