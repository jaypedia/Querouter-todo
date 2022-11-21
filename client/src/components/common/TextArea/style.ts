import styled from 'styled-components';

import { largeStyle, inputCommonStyle } from '@/components/common/Input/style';

const TextAreaWrapper = styled.div`
  width: 100%;
  background: ${({ theme: { color } }) => color.inputBg};
  border-radius: 16px;
  overflow: hidden;
`;

const TextArea = styled.textarea`
  ${largeStyle}
  ${inputCommonStyle}
  resize: vertical;
  height: 200px;
`;

export { TextAreaWrapper, TextArea };
