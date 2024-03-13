import List from 'my-mui/material/List';
import { usePathname, useRouter } from 'next/navigation';
import { DrawerMenuProps } from '../model/types';
import DrawerMenuItem from './drawer-menu-item';

interface Props {
    menuList: DrawerMenuProps[];
    open: boolean;
    isSubMenuOpen: boolean;
    handleToggleSubMenu: () => void;
}

const DrawerMenuList: React.FC<Props> = ({ menuList, open, isSubMenuOpen,handleToggleSubMenu }) => {
    const pathName = usePathname();
    const router = useRouter();

    return (
        <List>
            {menuList.map((menuItem, index) => (
                <DrawerMenuItem key={index} menuItem={menuItem} pathName={pathName} open={open} isSubMenuOpen={isSubMenuOpen} handleToggleSubMenu={handleToggleSubMenu} />
            ))}
        </List>
    )
};

export default DrawerMenuList;