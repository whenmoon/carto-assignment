import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as S from './styles';
import { LayerEditorProps } from './types';
import { LayerVisibilityCheckbox } from '../LayerVisibilityCheckbox';
import { ColorPicker } from '../ColorPicker';
import { Slider } from '../Slider';

export const LayerEditor = ({ layers }: LayerEditorProps) => {
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
            <ColorPicker layerId={layer.id} title="Fill color" />
            <Slider layerId={layer.id} title="Outline Radius" />
            <ColorPicker layerId={layer.id} title="Ouline Colour" />
          </S.LayerContent>
        </S.LayerEditor>
      ))}
    </>
  );
};
