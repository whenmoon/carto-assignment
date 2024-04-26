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
import {
  TOGGLE_LAYER,
  UPDATE_FILL_COLOR,
  UPDATE_OUTLINE_COLOR,
  UPDATE_OUTLINE_SIZE,
  UPDATE_POINT_SIZE,
  ZOOM_IN,
  ZOOM_OUT,
} from '../contants';

const initialReducerState = {
  zoom: INITIAL_ZOOM_LEVEL,
  retailStores: {
    visible: true,
    layerFillColor: getUint8Array([40, 49, 61]),
    lineColor: getUint8Array([230, 255, 0]),
    focusedColumnFillColor: getUint8Array([242, 255, 0]),
    lineWidthMinPixels: 1.5,
    pointRadiusMinPixels: 10,
  },
  sociodemographics: {
    visible: false,
    layerFillColor: getUint8Array([0, 255, 217]),
    lineColor: getUint8Array([255, 0, 247]),
    focusedColumnFillColor: getUint8Array([0, 191, 255]),
    lineWidthMinPixels: 0.4,
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

  const zoomIn: UpdateZoom = () => {
    if (data.zoom < 10) {
      dispatch({ type: ZOOM_IN });
    }
  };

  const zoomOut: UpdateZoom = () => {
    if (data.zoom > 0) {
      dispatch({ type: ZOOM_OUT });
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
