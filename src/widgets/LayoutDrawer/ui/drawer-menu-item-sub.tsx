import ListItem from 'my-mui/material/ListItem';
import ListItemButton from 'my-mui/material/ListItemButton';
import ListItemText from 'my-mui/material/ListItemText';
import { DrawerMenuProps } from '../model/types';

interface Props {
    menuItem: DrawerMenuProps;
    open: boolean;
    isSelected: boolean;
}

const DrawerMenuSub: React.FC<Props> = ({ menuItem, isSelected, open }) => {
    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                selected={isSelected}
                sx={{
                    height: 32,
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
                <ListItemText
                    primaryTypographyProps={{ fontSize: '14px', color: '#353C3F' }}
                    primary={menuItem.title}
                    sx={{ opacity: open ? 1 : 0, pl: 4.4 }}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default DrawerMenuSub;