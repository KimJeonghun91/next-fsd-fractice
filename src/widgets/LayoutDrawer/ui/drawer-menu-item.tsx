import React from 'react';
import ListItem from 'my-mui/material/ListItem';
import ListItemButton from 'my-mui/material/ListItemButton';
import ListItemIcon from 'my-mui/material/ListItemIcon';
import ListItemText from 'my-mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import { DrawerMenuProps } from '../model/types';
import { Box, Collapse } from 'my-mui/material';
import DrawerMenuSub from './drawer-menu-item-sub';
import UpArrow from '@/shared/assets/images/UpArrow';
import { SvgBox } from '@/shared/ui/svgBox';
import useLayoutDrawer from '../model/useLayoutDrawer';

interface Props {
    menuItem: DrawerMenuProps;
    pathName: string;
    open: boolean;
}

const DrawerMenuItem: React.FC<Props> = ({
    menuItem,
    pathName,
    open,
}) => {
    const {
        isSubMenuOpen,
        handleToggleSubMenu
    } = useLayoutDrawer();

    const router = useRouter();

    const handleClick = () => {
        if (menuItem.subMenu && menuItem.subMenu.length > 0) {
            handleToggleSubMenu();
        } else {
            router.push(menuItem.path);
        };
    };

    return (
        <Box sx={{ px: 0.8 }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    onClick={handleClick}
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
                                transform: isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                                transition: 'transform 0.3s',
                            }}
                        />
                    )}
                </ListItemButton>
            </ListItem>

            {
                open && (
                    <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
                        {menuItem?.subMenu?.map((subMenuItem, subIndex) => (
                            <DrawerMenuSub key={subIndex} menuItem={subMenuItem} isSelected={subMenuItem.path === pathName} open={open} />
                        ))}
                    </Collapse>
                )
            }

            {/* // TODO: 툴팁 형태 띄우기 */}
            <Box sx={{}}></Box>
        </Box>
    )
}

export default DrawerMenuItem;