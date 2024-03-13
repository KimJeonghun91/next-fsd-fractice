import { Box, Divider, Typography } from "my-mui/material";
import { useRouter } from 'next/navigation';
import { DrawerMenuProps } from "../model/types";

interface Props {
    menuItem: DrawerMenuProps;
}

const DrawerTooltipSub: React.FC<Props> = ({ menuItem }) => {
    const router = useRouter();
    return (
        <Box>
            {menuItem.subMenu?.map((subMenuItem, index) => (
                <Box key={index}>
                    <Box key={index} sx={{
                        px: 2.5,
                        py: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#EDFAFF'
                        },
                        borderRadius: 2
                    }} onClick={() => { router.push(subMenuItem.path); }}>
                        <Typography variant="body2" color="inherit">{subMenuItem.title}</Typography>
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