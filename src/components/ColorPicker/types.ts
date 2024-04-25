import { LayerId, UpdateColor } from '../../context/types';

export type ColorPickerProps = {
  layerId: LayerId;
  title: string;
  updateCallback: UpdateColor;
};
