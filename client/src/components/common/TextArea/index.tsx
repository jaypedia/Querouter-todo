import { forwardRef, TextareaHTMLAttributes } from 'react';

import * as S from './style';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, defaultValue, onChange, value }, ref) => {
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
  },
);

export default TextArea;
