import React from 'react';

import * as S from './style';

type TextAreaProps = {
  name: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
};

type I = React.ComponentPropsWithRef<'textarea'> & TextAreaProps;

const TextArea: React.FC<I> = React.forwardRef(({ name, defaultValue, onChange, value }, ref) => {
  return (
    <S.TextAreaWrapper>
      <S.TextArea
        id="description"
        name={name}
        placeholder="Today I should do..."
        defaultValue={defaultValue}
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </S.TextAreaWrapper>
  );
});

export default TextArea;
