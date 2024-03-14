import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import { DrawerMenuSubProps } from '../model/types';

interface Props {
    menuItem: DrawerMenuSubProps;
    open: boolean;
    isSelected: boolean;
}

const DrawerMenuSub: React.FC<Props> = ({ menuItem, isSelected, open }) => {
    const router = useRouter();

    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                onClick={() => router.push(menuItem.path)}
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