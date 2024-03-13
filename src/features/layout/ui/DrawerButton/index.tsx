import * as React from "react";
import { IconRightOpen } from '@/shared/assets/images/index';
import IconButton from 'my-mui/material/IconButton';

interface Props {
    handleDrawer: () => void;
    open: boolean;
}

export const DrawerButton: React.FC<Props> = ({ open, handleDrawer }) => {
    const [rotated, setRotated] = React.useState(false);

    React.useEffect(() => {
        setRotated(open);
    }, [open]);

    return (
        <IconButton
            sx={{
                position: 'absolute',
                top: 47,
                right: -16,
                zIndex: 9999,
                backgroundColor: 'rgba(255, 255, 255, 0.77)',
                borderRadius: 16,
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(7.9px)',
                WebkitBackdropFilter: 'blur(7.9px)',
                border: '1px solid rgba(230, 230, 230, 1)',
                padding: 0.5,
                transition: 'transform 0.8s ease',
                transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={handleDrawer}
        >
            <IconRightOpen />
        </IconButton>
    )
}
