"use client";

import React from 'react';
import Box from 'my-mui/material/Box';
import { DrawerButton } from '@/features/layout';
import { DrawerMenuProps } from './model/types';
import useLayoutDrawer from './model/useLayoutDrawer';
import Drawer from './ui/drawer';

interface Props {
    menuList: DrawerMenuProps[];
}

const LayoutDrawer: React.FC<Props> = ({ menuList }) => {
    const { 
        open,
        drawerWidth,
        handleDrawer,
        openedMixin,
        closedMixin,
        isSubMenuOpen,
        handleToggleSubMenu
     } = useLayoutDrawer();

    return (
        <Box sx={{ position: 'relative' }}>
            <Drawer
                menuList={menuList}
                open={open}
                isSubMenuOpen={isSubMenuOpen}
                drawerWidth={drawerWidth}
                openedMixin={openedMixin}
                closedMixin={closedMixin}
                handleToggleSubMenu={handleToggleSubMenu}
            />
            <DrawerButton
                handleDrawer={handleDrawer}
                open={open}
            />
        </Box>
    )
}

export default LayoutDrawer;