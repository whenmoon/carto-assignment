import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl';
import { BASEMAP } from '@deck.gl/carto';
import * as S from './styles';
import { useMap } from './hooks';

export const MapsLayout = () => {
  const { layers, viewState } = useMap();

  return (
    <S.MapsContainer>
      <DeckGL layers={layers} initialViewState={viewState} controller={true}>
        <Map mapStyle={BASEMAP.DARK_MATTER} />
      </DeckGL>
    </S.MapsContainer>
  );
};
