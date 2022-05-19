import React from 'react';
import {
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Menu,
    MenuProps,
    Icon,
    IconButton,
    Flex,
    MenuItem
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FilterGuestsList } from '../../data/enums/FilterGuestsList';
import { GuestsModel } from '../../data/model/Guests';
import { InscriptionType } from '../../data/enums/InscriptionType';

interface MenuGuestsListProps extends Omit<MenuProps, 'children'>{
    openModalCreateOrEdit: (inscriptionType: InscriptionType, guest: GuestsModel | undefined) => void
    openModalStatisticGuests: () => void
    handleChangeFilterGuestsList: (value: string | Array<string>) => void
}

const MenuGuestsList: React.FC<MenuGuestsListProps> = ({
    openModalCreateOrEdit,
    openModalStatisticGuests,
    handleChangeFilterGuestsList
}) => {

    return (
        <Menu closeOnSelect={true}>
            <MenuButton
                as={IconButton}
                icon={<GiHamburgerMenu color="#0c6a6b" />}
                marginBottom="5px"
                variant='outline'
                backgroundImage="linear-gradient(205deg, #93d1e4, #e5f4f9, #edf8fb)"
                borderColor="#93c2c2"
                _focus={{
                    backgroundImage: "linear-gradient(205deg, #93d1e4, #e5f4f9, #edf8fb)"
                }}
                title="Menu com a lista de ações"
                aria-describedby="Menu com a lista de ações"
                aria-labelledby="Menu com a lista de ações"
            >
                <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Icon as={GiHamburgerMenu} width="1.5rem" height="1.5rem" color="#0c6a6b"/>
                </Flex>
            </MenuButton>
            <MenuList minWidth='240px'>
                <MenuOptionGroup
                    defaultValue={FilterGuestsList.allGuests}
                    title='Filtrar por'
                    type='radio'
                    onChange={handleChangeFilterGuestsList}
                >
                    <MenuItemOption value={FilterGuestsList.allGuests}>Todos os convidados</MenuItemOption>
                    <MenuItemOption value={FilterGuestsList.guestsConfirmed}>Convidados confirmados</MenuItemOption>
                    <MenuItemOption value={FilterGuestsList.guestsNotConfirmed}>Convidados não confirmados</MenuItemOption>
                    <MenuItemOption value={FilterGuestsList.guestsToConfirm}>Convidados a confirmar</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title='Lista de convidados'>
                    <MenuItem
                        padding="0.4rem 2.2rem"
                        title="Ver gráfico com as estatísticas da Lista de Convidados"
                        aria-describedby="Ver gráfico com as estatísticas da Lista de Convidados"
                        aria-labelledby="Ver gráfico com as estatísticas da Lista de Convidados"
                        onClick={openModalStatisticGuests}
                    >
                        Ver Estatísticas
                    </MenuItem>
                    <MenuItem
                        padding="0.4rem 2.2rem"
                        title="Adicionar um novo convidado"
                        aria-describedby="Adicionar um novo convidado"
                        aria-labelledby="Adicionar um novo convidado"
                        onClick={() => openModalCreateOrEdit(InscriptionType.new, undefined)}
                    >
                        Adicionar um novo convidado
                    </MenuItem>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}

export { MenuGuestsList }