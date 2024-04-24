export type UpdateZoom = (value: number) => void;

export type ReducerState = {
  zoom: number;
  retailStoresUI: UIParameters;
  sociodemographicsUI: UIParameters;
};

export type InitialState = ReducerState & {
  zoomIn: UpdateZoom;
  zoomOut: UpdateZoom;
};

export type Action =
  | { type: typeof ZOOM_IN; value: number }
  | { type: typeof ZOOM_OUT; value: number };

export type UIParameters = {
  fillColor: Uint8Array;
  lineColor: Uint8Array;
  pointRadiusMinPixels: number;
  lineWidthMinPixels: number;
};
