import * as S from './styles';
import { ButtonProps } from './types';

export const Button = ({ children, onClick, ...restProps }: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      variant="outlined"
      size="small"
      sx={{ textTransform: 'none' }}
      {...restProps}
    >
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
};
