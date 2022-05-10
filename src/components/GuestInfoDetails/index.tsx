import { Box, Divider, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, {memo} from 'react';
import { GuestsModel } from '../../data/model/Guests';
import { TextComponent } from '../TextComponent';

interface GuestInfoDetailsProps {
    guest: GuestsModel | undefined
}

const GuestInfoDetails: React.FC<GuestInfoDetailsProps> = ({guest}) => {

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
            </Flex>
            <Flex alignItems="center" padding="0% 4% 1%" flexWrap="wrap">
                <TextComponent text={"Cartão de Vacina: "} textIndent={0} fontSize="1rem"/>
                <Link href={guest?.urlVaccineCard || '#'}>
                    <a>
                        <Box as="span" color="#0c6a6b" fontSize="0.95rem">
                            {guest?.urlVaccineCard}
                        </Box>
                    </a>
                </Link>
            </Flex>
            <Divider height="1px" backgroundColor="#0c6a6b"/>
        </>
    );
}

export default memo(GuestInfoDetails);