export type ButtonStyleProps = {
  size?: 'large' | 'medium' | 'small' | 'xSmall';
  color?: 'primary' | 'grey' | 'warning';
  background?: 'primary' | 'grey' | 'black';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  isText?: boolean;
};

export type ButtonProps = ButtonStyleProps & {
  text: string;
};
