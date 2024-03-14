import { Theme } from '@mui/material';

export default function ListItemText(theme: Theme) {
  return {
    MuiListItemText: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: '14px',
          },
        },
      }
    }
  };
}
