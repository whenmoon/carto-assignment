import { Drawer as MUIDrawer, styled } from '@mui/material';
import { Button } from '../Button';

export const DrawerContent = styled('div')`
  padding: 10px;
`;

export const Drawer = styled(MUIDrawer)`
  .MuiDrawer-paper {
    border-radius: 8px;
    width: 350px;
    height: 90%;
    background-color: rgba(212, 254, 255, 0.2);
  }
`;

export const ToggleButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  z-index: 1;
  width: 150px;
`;
