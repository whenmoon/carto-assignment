import { Add, Remove } from '@mui/icons-material';
import { ButtonGroup } from '@mui/material';
import * as S from './styles';
import { useDataContext } from '../../context/DataProvider';

export const ZoomControls = () => {
  const { zoomIn, zoomOut } = useDataContext();

  const handleZoomIn = () => {
    zoomIn();
  };

  const handleZoomOut = () => {
    zoomOut();
  };

  return (
    <S.ZoomControlsContainer>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <S.ZoomButton size="small" onClick={handleZoomOut} variant="outlined">
          <Remove fontSize="small" />
        </S.ZoomButton>
        <S.ZoomButton size="small" onClick={handleZoomIn} variant="outlined">
          <Add fontSize="small" />
        </S.ZoomButton>
      </ButtonGroup>
    </S.ZoomControlsContainer>
  );
};
