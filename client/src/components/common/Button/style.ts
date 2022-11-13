import styled from 'styled-components';

import { ButtonStyleProps } from './type';

import { COLOR } from '@/styles/color';
import { flexBox } from '@/styles/flexBox';
import { FONT } from '@/styles/font';

// Button Sizes
const large = `
  width: 340px;
  height: 64px;
  border-radius: 20px;
  font: ${FONT.bold_medium};
`;

const medium = `
  width: 240px;
  height: 56px;
  border-radius: 20px;
  font: ${FONT.bold_medium};
`;

const small = `
  width: 120px;
  height: 40px;
  border-radius: 11px;
  font: ${FONT.bold_extra_small};
`;

const xSmall = `
  width: 90px;
  height: 30px;
  border-radius: 11px;
  font: ${FONT.bold_extra_small};
`;

const sizeObj = {
  large,
  medium,
  small,
  xSmall,
};

// Button Background Colors
const primary = `
  color: ${COLOR.white};
  background-color: ${COLOR.primary[200]};

  :disabled {
    background-color: ${COLOR.primary[100]};
    opacity: 0.7;
    cursor: default;
  }

  :not(:disabled):hover {
    background-color: ${COLOR.primary[300]};
  }

  :focus {
    border: 4px solid ${COLOR.primary[100]};
  }
`;

const grey = `
  color: ${COLOR.black};
  border: 1px solid ${COLOR.grey[200]};
  background-color: ${COLOR.grey[100]};
  
  :disabled {
    color: ${COLOR.grey[400]};
    cursor: default;
  }

  :not(:disabled):hover {
    background-color: ${COLOR.grey[200]};
  }

  :focus {
    border: 2px solid ${COLOR.grey[400]};
  }
`;

const black = `
  color: ${COLOR.white};
  border: 1px solid ${COLOR.white};
  background-color: #000;
  transition: background .2s;

  :hover {
    background-color: ${COLOR.black};
  }

  :focus {
    border: 2px solid ${COLOR.grey[500]};
  }
`;

const backgroundColorObj = {
  primary,
  grey,
  black,
};

// Button Text Colors
const primaryText = `
  color: ${COLOR.primary[300]};
`;

const greyText = `
  color: ${COLOR.grey[400]};
`;

const warningText = `
  color: ${COLOR.error[300]};
`;

const textColorObj = {
  primary: primaryText,
  grey: greyText,
  warning: warningText,
};

// Button types
const text = `
font: ${FONT.bold_extra_small};

  :hover {
    text-decoration: underline;
  }
`;

// Button Component
const Button = styled.button<ButtonStyleProps>`
  ${flexBox({})}
  ${({ size }) => size && sizeObj[size]};
  ${({ background }) => background && backgroundColorObj[background]};
  ${({ color }) => color && textColorObj[color]};
  ${({ isText }) => isText && text};
`;

export { Button };
