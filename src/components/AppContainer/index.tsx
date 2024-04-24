import { GeoLocationLayout } from '../GeoLocationLayout';
import { SideBar } from '../SideBar';
import * as S from './styles';

export const AppContainer = () => {
  return (
    <S.AppContainer>
      <SideBar />
      <GeoLocationLayout />
    </S.AppContainer>
  );
};
