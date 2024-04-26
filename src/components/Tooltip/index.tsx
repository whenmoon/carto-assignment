import { TooltipProps } from './types';
import * as S from './styles';

export const Tooltip = ({ nodeAttributes }: TooltipProps) => {
  const { properties, x, y } = nodeAttributes;
  return (
    <S.TooltipContainer x={x} y={y}>
      {Object.entries(properties).map(([key, value]) => (
        <S.TooltipContentColumn key={key}>
          <S.TooltipContentItem>{key}</S.TooltipContentItem>
          <S.TooltipContentItem>{value}</S.TooltipContentItem>
        </S.TooltipContentColumn>
      ))}
    </S.TooltipContainer>
  );
};
