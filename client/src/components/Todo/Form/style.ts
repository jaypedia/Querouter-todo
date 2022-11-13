import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const TodoForm = styled.form`
  ${flexBox({ direction: 'column' })}
  gap: 10px;
  width: 100%;
`;

export { TodoForm };
