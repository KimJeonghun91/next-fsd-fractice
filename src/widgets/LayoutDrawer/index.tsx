"use client";

import React from 'react';
import Box from 'my-mui/material/Box';
import { DrawerButton } from '@/features/layout';
import { DrawerMenuItem } from './model/types';
import { default as useLayoutDrawerInstance } from './model/useLayoutDrawer';
import Drawer from './ui/drawer';

interface Props {
    menuList: DrawerMenuItem[];
}

const LayoutDrawer: React.FC<Props> = ({ menuList }) => {
    const useLayoutDrawer = useLayoutDrawerInstance();

    return (
        <Box sx={{ position: 'relative' }}>
            <Drawer menuList={menuList} useLayoutDrawer={useLayoutDrawer} />
            <DrawerButton useLayoutDrawer={useLayoutDrawer} />
        </Box>
    )
}

export default LayoutDrawer;