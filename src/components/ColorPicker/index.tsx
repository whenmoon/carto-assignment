import { ColorPickerChangeEvent } from 'primereact/colorpicker';
import * as S from './styles';
import { ColorPickerProps } from './types';
import { ColorPicker as PrimeReactColorPicker } from 'primereact/colorpicker';
import { getUint8Array } from '../../context/utils';

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
    <>
      <S.ItemTitle>{title}</S.ItemTitle>
      <PrimeReactColorPicker inline format="rgb" onChange={handleChange} />
    </>
  );
};
