import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Nunito", Arial, sans-serif',
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          fontFamily: '"Nunito", Arial, sans-serif',
          fontSize: 20,
        },
      },
    },
  },
});
