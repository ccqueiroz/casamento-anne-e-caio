import React, { memo } from 'react';
import { Button, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { RiUpload2Fill, RiAttachment2 } from 'react-icons/ri'
import { MdClose } from 'react-icons/md';
import { FileWithPreview } from '../../../data/model/Files';

interface InputUploadProps {
    openModal: () => void,
    deleteAttachment: (fileName: string) => void,
    filesData: Array<FileWithPreview>,
}

const InputUpload: React.FC<InputUploadProps> = ({
    openModal,
    deleteAttachment,
    filesData,
}) => {
    return (
        <Flex
            width="100%"
            maxWidth="600px"
            height="auto"
            mb="2rem"
            flexDirection="column"
        >
            <Text
                fontFamily="TimesRoman"
                fontWeight="bold"
                letterSpacing="0.2rem"
                color="#0c6a6b"
                fontSize={{ base: "0.75 rem", md: "0.925rem" }}
                textAlign="justify"
                wordBreak="break-word"
                style={{textIndent: 50}}
            >
                Para que possamos comemorar com segurança, solicitamos que nos envie o seu passaporte da vacina contra à Covid 19, com a confirmação da sua TERCEIRA DOSE.
            </Text>
            <Flex
                mt="1.5rem"
                width="100%"
                flexDirection="column"
            >
                <Flex flexDirection={'column'} mb="2rem">
                    {filesData?.map((file: FileWithPreview, index: number) => (
                      <Flex
                        key={index}
                        justify="space-between"
                        align="center"
                        minW="26.56rem"
                        w="26.56rem"
                      >
                        <Link href={URL.createObjectURL(file)} isExternal height="auto" display="flex" alignItems="center" mr="8px">
                          <Icon as={RiAttachment2} fontSize="20" />
                        </Link>

                        <Text
                          fontFamily="TimesRoman"
                          textAlign="start"
                          fontSize="15"
                          fontWeight="regular"
                          w="100%"
                        >
                          {file?.name?.substr(0, 40)}
                        </Text>
                        <Icon
                          as={MdClose}
                          onClick={() => deleteAttachment(file?.name)}
                          fontSize="20"
                          color="#FF4D4D"
                          _hover={{
                            cursor: 'pointer',
                          }}
                        />
                      </Flex>
                    ))}
                </Flex>
                <Flex width="100%" justifyContent="center">
                  <Button
                    fontFamily="TimesRoman"
                    disabled={filesData.length > 0}
                    margin="0 auto"
                    color="text.tertiary"
                    padding="1rem"
                    background="linear-gradient(45deg, #aadae9, #d6eef5)"
                    transition="background 300ms easy-in-out"
                    boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                    leftIcon={<RiUpload2Fill fontSize={22} color="text.tertiary"/>}
                    _hover={{
                        backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                    }}
                    onClick={openModal}
                  >
                    Selecione o arquivo
                  </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default memo(InputUpload);