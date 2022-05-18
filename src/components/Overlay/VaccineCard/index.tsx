import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { TiDelete } from 'react-icons/ti'

import {
  Box,
  Button,
  HStack,
  IconButton,
  ModalProps as ChakraModalProps,
  Text,
} from '@chakra-ui/react'

import { Modal } from '../Modal'
import { FileWithPreview } from '../../../data/model/Files'

interface ModalFileProps extends Omit<ChakraModalProps, 'children'> {
  setFiles: React.Dispatch<React.SetStateAction<Array<FileWithPreview>>>
  files?: Array<FileWithPreview>
}

const VaccineCard: React.FC<ModalFileProps> = ({
  setFiles,
  onClose,
  files,
  ...rest
}) => {
    const [filesCurrent, setFilesCurrent] = useState<Array<FileWithPreview>>([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: '.pdf',
        multiple: false,
        maxFiles: 1,
        onDrop: (acceptedFiles: Array<FileWithPreview>) => {
            const filesInComing = acceptedFiles.map((file: FileWithPreview) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );
            setFilesCurrent([...filesCurrent, ...filesInComing]);
        },
    });

    const handleSaveFile = useCallback(() => {
        setFiles(filesCurrent);
        setFilesCurrent([]);
        onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesCurrent]);

    const handleDeleteFile = useCallback(
        (fileIndex: number) => {
            const ArrFiles = filesCurrent?.slice();
            ArrFiles?.splice(fileIndex, 1);
            setFilesCurrent(ArrFiles || []);
            setFiles(ArrFiles || []);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [filesCurrent, files]
    );

  useEffect(() => {
        filesCurrent.length > 0 &&
            filesCurrent.forEach((file: FileWithPreview) =>
                URL.revokeObjectURL(String(file?.preview))
        );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

    useEffect(() => {
        if (files && files.length > 0) {
            setFilesCurrent(files || []);
        }
    }, [files]);

    return (
        <Modal
            size="2xl"
            header={
                <Box>
                    <Text fontSize={{ base: "sm", md: "medium", lg: "1.3rem" }} fontWeight="bold" color="primary">
                        Selecionar Arquivo
                    </Text>
                </Box>
            }
            footer={
                <Box display="flex" w="full" justifyContent="space-around">
                    <HStack>
                        <Button onClick={onClose} background="primaryColor.500">
                            Cancelar
                        </Button>
                    </HStack>
                    {filesCurrent && filesCurrent?.length > 0 && (
                        <HStack justify="flex-end" width="100%">
                            <Button
                                colorScheme='teal' variant='solid'
                                onClick={handleSaveFile}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    )}
                </Box>
            }
            onClose={onClose}
            {...rest}
        >
            <Box className="file-attach-container">
                <Box
                    {...getRootProps({ className: 'dropzone' })}
                    border="1px dashed blue"
                    p={4}
                >
                    <Box as="input" {...getInputProps()} />
                    <Text textAlign="center">
                        Arraste ou selecione seu arquivo
                    </Text>
                </Box>
                {!!filesCurrent?.length && (
                    <Box mt={5}>
                        {filesCurrent &&
                            filesCurrent?.map((file: FileWithPreview, index) => (
                                <Box key={file?.name}>
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        boxShadow="base"
                                        p="2"
                                        rounded="md"
                                        bg="white"
                                        mb="4"
                                    >
                                        <Text fontSize="sm" fontWeight="medium" color="primary">
                                            {file?.name}
                                        </Text>
                                        <IconButton
                                            variant="ghost"
                                            color="red.600"
                                            borderRadius="full"
                                            aria-label=""
                                            icon={<TiDelete fontSize={25} />}
                                            onClick={() => handleDeleteFile(index)}
                                        />
                                    </Box>
                                </Box>
                            ))}
                    </Box>
                )}
                <>
                    {filesCurrent?.length === 0 ? (
                        <Text mt={4} fontSize="md" fontWeight="medium" textAlign="center">
                            {'Nenhum Arquivo Selecionado'}
                        </Text>
                    ) : (
                        <Text mt={4} fontSize="md" fontWeight="medium" textAlign="center">
                            {`Existe ${filesCurrent?.length} arquivo selecionado`}
                        </Text>
                    )}
                </>
            </Box>
        </Modal>
    );
}

export { VaccineCard }