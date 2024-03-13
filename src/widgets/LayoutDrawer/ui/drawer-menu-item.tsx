import React, { useState } from 'react';
import ListItem from 'my-mui/material/ListItem';
import ListItemButton from 'my-mui/material/ListItemButton';
import ListItemIcon from 'my-mui/material/ListItemIcon';
import ListItemText from 'my-mui/material/ListItemText';
import { DrawerMenuProps, UseLayoutDrawerProps } from '../model/types';
import { Box, Collapse } from 'my-mui/material';
import DrawerMenuSub from './drawer-menu-item-sub';
import UpArrow from '@/shared/assets/images/UpArrow';
import { SvgBox } from '@/shared/ui/svgBox';

interface Props {
    menuItem: DrawerMenuProps;
    pathName: string;
    useLayoutDrawer: UseLayoutDrawerProps;
}

const DrawerMenuItem: React.FC<Props> = ({ menuItem, pathName, useLayoutDrawer }) => {
    const {
        // handleToggleSubMenu,
        open,
        // isSubMenuOpen
    } = useLayoutDrawer;

    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const handleToggleSubMenu = () => setSubMenuOpen(!isSubMenuOpen);

    return (
        <Box sx={{ px: 0.8 }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    onClick={menuItem.subMenu && menuItem.subMenu.length > 0 ? handleToggleSubMenu : () => { }}
                    selected={menuItem.path === pathName}
                    sx={{
                        height: 36,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: 2.5,
                        '&:hover': {
                            backgroundColor: '#EDFAFF'
                        },
                    }}
                >
                    {
                        menuItem?.labelIcon && (
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 1.5 : 'auto',
                                    ml: open ? 0 : 0.8,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {menuItem.labelIcon}
                            </ListItemIcon>
                        )
                    }

                    <ListItemText
                        primaryTypographyProps={{ fontSize: '14px', color: '#353C3F' }}
                        primary={menuItem.title}
                        sx={{ opacity: open ? 1 : 0 }}
                    />

                    {open && menuItem.subMenu && menuItem.subMenu.length > 0 && (
                        <SvgBox
                            svg={<UpArrow />}
                            sx={{
                                transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s',
                            }}
                        />
                    )}
                </ListItemButton>
            </ListItem>

            <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
                {menuItem?.subMenu?.map((subMenuItem, subIndex) => (
                    <DrawerMenuSub key={subIndex} menuItem={subMenuItem} isSelected={subMenuItem.path === pathName} open={open} />
                ))}
            </Collapse>
        </Box>
    )
}

export default DrawerMenuItem;