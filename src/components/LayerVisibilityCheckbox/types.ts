import { CheckboxProps } from '@mui/material';
import { LayerId } from '../../context/types';

export type LayerVisibilityCheckboxProps = CheckboxProps & {
  layerId: LayerId;
};
