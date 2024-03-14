import { useState } from 'react';
import { Theme, CSSObject } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const useLayoutDrawer = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const drawerWidth = 200;
    const handleToggleSubMenu = () => setSubMenuOpen(!isSubMenuOpen);

    const handleDrawer = () => {
        setOpen((prev) => {
            setSubMenuOpen(false);
            return !prev
        });

    };

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
        drawerWidth,
        handleDrawer,
        openedMixin,
        closedMixin,
        isSubMenuOpen,
        handleToggleSubMenu
    }
}

export default useLayoutDrawer;