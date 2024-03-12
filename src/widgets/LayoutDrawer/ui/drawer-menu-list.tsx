
import ListItem from 'my-mui/material/ListItem';
import ListItemButton from 'my-mui/material/ListItemButton';
import ListItemIcon from 'my-mui/material/ListItemIcon';
import ListItemText from 'my-mui/material/ListItemText';
import List from 'my-mui/material/List';
import { DrawerMenuItem } from '../model/types';

interface Props {
    open: boolean;
    menuList: DrawerMenuItem[];
}

const DrawerMenuList: React.FC<Props> = ({ open, menuList }) => {
    return (
        <List>
            {menuList.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 2 : 'auto',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {item.labelIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
};

export default DrawerMenuList;