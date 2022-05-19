import { Box, Button, Divider, Flex, Icon, Radio, RadioGroup, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, {memo} from 'react';
import { GuestsModel } from '../../data/model/Guests';
import { TextComponent } from '../TextComponent';
import { IoReceiptOutline } from 'react-icons/io5';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { InscriptionType } from '../../data/enums/InscriptionType';
interface GuestInfoDetailsProps {
    guest: GuestsModel | undefined
    onOpen: (inscriptionType: InscriptionType, guest: GuestsModel | undefined) => void
}

const GuestInfoDetails: React.FC<GuestInfoDetailsProps> = ({guest, onOpen}) => {

    return (
        <>
            <Flex flexDirection={{base: "column", md: "row"}} padding="1% 4% 0">
                <Flex flexDirection="column" flex={1}>
                    <TextComponent text={guest?.name} textIndent={0} />
                    <Flex flexDirection="column">
                        <TextComponent text={`Whatsapp: ${guest?.phone ? guest?.phone : ''}`} textIndent={0} fontSize="1rem"/>
                        <TextComponent text={`E-mail: ${guest?.email ? guest?.email : ''}`} textIndent={0} fontSize="1rem"/>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" gap={{base:2, lg: 5}} justifyContent="center" alignItems="center">
                    <TextComponent text="Irá comparecer?" textIndent={0} textAlign="center" />
                    {
                        guest?.presenceAtTheEvent ? (
                            <RadioGroup
                                value={guest?.presenceAtTheEvent}
                                isDisabled
                            >
                                <Radio
                                    value="Y"
                                >
                                    <Text
                                        colorScheme="text.secondary"
                                        letterSpacing="0.2rem"
                                        color="text.tertiary"
                                        fontSize={{base:"0.8rem", md:"1rem"}}
                                    >
                                        Sim
                                    </Text>
                                </Radio>
                                <Radio
                                    value="N"
                                    ml="2rem"
                                >
                                    <Text
                                        colorScheme="text.secondary"
                                        letterSpacing="0.2rem"
                                        color="text.tertiary"
                                        fontSize={{base:"0.8rem", md:"1rem"}}
                                    >
                                        Não
                                    </Text>
                                </Radio>
                            </RadioGroup>
                        ): (
                            <TextComponent text="Não Informado" textIndent={0} textAlign="center" color="#b4b9ba"/>    
                        )
                    }
                    
                </Flex>
                <Flex width="10rem" alignItems="flex-end" justifyContent="space-around" padding="0 2rem">
                    <Icon
                        as={BiEdit}
                        onClick={() => onOpen(InscriptionType.edit, guest)}
                        cursor="pointer"
                        ml="0.5rem"
                        mb="0.4rem"
                        w={6}
                        h={6}
                        color="#0c6a6b"
                        title="Editar Informações do convidado"
                        _hover={{
                            filter: 'opacity(0.7)'
                        }}
                    />
                    <Icon
                        as={RiDeleteBin6Line}
                        cursor="pointer"
                        ml="0.5rem"
                        mb="0.4rem"
                        w={6}
                        h={6}
                        color="tomato"
                        title="Excluir convidado"
                        _hover={{
                            filter: 'opacity(0.7)'
                        }}
                    />
                </Flex>
            </Flex>
            <Flex alignItems="center" padding="0% 4% 1%" flexWrap="wrap">
                <TextComponent text={"Cartão de Vacina: "} textIndent={0} fontSize="1rem"/>
                <Link href={guest?.urlVaccineCard || '#'}>
                    <a>
                        {
                            guest?.urlVaccineCard && (
                                <Icon
                                    as={IoReceiptOutline}
                                    ml="0.5rem"
                                    w={6}
                                    h={6}
                                    color="#0c6a6b"
                                    title="Link do Cartão de Vacina"
                                />
                            )
                        }
                    </a>
                </Link>
            </Flex>
            <Divider height="1px" backgroundColor="#0c6a6b"/>
        </>
    );
}

export default memo(GuestInfoDetails);