import { Theme } from '@mui/material';

export default function ListItemButton(theme: Theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontsize: '14px',
          '&.Mui-selected': {
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          },
        },

      }
    }
  };
}
