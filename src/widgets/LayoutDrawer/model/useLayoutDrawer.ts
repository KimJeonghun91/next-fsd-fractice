import React from 'react';
import { Theme, CSSObject } from 'my-mui/material/styles';

const useLayoutDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const drawerWidth = 240;

    const handleDrawer = () => setOpen((prev) => !prev);

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    return {
        open,
        setOpen,
        drawerWidth,
        handleDrawer,
        openedMixin,
        closedMixin
    }
}

export default useLayoutDrawer;