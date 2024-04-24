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
import { GetVectorTileLayer } from './types';

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

export const getVectorTileLayer: GetVectorTileLayer = (
  data,
  id,
  handleClick,
  fillColor,
) =>
  new VectorTileLayer({
    data,
    pointRadiusMinPixels: 1,
    getLineColor: [0, 0, 0, 400],
    getFillColor: fillColor,
    lineWidthMinPixels: 1,
    id,
    pickable: true,
    onClick: (data) => {
      handleClick(data.object.properties);
    },
  });
