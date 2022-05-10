import {
    DrawerProps,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { DrawerDashboardMobile } from './DrawerDashboardMobile';
import { DrawerDashboardDesktop } from './DrawerDashboardDesktop';

export interface DrawerDashboardProps extends Omit<DrawerProps, 'children'>{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const DrawerDashboard: React.FC<DrawerDashboardProps> = ({
    isOpen,
    onOpen,
    onClose,
    ...rest
}) => {
    const { width } = useWindowSize();
    const renderMenu = useMemo(() => {
        if (width && width < 900) {
            return <DrawerDashboardMobile isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        } else {
            return <DrawerDashboardDesktop />
        }
    }, [width, isOpen, onOpen, onClose]);
    return (
        <>
            {renderMenu}
        </>
        
    );
}

export { DrawerDashboard };