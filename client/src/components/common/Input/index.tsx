import { forwardRef } from 'react';

import * as S from './style';
import { InputProps } from './type';

export const Input = forwardRef<HTMLInputElement, InputProps>((inputData, ref) => {
  const {
    inputLabel,
    type,
    title,
    placeholder,
    inputStyle,
    hasBorder,
    name,
    defaultValue,
    value,
    onChange,
    maxLength,
    pattern,
    readOnly,
  } = inputData;

  return (
    <S.InputLabel>
      {inputLabel}
      <S.Input
        type={type}
        title={title}
        placeholder={placeholder}
        inputStyle={inputStyle}
        hasBorder={hasBorder}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        ref={ref}
        pattern={pattern}
        autoComplete="off"
        readOnly={readOnly}
      />
    </S.InputLabel>
  );
});
