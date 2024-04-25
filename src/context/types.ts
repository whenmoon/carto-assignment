import { ZOOM_IN, ZOOM_OUT } from '../contants';

export type UpdateZoom = (value: number) => void;

export type ReducerState = {
  zoom: number;
  retailStores: UIParameters;
  sociodemographics: UIParameters;
};

export type InitialState = ReducerState & {
  zoomIn: UpdateZoom;
  zoomOut: UpdateZoom;
};

export type Action =
  | { type: typeof ZOOM_IN; value: number }
  | { type: typeof ZOOM_OUT; value: number };

export type UIParameters = {
  visible: boolean;
  layerFillColor: Uint8Array;
  focusedColumnFillColor: Uint8Array;
  lineColor: Uint8Array;
  pointRadiusMinPixels: number;
  lineWidthMinPixels: number;
};
