import React, { memo, useCallback, useState, useMemo } from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { SessionProps } from '../../../data/model/Session';
import { GuestsModel } from '../../../data/model/Guests';
import GuestInfoDetails from '../../../components/GuestInfoDetails';
import Dashboard from '../Layout';
import { TextComponent } from '../../../components/TextComponent';
import { CreateOrEditGuest } from '../../../components/Overlay/CreateOrEditGuest';
import { InscriptionType } from '../../../data/enums/InscriptionType';
import { ModalStatisticGuests } from '../../../components/Overlay/ModalStatisticGuestes';
import { MenuGuestsList } from '../../../components/MenuGuestsList';
import { FilterGuestsList } from '../../../data/enums/FilterGuestsList';
import { useGetGuestsList } from '../../../hooks/useGetGuestsList';
import Loader from '../../../components/Loader';

interface GuestListProps extends SessionProps<Array<GuestsModel>>{}

const GuestList: React.FC<GuestListProps> = ({ user }) => {
    const { onOpen: onOpenModalCreateOrEdit, onClose: onCloseModalCreateOrEdit,...propsModalCreateOrEdit } = useDisclosure();
    const { onOpen: onOpenModalStatisticGuests, onClose: onCloseModalStatisticGuests,...propsModalStatisticGuests } = useDisclosure();
    const [guest, setGuest] = useState<GuestsModel | undefined>(undefined);
    const [inscriptionType, setInscriptionType] = useState<InscriptionType | undefined>(undefined);
    const [optionFilterGuests, setOptionFilterGuests] = useState<FilterGuestsList>(FilterGuestsList.allGuests);
    const {
        guestsList,
        error,
        isLoading,
        isFetching,
        refetch
     } = useGetGuestsList();
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

    const handleChangeFilterGuestsList = useCallback((value: string | Array<string>) => {
        setOptionFilterGuests(value as FilterGuestsList);
    }, []);

    const guestsFiltered = useMemo(() => {
        if (optionFilterGuests === FilterGuestsList.allGuests) {
            return guestsList;
        } else if (optionFilterGuests === FilterGuestsList.guestsConfirmed) {
            return guestsList?.filter((guest) => guest?.presenceAtTheEvent === 'Y');
        } else if (optionFilterGuests === FilterGuestsList.guestsNotConfirmed) {
            return guestsList?.filter((guest) => guest?.presenceAtTheEvent === 'N');
        } else {
            return guestsList?.filter((guest) => !guest?.presenceAtTheEvent);
        }
    }, [optionFilterGuests, guestsList]);

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
                        height="3rem"
                        margin="1.25rem auto 0"
                        padding="0 10px"
                    >
                        <Box width="100%" height="100%" display="flex" alignItems="flex-end" >
                            {
                                !isLoading
                                && !error
                                && !isFetching
                                && guestsList
                                && (
                                    <>
                                        <TextComponent
                                            text={`${guestsList?.length} convidados`}
                                            textIndent={0}
                                            textAlign="left"
                                            fontSize="1rem"
                                            color="text.secondary"
                                        />
                                        {optionFilterGuests !== FilterGuestsList.allGuests && (
                                            <>
                                                <TextComponent
                                                    text=" | "
                                                    textIndent={0}
                                                    textAlign="center"
                                                    fontSize="1rem"
                                                    color="text.secondary"
                                                    margin="0 10px"
                                                />
                                                <TextComponent
                                                    text={`${guestsFiltered?.length} ${optionFilterGuests}`}
                                                    textIndent={0}
                                                    textAlign="left"
                                                    fontSize="1rem"
                                                    color="text.secondary"
                                                />
                                            </>
                                            )
                                        }
                                    </>
                                )
                            }
                            <Flex
                                alignItems="center"
                                flex={1}
                                justifyContent="flex-end"
                            >
                                <MenuGuestsList
                                    openModalCreateOrEdit={onOpenModalCreateOrEditOverride}
                                    openModalStatisticGuests={onOpenModalStatisticGuests}
                                    handleChangeFilterGuestsList={handleChangeFilterGuestsList}
                                />
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
                        {
                            isLoading && !error && !guestsFiltered && !guestsList ?
                                (
                                    <Loader /> 
                                )
                                : (
                                    <Box
                                        width="100%"
                                        height="100%"
                                        background="#edf8fb"
                                        overflowY="auto"
                                        overflowX="hidden"
                                    >
                                        {
                                            guestsFiltered?.map((guest: GuestsModel) => (
                                                <GuestInfoDetails key={guest?.phone} guest={guest} onOpen={onOpenModalCreateOrEditOverride}/>
                                            ))
                                        }
                                    </Box>
                                )
                        }
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
                    handleRefetch={refetch}
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
    return {
        props: {
            ...session,
        }
    }
}
