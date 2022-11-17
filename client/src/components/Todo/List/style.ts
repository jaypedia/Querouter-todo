import styled from 'styled-components';

import { COLOR } from '@/styles/color';
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

  a.active li {
    background-color: ${COLOR.primary[300]};
    color: white;
  }

  a:hover:not(.active) li {
    background-color: ${({ theme: { color } }) => color.hover};
  }
`;

const ListItem = styled.li`
  padding: 10px;
  font: ${FONT.bold_medium};
  border-radius: 10px;
  margin-bottom: 5px;
`;

const DetailContainer = styled.div`
  background: ${({ theme: { color } }) => color.cell.bg.cellBg};
  height: 60vh;
  display: flex;
  padding: 20px;
`;

export { ListContainer, ListItems, ListItem, DetailContainer };
