import {
  ReactElement,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { Action, InitialState, ReducerState, UpdateZoom } from './types';
import { INITIAL_ZOOM_LEVEL, ZOOM_IN, ZOOM_OUT } from '../contants';

export const initialReducerState = {
  zoom: INITIAL_ZOOM_LEVEL,
  retailStores: {
    visible: true,
    layerFillColor: new Uint8Array([0, 221, 255]),
    focusedColumnFillColor: new Uint8Array([242, 255, 0]),
    pointRadiusMinPixels: 2,
    lineColor: new Uint8Array([0, 0, 0, 400]),
    lineWidthMinPixels: 1,
  },
  sociodemographics: {
    visible: false,
    layerFillColor: new Uint8Array([255, 0, 217]),
    focusedColumnFillColor: new Uint8Array([0, 191, 255]),
    pointRadiusMinPixels: 1,
    lineColor: new Uint8Array([0, 0, 0, 400]),
    lineWidthMinPixels: 1,
  },
};

export const initialState = {
  ...initialReducerState,
  zoomIn: () => { },
  zoomOut: () => { },
};

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

  const { zoom, retailStores, sociodemographics } = data;

  return (
    <DataContext.Provider
      value={{
        retailStores,
        sociodemographics,
        zoom,
        zoomIn,
        zoomOut,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
