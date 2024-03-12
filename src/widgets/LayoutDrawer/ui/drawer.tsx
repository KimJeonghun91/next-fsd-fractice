"use client";

import React from 'react';
import MuiDrawer from 'my-mui/material/Drawer';
import Divider from 'my-mui/material/Divider';
import { styled } from 'my-mui/material/styles';
import { DrawerMenuItem } from '../model/types';
import useLayoutDrawer from '../model/useLayoutDrawer';
import DrawerHeader from './drawer-header';
import DrawerMenuList from './drawer-menu-list';

interface Props {
    menuList: DrawerMenuItem[];
    open: boolean;
}

const Drawer: React.FC<Props> = ({ menuList, open }) => {
    const {
        drawerWidth,
        openedMixin,
        closedMixin,
    } = useLayoutDrawer();

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