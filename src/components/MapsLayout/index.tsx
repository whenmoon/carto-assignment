import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl';
import { BASEMAP } from '@deck.gl/carto';
import * as S from './styles';
import { useMap } from './hooks';
import Tooltip from '@mui/material/Tooltip';
import { ZoomControls } from '../ZoomControls';

export const MapsLayout = () => {
  const { layers, viewState, dataPoint } = useMap();

  return (
    <S.MapsContainer>
      <DeckGL layers={layers} initialViewState={viewState} controller>
        <Map mapStyle={BASEMAP.DARK_MATTER} minZoom={0} maxZoom={10} />
        {dataPoint && (
          <Tooltip
            title="Delete"
            style={{
              width: 50,
              height: 50,
              zIndex: 10000,
              left: dataPoint.x,
              top: dataPoint.y,
              position: 'absolute',
            }}
          >
            <div>{JSON.stringify(dataPoint)}</div>
          </Tooltip>
        )}
        <ZoomControls />
      </DeckGL>
    </S.MapsContainer>
  );
};
