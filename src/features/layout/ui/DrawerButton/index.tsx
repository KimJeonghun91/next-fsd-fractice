import * as React from "react";
import { IconMenuFold } from '@Img/index';
import { IconButton } from 'my-mui/material';

interface Props {
    handleDrawer: () => void;
}

export const DrawerButton: React.FC<Props> = ({ handleDrawer }) => {
    return (
        <IconButton sx={{ position: 'absolute', top: 50, right: -17, zIndex: 9999, backgroundColor: '#ffffff' }} onClick={handleDrawer}>
            <IconMenuFold />
        </IconButton>
    )
}