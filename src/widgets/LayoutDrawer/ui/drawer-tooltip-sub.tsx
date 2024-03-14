import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { DrawerMenuProps } from "../model/types";

interface Props {
    menuItem: DrawerMenuProps;
    pathName: string;
}

const DrawerTooltipSub: React.FC<Props> = ({ menuItem, pathName }) => {
    const router = useRouter();
    const theme = useTheme();

    return (
        <Box>
            {menuItem.subMenu?.map((subMenuItem, index) => (
                <Box key={index}>
                    <Box key={index} sx={{
                        px: 2.5,
                        py: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover
                        },
                        borderRadius: 2
                    }} onClick={() => { router.push(subMenuItem.path); }}>
                        <Typography variant="body2" color={subMenuItem.path === pathName ? theme.palette.primary.main :"inherit"}>{subMenuItem.title}</Typography>
                    </Box>

                    {
                        menuItem?.subMenu && index !== menuItem.subMenu.length - 1 && <Divider />
                    }
                </Box>
            ))}
        </Box>
    )
}

export default DrawerTooltipSub;