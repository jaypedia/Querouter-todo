import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';
import { FONT } from '@/styles/font';

const DetailContainer = styled.div`
  background: ${({ theme: { color } }) => color.cell.bg.cellBg};
  width: 70%;
  height: 60vh;
  ${flexBox({ direction: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' })}
  border-bottom-right-radius: 10px;
  padding: 20px;
`;

const TodoContent = styled.div`
  margin: 15px 0;
  border: 3px solid ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
  padding: 10px;
  width: 100%;
  border-radius: 10px;
`;

const Time = styled.div`
  font: ${FONT.bold_small};
  margin-top: 5px;
`;

export { DetailContainer, TodoContent, Time };
