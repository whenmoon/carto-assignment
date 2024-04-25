import { RETAIL_STORES_LAYER_ID } from '../../contants';
import { useDataContext } from '../../context/DataProvider';
import * as S from './styles';
//import { useDataContext } from '../../context/DataProvider';
import { SliderProps } from './types';

export const Slider = ({ layerId, title }: SliderProps) => {
  const { updateLineRadius, retailStores, sociodemographics } =
    useDataContext();

  const handleChange = (_event: Event, value: number | number[]): void => {
    if (typeof value === 'number') {
      updateLineRadius(value, layerId);
    }
  };

  return (
    <>
      <S.ItemTitle>{title}</S.ItemTitle>
      <S.Slider
        aria-label="Slider"
        onChange={handleChange}
        size="small"
        min={1}
        max={5}
        value={
          layerId === RETAIL_STORES_LAYER_ID
            ? retailStores.lineWidthMinPixels
            : sociodemographics.lineWidthMinPixels
        }
      />
    </>
  );
};
