import styled from 'styled-components';

import { FONT } from '@/styles/font';

const ListContainer = styled.div`
  width: 100%;
  height: 60vh;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
  display: flex;
`;

const ListItems = styled.div`
  width: 30%;
  padding: 20px;
  overflow-y: scroll;
`;

const ListItem = styled.div`
  padding: 10px;
  font: ${FONT.bold_medium};
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`;

const DetailContainer = styled.div`
  background: ${({ theme: { color } }) => color.cell.bg.cellBg};
  height: 60vh;
  display: flex;
  padding: 20px;
`;

export { ListContainer, ListItems, ListItem, DetailContainer };
