import { LayerId, UpdateColor } from '../../context/types';
import { ColorPickerProps as PrimeReactColorPickerProps } from 'primereact/colorpicker';

export type ColorPickerProps = PrimeReactColorPickerProps & {
  layerId: LayerId;
  title: string;
  updateCallback: UpdateColor;
};
