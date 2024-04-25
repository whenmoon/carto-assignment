import { LayerId, UpdateSize } from '../../context/types';

export type SliderProps = {
  layerId: LayerId;
  title: string;
  targetValue: 'pointRadiusMinPixels' | 'lineWidthMinPixels';
  updateCallback: UpdateSize;
  maxVal: number;
};
