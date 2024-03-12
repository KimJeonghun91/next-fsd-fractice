"use client";

import React from 'react';
import { Drawer as MuiDrawer, Box, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from 'my-mui/material';
import { styled, useTheme, Theme, CSSObject } from 'my-mui/material/styles';
import IconDashboard from '@Img/IconDashboard';
import { DrawerButton } from '@/features/layout';

interface Props {
}

export const LayoutDrawer: React.FC<Props> = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const drawerWidth = 240;

    const handleDrawer = () => setOpen(!open);

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        boxShadow: theme.shadows[4],
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        boxShadow: theme.shadows[0],
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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
        <Box sx={{ position: 'relative' }}>
            <Drawer variant="permanent" open={open} sx={{ position: 'relative', overflow: 'visible' }}>
                <DrawerHeader>
                    {/* <IconButton> */}
                        <div>로고</div>
                    {/* </IconButton> */}
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IconDashboard />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IconDashboard />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <DrawerButton handleDrawer={handleDrawer}/>
        </Box>
    )
}