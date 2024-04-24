export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export const accessToken = import.meta.env.VITE_CARTO_API_TOKEN;

export const CONNECTION_NAME = 'carto_dw';
export const RETAIL_STORES_TABLE = 'carto-demo-data.demo_tables.retail_stores';
export const SOCIODEMOGRAPHIC_TILESET =
  'carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup';

export const INITIAL_ZOOM_LEVEL = 3;

export const INITIAL_VIEW_STATE = {
  latitude: 40.690362,
  longitude: -97.011084,
};

export const initialReducerState = {
  zoom: INITIAL_ZOOM_LEVEL,
  retailStoresUI: {
    fillColor: new Uint8Array([235, 52, 189, 50]),
    pointRadiusMinPixels: 1,
    lineColor: new Uint8Array([0, 0, 0, 400]),
    lineWidthMinPixels: 1,
  },
  sociodemographicsUI: {
    fillColor: new Uint8Array([235, 52, 189, 50]),
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

export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
