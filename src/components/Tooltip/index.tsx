import { TooltipProps } from './types';
import * as S from './styles';

export const Tooltip = ({ dataPoint }: TooltipProps) => {
  const { properties } = dataPoint;
  return (
    <S.TooltipContainer x={dataPoint.x} y={dataPoint.y}>
      {Object.entries(properties).map(([key, value]) => (
        <S.TooltipContentColumn key={key}>
          <S.TooltipContentItem>{key}</S.TooltipContentItem>
          <S.TooltipContentItem>{value}</S.TooltipContentItem>
        </S.TooltipContentColumn>
      ))}
    </S.TooltipContainer>
  );
};
