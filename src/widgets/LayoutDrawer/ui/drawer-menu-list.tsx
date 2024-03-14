import List from '@mui/material/List';
import { usePathname, useRouter } from 'next/navigation';
import { DrawerMenuProps } from '../model/types';
import DrawerMenuItem from './drawer-menu-item';

interface Props {
    menuList: DrawerMenuProps[];
    open: boolean;
}

const DrawerMenuList: React.FC<Props> = ({ menuList, open }) => {
    const pathName = usePathname();
    const router = useRouter();

    return (
        <List>
            {menuList.map((menuItem, index) => (
                <DrawerMenuItem key={index} menuItem={menuItem} pathName={pathName} open={open} />
            ))}
        </List>
    )
};

export default DrawerMenuList;