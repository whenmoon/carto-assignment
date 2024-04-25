import { ThemeProvider } from '@mui/material';
import { AppContainer } from './components/AppContainer';
import { DataProvider } from './context/DataProvider';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <DataProvider>
      <AppContainer />
    </DataProvider>
  </ThemeProvider>
);
