import { RETAIL_STORES_LAYER_ID, SOCIODEMOGRAPHIC_LAYER_ID } from '../contants';
import {
  TOGGLE_LAYER,
  UPDATE_FILL_COLOR,
  UPDATE_LINE_RADIUS,
  ZOOM_IN,
  ZOOM_OUT,
} from './DataProvider';

export type LayerId =
  | typeof RETAIL_STORES_LAYER_ID
  | typeof SOCIODEMOGRAPHIC_LAYER_ID;

export type UpdateZoom = (value: number) => void;
export type ToggleLayer = (layerId: LayerId) => void;

export type UpdateFillColor = (value: Uint8Array, layerId: LayerId) => void;
export type UpdateLineRadius = (value: number, layerId: LayerId) => void;

export type ReducerState = {
  zoom: number;
  retailStores: UIParameters;
  sociodemographics: UIParameters;
};

export type InitialState = ReducerState & {
  zoomIn: UpdateZoom;
  zoomOut: UpdateZoom;
  toggleLayer: ToggleLayer;
  updateFillColor: UpdateFillColor;
  updateLineRadius: UpdateLineRadius;
};

type UpdateFillColorAction = {
  type: typeof UPDATE_FILL_COLOR;
  value: Uint8Array;
  layerId: LayerId;
};

export type Action =
  | { type: typeof ZOOM_IN; value: number }
  | { type: typeof ZOOM_OUT; value: number }
  | { type: typeof TOGGLE_LAYER; value: LayerId }
  | UpdateFillColorAction
  | { type: typeof UPDATE_LINE_RADIUS; value: number; layerId: LayerId };

export type UIParameters = {
  visible: boolean;
  layerFillColor: Uint8Array;
  focusedColumnFillColor: Uint8Array;
  lineColor: Uint8Array;
  pointRadiusMinPixels: number;
  lineWidthMinPixels: number;
};
