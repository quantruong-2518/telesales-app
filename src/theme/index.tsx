import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E87722',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6C757D',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
