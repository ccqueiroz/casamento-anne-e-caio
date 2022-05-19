import React, { useMemo } from 'react';
import {
    Box,
    ModalProps as ChakraModalProps,
    Text,
    Flex,
} from '@chakra-ui/react';
import { Modal } from '../Modal';
import { GuestsModel } from '../../../data/model/Guests';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { ChartGuests } from './Chart';

export interface ModalStatisticGuestsProps extends Omit<ChakraModalProps, 'children'> {
    guestsList?: Array<GuestsModel> | undefined
    onClose: () => void
}

const ModalStatisticGuests: React.FC<ModalStatisticGuestsProps> = ({
    onClose,
    guestsList,
  ...rest
}) => {
    const { width } = useWindowSize();
 
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
            backgroundModalContent="url(/images/layout/bg-top.png)"
            header={
                <Box>
                    <Text
                        fontSize={{ base: "1.5rem", md: "1.6rem", lg: "1.8rem" }}
                        fontWeight="bold"
                        color={'primary'}
                        textAlign={'center'}
                        >
                        Estatísticas dos convidados
                    </Text>
                </Box>
            }
            onClose={onClose}
            {...rest}
        >
            <Flex
                width="100%"
                height="auto"
            >
                <ChartGuests guestsList={guestsList}/>
            </Flex>
        </Modal>
    );
}

export { ModalStatisticGuests }