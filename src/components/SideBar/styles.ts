import { Drawer as MUIDrawer, styled } from '@mui/material';
import { Button } from '../Button';

export const DrawerContent = styled('div')`
  display: flex;
  flex-direction: column;
  /*justify-content: center;
  align-items: center;*/
  /*border: 1px solid #000;*/
  height: 100%;
  padding: 10px;
`;

export const Drawer = styled(MUIDrawer)`
  .MuiDrawer-paper {
    border-radius: 8px;
    width: 300px;
    height: 90%;
    background-color: rgba(212, 254, 255, 0.2);
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
