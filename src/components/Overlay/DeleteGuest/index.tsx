import { Box, Flex, ModalProps, Button } from '@chakra-ui/react';
import React, { useMemo, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { GuestsModel } from '../../../data/model/Guests';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { actionDashboard } from '../../../services/dashboard';
import { TextComponent } from '../../TextComponent';
import { Modal } from '../Modal';

export interface ModalDeleteGuestProps extends Omit<ModalProps, 'children'> {
    guest?: GuestsModel | undefined
    onClose: () => void
    handleRefetch: () => void
}

const ModalDeleteGuest: React.FC<ModalDeleteGuestProps> = ({
    guest,
    onClose,
    handleRefetch,
    ...rest
}) => {
    const { width } = useWindowSize();
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);

    const onCloseOverride = useCallback(() => {
        onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDeleteGuest = useCallback(async () => {
        setLoadingRequest(true)
        if (!guest) {
            toast.error('Falha no envio das informações. Por favor, tente novamente!');
            return
        }
        await actionDashboard.deleteGuest(guest).then(async () => {
            handleRefetch();
            onCloseOverride();
            toast.success('Convidado editado com sucesso!');
        }).catch(() => {
            toast.error('Falha no envio das informações. Por favor, tente novamente!');
        }).finally(() => setLoadingRequest(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guest]);

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
            footer={
                <Flex width="100%" justifyContent="space-between">
                    <Button variant="outline" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button
                        colorScheme="red"
                        isLoading={loadingRequest}
                        onClick={handleDeleteGuest}
                    >
                        Apagar
                    </Button>
                </Flex>
            }
            onClose={onCloseOverride}
            {...rest}
        >
            <Box pt="10">
                <TextComponent
                    text={`Você tem certeza que deseja remover ${guest?.name} da lista de convidados?`}
                    textIndent={0}
                    textAlign="center"
                    fontSize="1.5rem"
                    marginTop="0rem"
                    color="text.secondary"
                />
                <TextComponent
                    text="Se você optar por remover, esta ação não poderá ser desfeita."
                    textIndent={0}
                    textAlign="center"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    marginTop="0.8rem"
                    color="text.secondary"
                />
            </Box>
        </Modal>
    );
}

export { ModalDeleteGuest }