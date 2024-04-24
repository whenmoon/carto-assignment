import {
  ReactElement,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { INITIAL_ZOOM_LEVEL } from '../contants';

type UpdateZoom = (value: number) => void;

type InitialState = {
  zoom: number;
  zoomIn: UpdateZoom;
  zoomOut: UpdateZoom;
};

const initialState = {
  zoom: INITIAL_ZOOM_LEVEL,
  zoomIn: () => { },
  zoomOut: () => { },
};

const ZOOM_IN = 'ZOOM_IN';
const ZOOM_OUT = 'ZOOM_OUT';

const DataContext = createContext<InitialState>(initialState);

type Action =
  | { type: typeof ZOOM_IN; value: number }
  | { type: typeof ZOOM_OUT; value: number };

type ReducerState = {
  zoom: number;
};

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
  const initialReducerState = {
    zoom: INITIAL_ZOOM_LEVEL,
  };
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

  return (
    <DataContext.Provider
      value={{
        zoom: data.zoom,
        zoomIn,
        zoomOut,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
