import { ThemeProvider } from '@mui/material';
import { AppContainer } from './components/AppContainer';
import { DataProvider } from './context/DataProvider';
import { theme } from './theme';

export const App = () => {
  console.log(
    'import.meta.env.VITE_API_BASE_URL',
    import.meta.env.VITE_API_BASE_URL,
  );

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <AppContainer />
      </DataProvider>
    </ThemeProvider>
  );
};
