import { Form } from 'react-router-dom';
import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const TodoForm = styled(Form)`
  ${flexBox({ direction: 'column' })}
  gap: 10px;
  width: 100%;
`;

export { TodoForm };
