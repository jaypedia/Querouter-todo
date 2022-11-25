import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';
import { FONT } from '@/styles/font';

const DetailContainer = styled.div`
  background: ${({ theme: { color } }) => color.cell.bg.cellBg};
  height: 60vh;
  ${flexBox({ direction: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' })}
  border-bottom-right-radius: 10px;
  padding: 20px;
  grid-area: todo;
  z-index: 999;
`;

const TodoContent = styled.div`
  margin: 15px 0;
  border: 3px solid ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  white-space: pre;
`;

const Time = styled.div`
  font: ${FONT.bold_small};
  margin-top: 5px;
`;

export { DetailContainer, TodoContent, Time };
