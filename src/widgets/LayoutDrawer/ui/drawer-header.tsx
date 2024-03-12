"use client";

import React from 'react';
import { styled } from 'my-mui/material/styles';
import { IconButton } from 'my-mui/material';
import { LogoGoogle, LogoGoogleMini } from '@/shared/assets/images/index';

interface Props {
    open: boolean;
}

const DrawerHeader: React.FC<Props> = ({ open }) => {
    const Header = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    return (
        <Header>
            <IconButton>
                {
                    open ? <LogoGoogle /> : <LogoGoogleMini />
                }
            </IconButton>
        </Header>
    )
}

export default DrawerHeader;