import { Checkbox, styled } from '@mui/material';
import { ItemTitle } from '../EditorItemTitle';

export const CheckboxContainer = styled('div')`
  display: flex;
  align-items: center;
  font-size: smaller;
  margin-bottom: 10px;
`;

export const LayerToggleCheckbox = styled(Checkbox)`
  max-width: 30px;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const Title = styled(ItemTitle)`
  font-size: 20px;
`;
