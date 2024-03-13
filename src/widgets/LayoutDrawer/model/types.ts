import { IconProps, Theme, CSSObject } from "my-mui/material";

export interface DrawerMenuProps {
    title: string;
    labelIcon: React.ReactElement<IconProps>;
    path: string;
    subMenu?: DrawerMenuProps[];
}


export interface UseLayoutDrawerProps {
    open: boolean;
    isSubMenuOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    drawerWidth: number;
    handleDrawer: () => void;
    handleToggleSubMenu: () => void;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
}