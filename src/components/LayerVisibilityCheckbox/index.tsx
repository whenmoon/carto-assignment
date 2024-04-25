import { useDataContext } from '../../context/DataProvider';
import { LayerVisibilityCheckboxProps } from './types';
import * as S from './styles';
import { RETAIL_STORES_LAYER_ID } from '../../contants';
export const LayerVisibilityCheckbox = (
  props: LayerVisibilityCheckboxProps,
) => {
  const { layerId } = props;
  const { toggleLayer, retailStores, sociodemographics } = useDataContext();

  return (
    <S.CheckboxContainer>
      <S.LayerToggleCheckbox
        checked={
          layerId === RETAIL_STORES_LAYER_ID
            ? retailStores.visible
            : sociodemographics.visible
        }
        onClick={() => toggleLayer(layerId)}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}
      />
      <S.ItemTitle>Toggle layer visibility</S.ItemTitle>
    </S.CheckboxContainer>
  );
};
