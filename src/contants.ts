export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export const accessToken = import.meta.env.VITE_CARTO_API_TOKEN;

export const CONNECTION_NAME = 'carto_dw';
export const RETAIL_STORES_TABLE = 'carto-demo-data.demo_tables.retail_stores';
export const SOCIODEMOGRAPHIC_TILESET =
  'carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup';

export const RETAIL_STORES_LAYER_ID = 'retail_stores';
export const RETAIL_STORES_FOCUSED_COLUMN = 'revenue';
export const SOCIODEMOGRAPHIC_LAYER_ID = 'sociodemographics';
export const SOCIODEMOGRAPHIC_FOCUSED_COLUMN = 'total_pop';

export const INITIAL_ZOOM_LEVEL = 3.5;

export const INITIAL_VIEW_STATE = {
  latitude: 37.598462,
  longitude: -99.187133,
};

export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
