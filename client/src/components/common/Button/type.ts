import { ButtonHTMLAttributes } from 'react';

export interface ButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small' | 'xSmall';
  color?: 'primary' | 'grey' | 'warning';
  background?: 'primary' | 'grey' | 'black';
  onClick?: () => void;
  isText?: boolean;
}

export interface ButtonProps extends ButtonStyleProps {
  text: string;
}
