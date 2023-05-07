import styled from 'styled-components';

import { FONT } from '@/styles/font';

const TodoContent = styled.div`
  margin: 15px 0;
  border: 3px solid ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  white-space: pre;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 30px;
  }
`;

const Time = styled.div`
  font: ${FONT.bold_small};
  margin-top: 5px;
`;

export { TodoContent, Time };
