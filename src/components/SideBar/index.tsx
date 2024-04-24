import { useState } from 'react';
import * as S from './styles';

export const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  console.log('isDrawerOpen', isDrawerOpen);

  const toggleSideBar = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      {!isDrawerOpen && (
        <S.ToggleButton onClick={toggleSideBar}>Open drawer</S.ToggleButton>
      )}
      <S.Drawer
        open={isDrawerOpen}
        onClose={toggleSideBar}
        hideBackdrop
        transitionDuration={500}
      >
        <S.DrawerContent>
          {/*{DrawerList}*/}
          Test Text
          <S.ToggleButton onClick={toggleSideBar}>Close drawer</S.ToggleButton>
        </S.DrawerContent>
      </S.Drawer>
    </>
  );
};
