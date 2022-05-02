import React, { useMemo } from 'react';

import {
    Box,
    ModalProps as ChakraModalProps,
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Divider,
} from '@chakra-ui/react';
import { GuestsModel } from '../../../data/model/Guests';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { ContactsWithIcon } from '../GuestResponseModal/ContactsWithIcon';
import { TextComponent } from '../../TextComponent';
import { convertFirstLetterEachWorldToUppercase } from '../../../data/utils/convertFirstLetterEachWorldToUppercase';
import { FlyingHearts } from './FlyingHearts';

export interface ModalFileProps extends Omit<ChakraModalProps, 'children'> {
    statusCode?: number
    message?: string
    guest?: GuestsModel
    widthScreen?: number | undefined
    onClose: () => void
}

const ModalGuestResponseGoTo: React.FC<Omit<ModalFileProps, 'widthScreen'>> = ({
    statusCode,
    message,
    guest,
    onClose,
  ...rest
}) => {
    const { width } = useWindowSize();
    const renderSizeModal = useMemo(() => {
        if (width && width <= 480) {
            return 'sm';
        } else if (width && width > 480 && width <= 1000) {
            return '2xl';
        }else {
            return '4xl'
        }
    }, [width]);

    const iconsProps = {
        width: {
            base: "1rem",
            md:"1.3rem"
            
        },
        height: {
            base: "1rem",
            md: "1.3rem"
        },
        marginRight: {
            base: "10px",
            md: "15px"
        }
    }
    return (
        <ChakraModal
            size={renderSizeModal}
            isCentered
            scrollBehavior="inside"
            motionPreset='scale'
            blockScrollOnMount={true}
            onClose={onClose}
            {...rest}
        >
            <ModalOverlay backgroundImage={"linear-gradient(45deg, rgba(170, 218, 233, 0.6), rgba(214, 238, 245, 0.7))"}/>
            <ModalContent borderRadius={5} p={5} >
                {guest && guest.name && (
                    <ModalHeader fontSize="1.5rem" color="#0c6a6b">
                        {convertFirstLetterEachWorldToUppercase("caio queiroz")},
                    </ModalHeader>
                )}
                <ModalCloseButton color="primary" />
                <ModalBody>
                    <Box mb="0.5rem">
                        <TextComponent
                            text={"Que alegria poder compartilhar esse lindo momento marcante com você ao nosso lado."}
                            fontSize={{
                                base: "md",
                                md: "lg"
                            }}
                            letterSpacing={{
                                base: "0.03rem",
                                md: "0.2rem"
                            }}
                            textIndent={width && width < 500 ? 25 : 50}

                        />
                        <TextComponent
                            text={"Estamos muito felizes e não vemos a hora de estarmos juntos e curtindo nosso casamento!"}
                            fontSize={{
                                base: "md",
                                md: "lg"
                            }}
                            letterSpacing={{
                                base: "0.03rem",
                                md: "0.2rem"
                            }}
                            textIndent={width && width < 500 ? 25 : 50}
                        />
                        <TextComponent
                            text={"Te vemos em breve, até lá!"}
                            fontSize={{
                                base: "md",
                                md: "lg"
                            }}
                            letterSpacing={{
                                base: "0.03rem",
                                md: "0.2rem"
                            }}
                            textIndent={width && width < 500 ? 25 : 50}
                        />
                        <Divider bg="text.secondary" height="0.2px" margin="0.5rem"/>
                        <Box width="100%">
                            <ContactsWithIcon
                                name="85 9 8894-1319 - Anne Queiroz"
                                iconsProps={iconsProps}
                                textFontSize={{
                                    base: '0.7rem',
                                    md: "1.0rem"
                                }}
                            />
                            <ContactsWithIcon
                                name="85 9 9973-7179 - Caio Queiroz"
                                iconsProps={iconsProps}
                                textFontSize={{
                                    base: '0.7rem',
                                    md: "1.0rem"
                                }}
                            />
                        </Box>
                    </Box>
                </ModalBody>
                <FlyingHearts numberOfHearts={20} />
            </ModalContent>
        </ChakraModal>
    );
}

export { ModalGuestResponseGoTo };