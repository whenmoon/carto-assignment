import { useDataContext } from '../../context/DataProvider';
import { LayerVisibilityCheckboxProps } from './types';
import * as S from './styles';

export const LayerVisibilityCheckbox = ({
  layerId,
  ...restProps
}: LayerVisibilityCheckboxProps) => {
  const uiState = useDataContext();
  const { toggleLayer } = uiState;

  const handleClick = () => {
    toggleLayer(layerId);
  };

  return (
    <S.CheckboxContainer>
      <S.LayerToggleCheckbox
        checked={uiState[layerId]['visible']}
        onClick={handleClick}
        {...restProps}
      />
      <S.Title>Toggle layer visibility</S.Title>
    </S.CheckboxContainer>
  );
};
