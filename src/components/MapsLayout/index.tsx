import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl';
import { BASEMAP } from '@deck.gl/carto';
import * as S from './styles';
import { useMap } from './hooks';
import Tooltip from '@mui/material/Tooltip';

export const MapsLayout = () => {
  const { layers, viewState, dataPoint } = useMap();

  return (
    <S.MapsContainer>
      <DeckGL layers={layers} initialViewState={viewState} controller>
        <Map mapStyle={BASEMAP.DARK_MATTER} minZoom={1} maxZoom={15} />
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
      </DeckGL>
    </S.MapsContainer>
  );
};
