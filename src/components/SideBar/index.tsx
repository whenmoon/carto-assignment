import { useState } from 'react';
import * as S from './styles';
import { LayerEditor } from '../LayerEditor';
import {
  RETAIL_STORES_LAYER_ID,
  SOCIODEMOGRAPHIC_LAYER_ID,
} from '../../contants';

export const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleSideBar = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <S.Drawer
        open={isDrawerOpen}
        onClose={toggleSideBar}
        hideBackdrop
        transitionDuration={500}
        variant="persistent"
      >
        <S.DrawerContent>
          <LayerEditor
            layers={[
              { title: 'Retail Stores', id: RETAIL_STORES_LAYER_ID },
              { title: 'Sociodemographics', id: SOCIODEMOGRAPHIC_LAYER_ID },
            ]}
          />
        </S.DrawerContent>
      </S.Drawer>
      <S.ToggleButton onClick={toggleSideBar}>
        {isDrawerOpen ? 'Close Editor' : 'Open Editor'}
      </S.ToggleButton>
    </>
  );
};
