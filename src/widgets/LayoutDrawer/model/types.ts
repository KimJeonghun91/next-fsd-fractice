import { IconProps, Theme, CSSObject } from "my-mui/material";

export interface SubMenuItem {
    title: string;
    path: string;
    includePaths: string[];
}

export interface DrawerMenuItem {
    title: string;
    labelIcon: React.ReactElement<IconProps>;
    path: string;
    subMenu?: SubMenuItem[];
}


export interface UseLayoutDrawerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    drawerWidth: number;
    handleDrawer: () => void;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
}