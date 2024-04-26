import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl';
import { BASEMAP } from '@deck.gl/carto';
import * as S from './styles';
import { useMap } from './hooks';
import { ZoomControls } from '../ZoomControls';
import { Tooltip } from '../Tooltip';

export const MapsLayout = () => {
  const { layers, viewState, nodeAttributes, mapRef, isTooltipVisible } =
    useMap();

  return (
    <S.MapsContainer>
      <DeckGL layers={layers} initialViewState={viewState} controller>
        <Map mapStyle={BASEMAP.DARK_MATTER} minZoom={0} maxZoom={10} />
        {isTooltipVisible && nodeAttributes && (
          <div ref={mapRef}>
            <Tooltip nodeAttributes={nodeAttributes} />
          </div>
        )}
        <ZoomControls />
      </DeckGL>
    </S.MapsContainer>
  );
};
