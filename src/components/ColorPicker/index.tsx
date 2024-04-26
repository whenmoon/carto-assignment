import { ColorPickerChangeEvent } from 'primereact/colorpicker';
import { ColorPickerProps } from './types';
import { ColorPicker as PrimeReactColorPicker } from 'primereact/colorpicker';
import { getUint8Array } from '../../context/utils';
import { ItemTitle } from '../EditorItemTitle';
import * as S from './styles';

export const ColorPicker = ({
  layerId,
  title,
  updateCallback,
}: ColorPickerProps) => {
  const handleChange = (event: ColorPickerChangeEvent): void => {
    const { value } = event as { value: { r: number; g: number; b: number } };
    const color = getUint8Array([value.r, value.g, value.b]);
    updateCallback(color, layerId);
  };

  return (
    <S.ColorPickerContainer>
      <ItemTitle>{title}</ItemTitle>
      <PrimeReactColorPicker inline format="rgb" onChange={handleChange} />
    </S.ColorPickerContainer>
  );
};
