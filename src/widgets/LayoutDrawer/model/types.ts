import { IconProps } from "my-mui/material";

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