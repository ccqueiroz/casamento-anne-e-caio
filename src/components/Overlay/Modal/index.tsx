import React, { ReactElement } from 'react';

import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react';

type ModalProps = ChakraModalProps & {
  header?: ReactElement
  children: ReactElement
  footer?: ReactElement
  backgroundModalContent?: string
}

const Modal: React.FC<ModalProps> = ({ header, children, footer, backgroundModalContent, ...rest }) => {
  return (
    <ChakraModal isCentered scrollBehavior="inside" {...rest}>
      <ModalOverlay />
      <ModalContent borderRadius={2} p={5} backgroundImage={backgroundModalContent}>
        {header && (
          <ModalHeader fontSize="lg" color="#0c6a6b">
            {header}
          </ModalHeader>
        )}
        <ModalCloseButton color="primary" />
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
}

export { Modal };
