import { Box, Flex, IconButton, Button, WrapItem, Avatar } from '@chakra-ui/react';
import React from 'react';
import { UserAdmin } from '../../data/model/UserAdmin';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TextComponent } from '../TextComponent';

interface MenuHeaderDashboardProps {
    user: UserAdmin,
    onOpen: () => void
}

const MenuHeaderDashboard: React.FC<MenuHeaderDashboardProps> = ({
    user,
    onOpen
}) => {

    return (
        <Box
            id="menuHeaderDashboard"
            width="100vw"
            height="70px"
            position="absolute"
            top="0"
            background="#e5f4f9"
            boxShadow="1px 1px 7px -2px rgba(74, 97, 97, 0.5)"
        >
            <Flex width="100%" height="100%" alignItems="center" justifyContent={{base: "space-between", lg: "flex-end"}} padding="0.5rem 5%" >
                <Button
                    display={{base: 'inline-block', lg: 'none'}}
                    as={IconButton}
                    aria-label='Options'
                    icon={<GiHamburgerMenu size="1.3rem"/>}
                    variant='outline'
                    onClick={onOpen}
                />
                <Flex alignItems="center">
                    <TextComponent
                        text={user?.name ?? ''}
                        fontSize="0.9rem"
                    />
                    <WrapItem border="2px solid #0c6a6b" borderRadius="50%" marginLeft="0.5rem">
                        <Avatar name={user?.name} src={user?.image} size='md' border="1px solid white"/>
                    </WrapItem>
                </Flex>
            </Flex>
        </Box>
    );
}

export { MenuHeaderDashboard }