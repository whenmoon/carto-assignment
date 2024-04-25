import {
  ReactElement,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  Action,
  InitialState,
  ReducerState,
  ToggleLayer,
  UpdateColor,
  UpdateSize,
  UpdateZoom,
} from './types';
import { INITIAL_ZOOM_LEVEL } from '../contants';
import { dataReducer, getUint8Array } from './utils';

// Action types
export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
export const TOGGLE_LAYER = 'TOGGLE_LAYER';
export const UPDATE_FILL_COLOR = 'UPDATE_FILL_COLOR';
export const UPDATE_OUTLINE_SIZE = 'UPDATE_OUTLINE_SIZE';
export const UPDATE_OUTLINE_COLOR = 'UPDATE_OUTLINE_COLOR';
export const UPDATE_POINT_SIZE = 'UPDATE_POINT_SIZE';

export const initialReducerState = {
  zoom: INITIAL_ZOOM_LEVEL,
  retailStores: {
    visible: true,
    layerFillColor: getUint8Array([0, 221, 255]),
    lineColor: getUint8Array([0, 0, 0, 400]),
    focusedColumnFillColor: getUint8Array([242, 255, 0]),
    lineWidthMinPixels: 2,
    pointRadiusMinPixels: 3,
  },
  sociodemographics: {
    visible: false,
    layerFillColor: getUint8Array([255, 0, 217]),
    lineColor: getUint8Array([0, 0, 0, 400]),
    focusedColumnFillColor: getUint8Array([0, 191, 255]),
    lineWidthMinPixels: 2,
    pointRadiusMinPixels: 1,
  },
};

const noop = () => null;

export const initialState = {
  ...initialReducerState,
  zoomIn: noop,
  zoomOut: noop,
  toggleLayer: noop,
  updateFillColor: noop,
  updateOutineSize: noop,
  updateOutlineColor: noop,
  updatePointSize: noop,
};

const DataContext = createContext<InitialState>(initialState);

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
    if (data.zoom >= 15) {
      dispatch({ type: ZOOM_IN, value });
    }
  };

  const zoomOut: UpdateZoom = (value) => {
    if (data.zoom <= 1) {
      dispatch({ type: ZOOM_OUT, value });
    }
  };

  const toggleLayer: ToggleLayer = (layerId) => {
    dispatch({ type: TOGGLE_LAYER, value: layerId });
  };

  const updateFillColor: UpdateColor = (value, layerId) => {
    dispatch({ type: UPDATE_FILL_COLOR, value, layerId });
  };

  const updateOutineSize: UpdateSize = (value, layerId) => {
    dispatch({ type: UPDATE_OUTLINE_SIZE, value, layerId });
  };

  const updateOutlineColor: UpdateColor = (value, layerId) => {
    dispatch({ type: UPDATE_OUTLINE_COLOR, value, layerId });
  };

  const updatePointSize: UpdateSize = (value, layerId) => {
    dispatch({ type: UPDATE_POINT_SIZE, value, layerId });
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
        toggleLayer,
        updateFillColor,
        updateOutineSize,
        updateOutlineColor,
        updatePointSize,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
