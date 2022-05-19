import React, {memo, useCallback, useState, useMemo} from 'react';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { SessionProps } from '../../../data/model/Session';
import { actionDashboard } from '../../../services/dashboard';
import { GuestsModel } from '../../../data/model/Guests';
import GuestInfoDetails from '../../../components/GuestInfoDetails';
import Dashboard from '../Layout';
import { TextComponent } from '../../../components/TextComponent';
import { CreateOrEditGuest } from '../../../components/Overlay/CreateOrEditGuest';
import { InscriptionType } from '../../../data/enums/InscriptionType';
import { ModalStatisticGuests } from '../../../components/Overlay/ModalStatisticGuestes';

interface GuestListProps extends SessionProps<Array<GuestsModel>>{
    guestsList: Array<GuestsModel>
}

const GuestList: React.FC<GuestListProps> = ({user, guestsList }) => {
    const { onOpen: onOpenModalCreateOrEdit, onClose: onCloseModalCreateOrEdit,...propsModalCreateOrEdit } = useDisclosure();
    const { onOpen: onOpenModalStatisticGuests, onClose: onCloseModalStatisticGuests,...propsModalStatisticGuests } = useDisclosure();
    const [guest, setGuest] = useState<GuestsModel | undefined>(undefined);
    const [inscriptionType, setInscriptionType] = useState<InscriptionType | undefined>(undefined);

    const onCloseModalCreateOrEditOverride = useCallback(() => {
        setGuest(undefined);
        setInscriptionType(undefined);
        onCloseModalCreateOrEdit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onOpenModalCreateOrEditOverride = useCallback((inscriptionType: InscriptionType, guest: GuestsModel | undefined) => {
        setGuest(guest);
        setInscriptionType(inscriptionType);
        onOpenModalCreateOrEdit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Dashboard user={user}>
            <Box width="100%" height="100%" id="content-guest-list" overflow="hidden">
                <Box
                    width="90%"
                    height="100%"
                    margin="0 auto"
                    overflow="hidden"
                >
                    <TextComponent text="Lista de Convidados" textIndent={0} textAlign="center" fontSize="2rem" marginTop="2rem" color="text.secondary" />
                    <Box
                        width="100%"
                        maxWidth="1400px"
                        height={{ base: '7rem', md: '3rem'}}
                        margin="1.25rem auto 0"
                        padding="0 10px"
                    >
                        <Box height="100%" display="flex" alignItems={{base: 'center', md: "flex-end"}} flexDirection={{base: 'column-reverse', md: 'row'}}>
                            <TextComponent text={`${guestsList?.length} convidados`} textIndent={0} textAlign="left" fontSize="1rem" color="text.secondary" />
                            <Flex
                                alignItems="center"
                                margin="0 auto"
                                flex={1}
                                justifyContent="flex-end"
                                flexDirection={{base: 'column', md: 'row'}}
                            >
                                <Button
                                    width="auto"
                                    height="30px"
                                    marginBottom="8px"
                                    marginRight="1rem"
                                    padding={{base: "3% 15%", md: "1%"}}
                                    fontWeight="bold"
                                    letterSpacing="0.1rem"
                                    color="#0c6a6b"
                                    fontSize={{ base: "0.725rem", md: "0.8rem" }}
                                    background="linear-gradient(45deg, #aadae9, #d6eef5)"
                                    transition="background 300ms easy-in-out"
                                    boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                                    title="Ver gráfico com as estatísticas da Lista de Convidados"
                                    aria-describedby="Ver gráfico com as estatísticas da Lista de Convidados"
                                    aria-labelledby="Ver gráfico com as estatísticas da Lista de Convidados"
                                    onClick={() => onOpenModalStatisticGuests()}
                                    _hover={{
                                        backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                                    }}
                                >
                                    Estatísticas             
                                </Button>
                                <Button
                                    width="auto"
                                    height="30px"
                                    marginBottom="8px"
                                    padding={{base: "3% 15%", md: "1%"}}
                                    fontWeight="bold"
                                    letterSpacing="0.1rem"
                                    color="#0c6a6b"
                                    fontSize={{ base: "0.725rem", md: "0.8rem" }}
                                    background="linear-gradient(45deg, #aadae9, #d6eef5)"
                                    transition="background 300ms easy-in-out"
                                    boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                                    title="Adicionar um novo convidado"
                                    aria-describedby="Adicionar um novo convidado"
                                    aria-labelledby="Adicionar um novo convidado"
                                    onClick={() => onOpenModalCreateOrEditOverride(InscriptionType.new, undefined)}
                                    _hover={{
                                        backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                                    }}
                                >
                                    Adicionar Convidado             
                                </Button>
                            </Flex>
                            
                        </Box>
                    </Box>
                    <Box
                        width="100%"
                        height="80%"
                        maxHeight="800px"
                        maxWidth="1400px"
                        margin="0.1rem auto"
                        boxShadow="1px 1px 7px -2px rgba(74, 97, 97, 0.5)"
                        borderRadius="12px"
                        overflow="hidden"
                    >
                        <Box
                            width="100%"
                            height="100%"
                            background="#edf8fb"
                            overflowY="auto"
                            overflowX="hidden"
                        >
                            {
                                guestsList?.map((guest: GuestsModel) => (
                                    <GuestInfoDetails key={guest?.phone} guest={guest} onOpen={onOpenModalCreateOrEditOverride}/>
                                ))
                            }
                        </Box>
                    </Box>

                </Box>
                <ModalStatisticGuests
                    guestsList={guestsList}
                    onClose={onCloseModalStatisticGuests}
                    {...propsModalStatisticGuests}
                />
                <CreateOrEditGuest
                    inscriptionType={inscriptionType as InscriptionType}
                    onClose={onCloseModalCreateOrEditOverride}
                    guest={guest}
                    {...propsModalCreateOrEdit}
                />
            </Box>
        </Dashboard>
    );
}

export default memo(GuestList);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if(!session){
        return {
            redirect:{
                destination: `/`,
                permanent: false
            }
        };
    }
    const guestsList = await actionDashboard.guestsList();
    return {
        props: {
            ...session,
            guestsList
        }
    }
}
