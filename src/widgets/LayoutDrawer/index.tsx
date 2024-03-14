"use client";

import React from 'react';
import Box from '@mui/material/Box';
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
     } = useLayoutDrawer();

    return (
        <Box sx={{ position: 'relative' }}>
            <Drawer
                menuList={menuList}
                open={open}
                drawerWidth={drawerWidth}
                openedMixin={openedMixin}
                closedMixin={closedMixin}
            />
            <DrawerButton
                handleDrawer={handleDrawer}
                open={open}
            />
        </Box>
    )
}

export default LayoutDrawer;