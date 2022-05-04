import React, {memo} from 'react';
import { Box } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { SessionProps } from '../../data/model/Session';

const Dashboard: React.FC<SessionProps> = ({user, expires}) => {
    return (
        <Box>Dashboard</Box>
    );
}

export default memo(Dashboard);

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
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
            ...session
        }
    }
}
