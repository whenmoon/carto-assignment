import { SliderProps as MUISliderProps } from '@mui/material';
import { LayerId, UpdateSize } from '../../context/types';

export type SliderProps = MUISliderProps & {
  layerId: LayerId;
  title: string;
  targetValue: 'pointRadiusMinPixels' | 'lineWidthMinPixels';
  updateCallback: UpdateSize;
  maxVal: number;
};
