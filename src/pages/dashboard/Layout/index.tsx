import React, {memo, PropsWithChildren} from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { WrapperSections } from '../../../components/WrapperSections';
import { DrawerDashboard } from '../../../components/DrawerDashboard';
import { MenuHeaderDashboard } from '../../../components/MenuHeaderDashboard';
import { UserAdmin } from '../../../data/model/UserAdmin';

interface DashBoardProps {
    children: React.ReactElement,
    user: UserAdmin
}

const Dashboard: React.FC<PropsWithChildren<DashBoardProps>> = ({children, user}) => {
    const { isOpen: isOpenDrawerMenu, onOpen: onOpenDrawerMenu, onClose: onCloseDrawerMenu } = useDisclosure()

    return (
        <WrapperSections
            id="dashboard"
            width="100vw"
            height="100vh"
            margin="0px auto 0px auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            backgroundImage="url(/images/layout/bg-top.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            padding={{
                base: '0 5%'
            }}
            overflow="hidden"
        >
            <MenuHeaderDashboard user={user} onOpen={onOpenDrawerMenu}/>
            <DrawerDashboard isOpen={isOpenDrawerMenu} onOpen={onOpenDrawerMenu} onClose={onCloseDrawerMenu} />
            <Box
                position="absolute"
                top="70px"
                left={{base: 0, lg: "320px"}}
                width={{base: "100%", lg: "calc(100% - 320px)"}}
                height="calc(100% - 70px)"
                overflowY="hidden"
            >
                {children}
            </Box>
        </WrapperSections>
    );
}

export default memo(Dashboard);