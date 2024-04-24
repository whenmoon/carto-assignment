import { Drawer as MUIDrawer, styled } from '@mui/material';
import { Button } from '../Button';

export const DrawerContent = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  height: 100%;
`;

export const Drawer = styled(MUIDrawer)`
  .MuiDrawer-paper {
    border-radius: 15px;
    border: 1px solid #000;
    width: 200px;
    height: 80%;
  }
`;

export const ToggleButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  align-self: flex-end;
  z-index: 10000;
`;
