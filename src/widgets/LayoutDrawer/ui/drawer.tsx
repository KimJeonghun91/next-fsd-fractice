import React from 'react';
import MuiDrawer from 'my-mui/material/Drawer';
import Divider from 'my-mui/material/Divider';
import { CSSObject, Theme, styled } from 'my-mui/material/styles';
import { DrawerMenuProps } from '../model/types';
import DrawerHeader from './drawer-header';
import DrawerMenuList from './drawer-menu-list';

interface Props {
    open: boolean;
    menuList: DrawerMenuProps[];
    isSubMenuOpen: boolean;
    drawerWidth: number;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
    handleToggleSubMenu: () => void;
}

const Drawer: React.FC<Props> = ({
    menuList,
    open,
    isSubMenuOpen,
    drawerWidth,
    openedMixin,
    closedMixin,
    handleToggleSubMenu
}) => {
    const DrawerContainer = styled(MuiDrawer)(
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
        <DrawerContainer variant="permanent" open={open}>
            <DrawerHeader open={open} />
            <Divider />
            <DrawerMenuList menuList={menuList} open={open} isSubMenuOpen={isSubMenuOpen} handleToggleSubMenu={handleToggleSubMenu} />
        </DrawerContainer>
    )
}

export default Drawer;