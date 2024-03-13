import List from 'my-mui/material/List';
import { usePathname, useRouter } from 'next/navigation';
import { DrawerMenuProps, UseLayoutDrawerProps } from '../model/types';
import DrawerMenuItem from './drawer-menu-item';

interface Props {
    menuList: DrawerMenuProps[];
    useLayoutDrawer: UseLayoutDrawerProps;
}

const DrawerMenuList: React.FC<Props> = ({ menuList, useLayoutDrawer }) => {
    const pathName = usePathname();
    const router = useRouter();

    return (
        <List>
            {menuList.map((menuItem, index) => (
                <DrawerMenuItem key={index} menuItem={menuItem} pathName={pathName} useLayoutDrawer={useLayoutDrawer} />
            ))}
        </List>
    )
};

export default DrawerMenuList;