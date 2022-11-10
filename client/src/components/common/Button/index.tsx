import * as S from './style';
import { ButtonProps } from './type';

export const Button = ({
  size,
  color,
  background,
  type,
  onClick,
  text,
  disabled,
  isText,
}: ButtonProps) => {
  return (
    <S.Button
      size={size}
      background={background}
      color={color}
      type={type}
      onClick={onClick}
      disabled={disabled}
      isText={isText}
    >
      {text}
    </S.Button>
  );
};
