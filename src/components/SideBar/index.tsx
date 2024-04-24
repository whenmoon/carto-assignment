import { useState } from 'react';
import * as S from './styles';
import { ColorPicker } from 'primereact/colorpicker';

export const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          <ColorPicker
            format="rgb"
            value={{ r: 100, g: 102, b: 241 }}
            onChange={(e) => console.log(e.value)}
            style={{ width: 100, height: 100, zIndex: 19999 }}
          />
        </S.DrawerContent>
      </S.Drawer>
      <S.ToggleButton onClick={toggleSideBar}>
        {isDrawerOpen ? 'Close drawer' : 'Open Draw'}
      </S.ToggleButton>
    </>
  );
};
