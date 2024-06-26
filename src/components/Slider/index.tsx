import { useDataContext } from '../../context/DataProvider';
import { ItemTitle } from '../EditorItemTitle';
import * as S from './styles';
import { SliderProps } from './types';

export const Slider = ({
  layerId,
  title,
  targetValue,
  updateCallback,
  maxVal,
  ...restProps
}: SliderProps) => {
  const uiState = useDataContext();

  const handleChange = (_event: Event, value: number | number[]): void => {
    if (typeof value === 'number') {
      updateCallback(value, layerId);
    }
  };

  return (
    <>
      <ItemTitle>{title}</ItemTitle>
      <S.Slider
        aria-label="Slider"
        onChange={handleChange}
        size="small"
        min={0.1}
        max={maxVal}
        valueLabelDisplay="auto"
        step={0.1}
        value={uiState[layerId][targetValue]}
        {...restProps}
      />
    </>
  );
};
