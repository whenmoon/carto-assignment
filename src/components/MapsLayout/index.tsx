import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl';
import {
  BASEMAP,
  VectorTileLayer,
  vectorTableSource,
  vectorTilesetSource,
} from '@deck.gl/carto';
import {
  CONNECTION_NAME,
  RETAIL_STORES_TABLE,
  SOCIODEMOGRAPHIC_TILESET,
  accessToken,
  apiBaseUrl,
} from '../../contants';
import * as S from './styles';
import { useState } from 'react';
import { useMap } from './hooks';

export const MapsLayout = () => {
  //const [hoverInfo, setHoverInfo] = useState<any>();
  //console.log('hoverInfo', hoverInfo);

  //const data = vectorTableSource({
  //  accessToken,
  //  connectionName: CONNECTION_NAME,
  //  apiBaseUrl,
  //  tableName: RETAIL_STORES_TABLE,
  //});
  //console.log('data', data);

  //const tileSetData = vectorTilesetSource({
  //  accessToken,
  //  connectionName: CONNECTION_NAME,
  //  apiBaseUrl,
  //  tableName: SOCIODEMOGRAPHIC_TILESET,
  //});

  //const layer1 = new VectorTileLayer({
  //  data,
  //  pointRadiusMinPixels: 10,
  //  getLineColor: [0, 0, 0, 200],
  //  getFillColor: [238, 77, 90],
  //  lineWidthMinPixels: 1,
  //  id: 'any',
  //  pickable: true,
  //  onClick: (info, e) => console.log('click', info.object.properties),
  //});

  ////const x = getVectorTileLayer<RetailStore>(data);
  //const layer2 = new VectorTileLayer({
  //  data: tileSetData,
  //  pointRadiusMinPixels: 4,
  //  getLineColor: [0, 0, 0, 400],
  //  getFillColor: [138, 74, 50, 50],
  //  lineWidthMinPixels: 1,
  //  id: 'any1',
  //});

  //const INITIAL_VIEW_STATE = {
  //  latitude: 40.690362,
  //  longitude: -97.011084,
  //  zoom: 3,
  //};

  const { layers, viewState } = useMap();

  return (
    <S.MapsContainer>
      <DeckGL layers={layers} initialViewState={viewState} controller={true}>
        <Map mapStyle={BASEMAP.DARK_MATTER} />
      </DeckGL>
    </S.MapsContainer>
  );
};
