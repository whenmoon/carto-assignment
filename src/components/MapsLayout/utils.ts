import {
  TilejsonResult,
  VectorTileLayer,
  vectorTableSource,
  vectorTilesetSource,
} from '@deck.gl/carto';
import {
  CONNECTION_NAME,
  RETAIL_STORES_TABLE,
  SOCIODEMOGRAPHIC_TILESET,
} from '../../contants';
import { GetVectorTileLayer, RetailStore, Sociodemographic } from './types';

const config = {
  accessToken: import.meta.env.VITE_CARTO_API_TOKEN,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  connectionName: CONNECTION_NAME,
};

export const getTableData = (
  tableName = RETAIL_STORES_TABLE,
): Promise<TilejsonResult> =>
  vectorTableSource({
    tableName,
    ...config,
  });

export const getTilesetData = (
  tableName = SOCIODEMOGRAPHIC_TILESET,
): Promise<TilejsonResult> =>
  vectorTilesetSource({
    tableName,
    ...config,
  });

const getFillColor = (
  data: RetailStore | Sociodemographic,
  layerFillColor: Uint8Array,
  focusedColumnFillColor: Uint8Array,
): Uint8Array => {
  if ('revenue' in data) {
    return data.revenue > 1500000 ? focusedColumnFillColor : layerFillColor;
  }
  if ('total_pop' in data) {
    return data.total_pop > 1000 ? focusedColumnFillColor : layerFillColor;
  }
  return layerFillColor;
};

export const getVectorTileLayer: GetVectorTileLayer = ({
  data,
  id,
  handleDataPointClick,
  layerFillColor,
  focusedColumnFillColor,
  lineWidthMinPixels,
  pointRadiusMinPixels,
  lineColor,
}) =>
  new VectorTileLayer({
    data,
    pointRadiusMinPixels,
    getLineColor: lineColor,
    getFillColor: (data) =>
      getFillColor(data.properties, layerFillColor, focusedColumnFillColor),
    lineWidthMinPixels,
    id,
    pickable: true,
    onClick: (data) => {
      const {
        x,
        y,
        object: { properties },
      } = data;
      handleDataPointClick({ x, y, properties });
    },
    updateTriggers: {
      getFillColor: [layerFillColor, focusedColumnFillColor],
    },
  });
