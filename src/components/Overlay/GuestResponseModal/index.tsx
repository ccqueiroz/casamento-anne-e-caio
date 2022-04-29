import React, { useMemo } from 'react';

import {
    Box,
    ModalProps as ChakraModalProps,
    Text,
} from '@chakra-ui/react';

import { Modal } from '../Modal';
import { GuestsModel } from '../../../data/model/Guests';
import { ContentModalCode404 } from './ContentModalCode404';
import { ContentModalCode208 } from './ContentModalCode208';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { ContentModalCodeDontGo } from './ContentModalCode200DontGo';

export interface ModalFileProps extends Omit<ChakraModalProps, 'children'> {
    statusCode?: number
    message?: string
    guest?: GuestsModel
    widthScreen?: number | undefined
    onClose: () => void
}

const ModalGuestResponse: React.FC<Omit<ModalFileProps, 'widthScreen'>> = ({
    onClose,
    statusCode,
    message,
    guest,
  ...rest
}) => {
    const { width } = useWindowSize();
    const renderHeaderModal = useMemo(() => {
        if (statusCode && statusCode === 404) {
            return 'Atenção';
        }
        return `Olá ${guest?.name},`;
    }, [statusCode, guest]);

    const renderContentModal = useMemo(() => {
        if (statusCode === 404) {
           return <ContentModalCode404 widthScreen={width}/>
        } else if (statusCode === 208) {
            return <ContentModalCode208 widthScreen={width}/>
        } else if (statusCode === 200 && guest?.presenceAtTheEvent === 'N') {
            return <ContentModalCodeDontGo widthScreen={width}/>
        } else {}
    }, [statusCode, guest, width]);

    const renderSizeModal = useMemo(() => {
        if (width && width <= 480) {
            return 'sm';
        } else {
            return '2xl';
        }
    }, [width]);

    return (
        <Modal
            size={renderSizeModal}
            header={
                <Box>
                    <Text
                        fontSize={{ base: "1.5rem", md: "1.6rem", lg: "1.8rem" }}
                        fontWeight="bold"
                        color={statusCode === 404 ? 'tomato' : 'primary'}
                        textAlign={statusCode === 404 ? 'center' : 'left'}
                    >
                        {renderHeaderModal}
                    </Text>
                </Box>
            }
            onClose={onClose}
            {...rest}
        >
            <Box className="file-attach-container">
                {renderContentModal}
            </Box>
        </Modal>
    );
}

export { ModalGuestResponse };