import {
  ReactElement,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { Action, InitialState, ReducerState, UpdateZoom } from './types';
import {
  ZOOM_IN,
  ZOOM_OUT,
  initialReducerState,
  initialState,
} from '../contants';

const DataContext = createContext<InitialState>(initialState);

const dataReducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case ZOOM_IN:
      return { ...state, zoom: state.zoom + action.value };
    case ZOOM_OUT:
      return { ...state, zoom: state.zoom - action.value };
    default:
      return state;
  }
};

export const DataProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [data, dispatch] = useReducer<Reducer<ReducerState, Action>>(
    dataReducer,
    initialReducerState,
  );

  const zoomIn: UpdateZoom = (value) => {
    dispatch({ type: ZOOM_IN, value });
  };

  const zoomOut: UpdateZoom = (value) => {
    dispatch({ type: ZOOM_OUT, value });
  };

  const { zoom, retailStoresUI, sociodemographicsUI } = data;

  return (
    <DataContext.Provider
      value={{
        zoom,
        retailStoresUI,
        sociodemographicsUI,
        zoomIn,
        zoomOut,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
