import DeckGL from '@deck.gl/react';
import { BaseMap } from '../BaseMap';
import { BASEMAP, VectorTileLayer, vectorTableSource } from '@deck.gl/carto';
import {
  CONNECTION_NAME,
  RETAIL_STORES_TABLE,
  accessToken,
  apiBaseUrl,
} from '../../contants';

export const GeoLocationLayout = () => {
  const data = vectorTableSource({
    accessToken,
    connectionName: CONNECTION_NAME,
    apiBaseUrl,
    tableName: RETAIL_STORES_TABLE,
  });

  const layer = new VectorTileLayer({
    data,
    pointRadiusMinPixels: 2,
    getLineColor: [0, 0, 0, 200],
    getFillColor: [238, 77, 90],
    lineWidthMinPixels: 1,
    id: 'any',
  });

  const INITIAL_VIEW_STATE = {
    latitude: 40.690362,
    longitude: -97.011084,
    zoom: 3,
    bearing: 0,
    pitch: 30,
  };

  return (
    <DeckGL
      layers={[layer]}
      controller={true}
      viewState={INITIAL_VIEW_STATE}
      style={{ height: '80%' }}
    >
      <BaseMap mapStyle={BASEMAP.DARK_MATTER} />
    </DeckGL>
  );
};
