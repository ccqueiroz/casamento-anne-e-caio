import React, {memo} from 'react';
import { Box } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { SessionProps } from '../../../data/model/Session';
import { actionDashboard } from '../../../services/dashboard';
import { GuestsModel } from '../../../data/model/Guests';
import GuestInfoDetails from '../../../components/GuestInfoDetails';
import Dashboard from '../Layout';
import { TextComponent } from '../../../components/TextComponent';

interface GuestListProps extends SessionProps<Array<GuestsModel>>{
    guestsList: Array<GuestsModel>
}

const GuestList: React.FC<GuestListProps> = ({user, guestsList }) => {
    return (
        <Dashboard user={user}>
            <Box width="100%" height="100%" id="content-guest-list" overflow="hidden">
                <Box
                    width="90%"
                    height="100%"
                    margin="0 auto"
                    overflow="hidden"
                >
                    <TextComponent text="Lista de Convidados" textIndent={0} textAlign="center" fontSize="2rem" marginTop="2rem" color="text.secondary"/>
                    <Box
                        width="100%"
                        height="80%"
                        maxHeight="800px"
                        maxWidth="1400px"
                        margin="2rem auto"
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
                                    <GuestInfoDetails key={guest?.phone} guest={guest}/>
                                ))
                            }
                        </Box>
                    </Box>

                </Box>
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
