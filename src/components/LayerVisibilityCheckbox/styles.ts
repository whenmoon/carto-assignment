import { Checkbox, styled } from '@mui/material';

export const CheckboxContainer = styled('div')`
  display: flex;
  align-items: center;
  font-size: smaller;
`;

export const LayerToggleCheckbox = styled(Checkbox)`
  max-width: 30px;
  .MuiSvgIcon-root {
    font-size: 15px;
  }
`;

export const ItemTitle = styled('h4')`
  font-weight: 600;
`;
