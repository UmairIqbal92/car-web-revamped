'use client';

import Colors from '@/app/assets/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.deep_blue,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1280,
      lg: 1440,
      xl: 1920
    }
  }
});

export default theme;