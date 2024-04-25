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
  UpdateFillColor,
  UpdateLineRadius,
  UpdateZoom,
} from './types';
import { INITIAL_ZOOM_LEVEL } from '../contants';

export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
export const TOGGLE_LAYER = 'TOGGLE_LAYER';
export const UPDATE_FILL_COLOR = 'UPDATE_FILL_COLOR';
export const UPDATE_LINE_RADIUS = 'UPDATE_LINE_RADIUS';

export const initialReducerState = {
  zoom: INITIAL_ZOOM_LEVEL,
  retailStores: {
    visible: true,
    layerFillColor: new Uint8Array([0, 221, 255]),
    focusedColumnFillColor: new Uint8Array([242, 255, 0]),
    pointRadiusMinPixels: 2,
    lineColor: new Uint8Array([0, 0, 0, 400]),
    lineWidthMinPixels: 2,
  },
  sociodemographics: {
    visible: false,
    layerFillColor: new Uint8Array([255, 0, 217]),
    focusedColumnFillColor: new Uint8Array([0, 191, 255]),
    pointRadiusMinPixels: 1,
    lineColor: new Uint8Array([0, 0, 0, 400]),
    lineWidthMinPixels: 2,
  },
};

export const initialState = {
  ...initialReducerState,
  zoomIn: () => { },
  zoomOut: () => { },
  toggleLayer: () => { },
  updateFillColor: () => { },
  updateLineRadius: () => { },
};

const DataContext = createContext<InitialState>(initialState);

const dataReducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case ZOOM_IN:
      return { ...state, zoom: state.zoom + action.value };
    case ZOOM_OUT:
      return { ...state, zoom: state.zoom - action.value };
    case TOGGLE_LAYER:
      return {
        ...state,
        [action.value]: {
          ...state[action.value],
          visible: !state[action.value].visible,
        },
      };
    case UPDATE_FILL_COLOR:
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          layerFillColor: action.value,
        },
      };
    case UPDATE_LINE_RADIUS:
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          lineWidthMinPixels: action.value,
        },
      };
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

  const updateFillColor: UpdateFillColor = (value, layerId) => {
    dispatch({ type: UPDATE_FILL_COLOR, value, layerId });
  };

  const updateLineRadius: UpdateLineRadius = (value, layerId) => {
    dispatch({ type: UPDATE_LINE_RADIUS, value, layerId });
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
        updateLineRadius,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
