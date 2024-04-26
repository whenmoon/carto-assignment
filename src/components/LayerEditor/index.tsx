import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as S from './styles';
import { LayerEditorProps } from './types';
import { LayerVisibilityCheckbox } from '../LayerVisibilityCheckbox';
import { ColorPicker } from '../ColorPicker';
import { Slider } from '../Slider';
import { useDataContext } from '../../context/DataProvider';
import { RETAIL_STORES_LAYER_ID } from '../../contants';

export const LayerEditor = ({ layers }: LayerEditorProps) => {
  const {
    updateFillColor,
    updateOutlineColor,
    updateOutineSize,
    updatePointSize,
  } = useDataContext();

  return (
    <>
      {layers.map((layer) => (
        <S.LayerEditor key={layer.title}>
          <S.LayerTitle
            expandIcon={<ExpandMoreIcon fontSize="inherit" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {layer.title}
          </S.LayerTitle>
          <S.LayerContent>
            <LayerVisibilityCheckbox layerId={layer.id} />
            <ColorPicker
              layerId={layer.id}
              title="Fill color"
              updateCallback={updateFillColor}
            />
            <Slider
              layerId={layer.id}
              title="Outline Size"
              targetValue="lineWidthMinPixels"
              updateCallback={updateOutineSize}
              maxVal={4}
            />
            <ColorPicker
              layerId={layer.id}
              title="Outline Colour"
              updateCallback={updateOutlineColor}
            />
            {/*  Point size does not see to update tileset visualisations */}
            {layer.id === RETAIL_STORES_LAYER_ID && (
              <Slider
                layerId={layer.id}
                title="Point Size"
                targetValue="pointRadiusMinPixels"
                updateCallback={updatePointSize}
                maxVal={8}
              />
            )}
          </S.LayerContent>
        </S.LayerEditor>
      ))}
    </>
  );
};
