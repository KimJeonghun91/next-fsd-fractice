"use client";

import React from 'react';
import MuiDrawer from 'my-mui/material/Drawer';
import Divider from 'my-mui/material/Divider';
import List from 'my-mui/material/List';
import ListItem from 'my-mui/material/ListItem';
import ListItemButton from 'my-mui/material/ListItemButton';
import ListItemIcon from 'my-mui/material/ListItemIcon';
import ListItemText from 'my-mui/material/ListItemText';
import { styled } from 'my-mui/material/styles';
import { DrawerMenuItem } from '../model/types';
import useLayoutDrawer from '../model/useLayoutDrawer';
import DrawerHeader from './drawer-header';

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

    const DrawerContainer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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
        <DrawerContainer variant="permanent" open={open} sx={{ position: 'relative', overflow: 'visible' }}>
            <DrawerHeader open={open} />
            <Divider />
            <List>
                {menuList.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.labelIcon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </DrawerContainer>
    )
}

export default Drawer;