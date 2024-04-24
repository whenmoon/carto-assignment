import { MapsLayout } from '../MapsLayout';
import { SideBar } from '../SideBar';
import * as S from './styles';

export const AppContainer = () => {
  return (
    <S.AppContainer>
      <SideBar />
      <MapsLayout />
    </S.AppContainer>
  );
};