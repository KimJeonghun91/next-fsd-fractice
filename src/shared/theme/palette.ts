import { alpha } from '@mui/material/styles';

export type ColorSchema = 'diary' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

type ThemeMode = 'light' | 'dark';

const GREY = {
  0: '#FFFFFF',
  100: '#F1F4F6',
  200: '#E7EDF0',
  300: '#CFD6D9',
  400: '#AEB7BC',
  500: '#6E777C', 
  600: '#5E696E',
  700: '#4A5256',
  800: '#353C3F',
  900: '#222729',
};

const BLUE = {
  900: "#3395FF",
  800: "#008BC7",
  700: "#0099DB",
  600: "#26B0EB", // PRIMARY
  500: "#6BD3FF",
  400: "#A6E4FF",
  300: "#BEECFF",
  200: "#D8F3FF",
  100: "#EDFAFF",
  0: "#F7FDFF",
}

const PRIMARY = {
  lighter: BLUE[200],
  light: BLUE[300],
  main: BLUE[600],
  dark: BLUE[800],
  darker: BLUE[900],
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#C3FFD8',
  light: '#90FFA8',
  main: '#5EFF7F',
  dark: '#2DFF59',
  darker: '#00FF32',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#D4FCF9',
  light: '#88F8F8',
  main: '#00CCEB',
  dark: '#0084AB',
  darker: '#005177',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E4FCE8',
  light: '#A7F6CB',
  main: '#52D6A2',
  dark: '#289B7E',
  darker: '#0F6C6A',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FFFAE6',
  light: '#FFE680',
  main: '#FFC100',
  dark: '#B78400',
  darker: '#7A5200',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFEBD9',
  light: '#FFB08C',
  main: '#FF6347',
  dark: '#B73E2E',
  darker: '#7A1F1B',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.25),
  action: {
    hover: alpha(GREY[500], 0.07),
    selected: alpha(GREY[500], 0.17),
    disabled: alpha(GREY[500], 0.9),
    disabledBackground: alpha(GREY[500], 0.23),
    focus: alpha(GREY[500], 0.23),
    hoverOpacity: 0.07,
    disabledOpacity: 0.47,
  },
};

export default function customPalette(themeMode: ThemeMode) {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.17),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
