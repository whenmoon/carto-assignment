import { AppContainer } from './components/AppContainer';
import { DataProvider } from './context/DataProvider';

export const App = () => (
  <DataProvider>
    <AppContainer />
  </DataProvider>
);
