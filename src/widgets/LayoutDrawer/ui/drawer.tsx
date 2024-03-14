import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { CSSObject, Theme, styled } from '@mui/material/styles';
import { DrawerMenuProps } from '../model/types';
import DrawerHeader from './drawer-header';
import DrawerMenuList from './drawer-menu-list';

interface Props {
    open: boolean;
    menuList: DrawerMenuProps[];
    drawerWidth: number;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
}

const Drawer: React.FC<Props> = ({
    menuList,
    open,
    drawerWidth,
    openedMixin,
    closedMixin,
}) => {
    const DrawerContainer = styled(MuiDrawer)(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    return (
        <DrawerContainer variant="permanent" open={open}>
            <DrawerHeader open={open} />
            <Divider />
            <DrawerMenuList menuList={menuList} open={open} />
        </DrawerContainer>
    )
}

export default Drawer;