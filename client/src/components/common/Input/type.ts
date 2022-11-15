import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  defaultValue?: string;
  inputStyle: 'large' | 'medium' | 'small';
  hasBorder?: boolean;
  inputLabel?: string;
}

export type InputStyleProps = Pick<InputProps, 'inputStyle' | 'hasBorder' | 'inputLabel'>;
