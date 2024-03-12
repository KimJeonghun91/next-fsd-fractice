"use client";

import React from 'react';
import Box from 'my-mui/material/Box';
import { DrawerButton } from '@/features/layout';
import { DrawerMenuItem } from './model/types';
import useLayoutDrawer from './model/useLayoutDrawer';
import Drawer from './ui/drawer';

interface Props {
    menuList: DrawerMenuItem[];
}

const LayoutDrawer: React.FC<Props> = ({ menuList }) => {
    const {
        open,
        handleDrawer,
    } = useLayoutDrawer();

    return (
        <Box sx={{ position: 'relative' }}>
            <Drawer menuList={menuList} open={open} />
            <DrawerButton handleDrawer={handleDrawer} open={open} />
        </Box>
    )
}

export default LayoutDrawer;