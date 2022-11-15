import styled, { css } from 'styled-components';

import { InputStyleProps } from '@/components/common/Input/type';
import { COLOR } from '@/styles/color';
import { FONT } from '@/styles/font';

export const largeStyle = `
  padding: 18px 24px;
  border-radius:16px;
`;

const mediumStyle = `
  padding: 14px 24px;
  border-radius:14px;
`;

const smallStyle = `
  padding: 0 24px;
  border-radius:11px;
`;

const inputStyleObj = {
  large: largeStyle,
  medium: mediumStyle,
  small: smallStyle,
};

export const inputCommonStyle = css`
  width: 100%;
  font: ${FONT.regular_medium};
  color: ${({ theme: { color } }) => color.text};
  background: ${({ theme: { color } }) => color.inputBg};
  transition: 0.2s;
  ::placeholder {
    color: ${COLOR.grey[300]};
  }
  :focus {
    border: 1px solid ${({ theme: { color } }) => color.text};
    background: ${({ theme: { color } }) => color.bg};
  }
`;

const Input = styled.input<InputStyleProps>`
  ${({ inputStyle }) => inputStyleObj[inputStyle]};
  ${inputCommonStyle};
  border: ${({ hasBorder, theme: { color } }) => hasBorder && `1px solid ${color.line}`};
`;

const InputLabel = styled.label`
  width: inherit;
  font: ${FONT.bold_extra_small};

  & > :last-child {
    margin-top: 5px;
  }
`;

export { Input, InputLabel };
