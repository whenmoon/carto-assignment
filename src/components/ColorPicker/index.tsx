import { ColorPickerChangeEvent } from 'primereact/colorpicker';
import * as S from './styles';
import { useDataContext } from '../../context/DataProvider';
import { ColorPickerProps } from './types';
import { ColorPicker as PrimeReactColorPicker } from 'primereact/colorpicker';

export const ColorPicker = ({ layerId, title }: ColorPickerProps) => {
  const { updateFillColor } = useDataContext();

  const handleChange = (event: ColorPickerChangeEvent): void => {
    const { value } = event as { value: { r: number; g: number; b: number } };

    const color = new Uint8Array([value.r, value.g, value.b]);
    updateFillColor(color, layerId);
  };
  return (
    <>
      <S.ItemTitle>{title}</S.ItemTitle>
      <PrimeReactColorPicker inline format="rgb" onChange={handleChange} />
    </>
  );
};
