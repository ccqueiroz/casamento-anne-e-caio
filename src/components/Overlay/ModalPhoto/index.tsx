import React, { useMemo } from 'react';
import { Photo } from '../../../data/model/Gallery';
import { useWindowSize } from '../../../hooks/useWindowSize';
import {
    Box,
    ModalProps as ChakraModalProps,
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Image,
} from '@chakra-ui/react';
import { FlyingHearts } from '../GuestResponseModalGoTo/FlyingHearts';

export interface ModalFileProps extends Omit<ChakraModalProps, 'children'> {
    photo: Photo | undefined
    onClose: () => void
}

const ModalPhoto: React.FC<ModalFileProps> = ({
    photo,
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
            <ModalContent
                borderRadius={5} p={5}
                backgroundImage="linear-gradient(45deg, #0c6a6b, #93c2c2, #aadae9, #d6eef5, #0c6a6b)"
            >
                <ModalCloseButton color="#0c6a6b" position="absolute" top="7%" right="7%" backgroundImage={"linear-gradient(45deg, rgba(170, 218, 233, 0.6), rgba(214, 238, 245, 0.7))"}/>
                <ModalBody
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '4px',
                            height: '10px'
                        },
                        '&::-webkit-scrollbar-track': {
                            width: '6px',
                            height: '10px'
                        },
                        '&::-webkit-scrollbar-track-piece': {
                            background: 'transparente'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: "#e5f4f9",
                            borderRadius: '24px',
                        },
                    }}
                >
                    <Box  borderRadius="20px">
                        <Image
                            borderRadius="5px"
                            width="100%"
                            height="100%"
                            src={photo?.src}
                            alt={photo?.alt}
                            objectFit={photo?.objectFit}
                            objectPosition={photo?.objectPosition}
                        />
                    </Box>
                </ModalBody>
                <FlyingHearts numberOfHearts={20} />
            </ModalContent>
        </ChakraModal>
    );
}

export { ModalPhoto }