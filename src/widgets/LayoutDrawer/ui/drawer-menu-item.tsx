import React from 'react';
import ListItem from 'my-mui/material/ListItem';
import ListItemButton from 'my-mui/material/ListItemButton';
import ListItemIcon from 'my-mui/material/ListItemIcon';
import ListItemText from 'my-mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import Tooltip, { TooltipProps, tooltipClasses } from 'my-mui/material/Tooltip';
import UpArrow from '@/shared/assets/images/UpArrow';
import { SvgBox } from '@/shared/ui/svgBox';
import { DrawerMenuProps } from '../model/types';
import { Box, Collapse, styled } from 'my-mui/material';
import DrawerMenuSub from './drawer-menu-item-sub';
import useLayoutDrawer from '../model/useLayoutDrawer';
import DrawerTooltipSub from './drawer-tooltip-sub';

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
    const router = useRouter();

    const {
        isSubMenuOpen,
        handleToggleSubMenu
    } = useLayoutDrawer();

    const handleTitleMenuClick = () => {
        if (menuItem.subMenu && menuItem.subMenu.length > 0) {
            handleToggleSubMenu();
        } else {
            router.push(menuItem.path);
        };
    };

    return (
        <SubMenuToolTip
            title={!open && menuItem.subMenu && menuItem.subMenu.length > 0 ? <DrawerTooltipSub menuItem={menuItem} /> : ''}
            placement="right"
        >
            <Box sx={{ px: 0.8, position: 'relative' }}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        onClick={handleTitleMenuClick}
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
                            // '&:hover': {
                            //     backgroundColor: '#EDFAFF'
                            // },
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
            </Box>
        </SubMenuToolTip>
    )
}

const SubMenuToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default DrawerMenuItem;