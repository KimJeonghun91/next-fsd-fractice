import {  Theme, CSSObject } from "@mui/material";

export interface DrawerMenuSubProps {
    title: string;
    labelIcon?: React.ReactElement;
    path: string;
}

export interface DrawerMenuProps {
    title: string;
    labelIcon: React.ReactElement;
    path: string;
    subMenu?: DrawerMenuSubProps[] | [];
}

export interface UseLayoutDrawerProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    drawerWidth: number;
    handleDrawer: () => void;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
    handleToggleSubMenu: () => void;
}