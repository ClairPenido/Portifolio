import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export const theme2 = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});