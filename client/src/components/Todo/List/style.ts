import styled from 'styled-components';

import { COLOR } from '@/styles/color';
import { FONT } from '@/styles/font';

const ListContainer = styled.nav`
  max-width: 320px;
  height: 65vh;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
  display: flex;
  grid-area: list;
`;

const ListItems = styled.ul`
  width: 100%;
  padding: 20px;
  overflow-y: scroll;

  a.active li {
    background-color: ${COLOR.primary[300]};
    color: white;
  }

  a.pending li {
    background-color: ${COLOR.primary[200]};
    color: white;
  }

  a:hover:not(.active) li {
    background-color: ${({ theme: { color } }) => color.hover};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme: { color } }) => color.cell.bg.cellHeaderBg};
  }
`;

const ListItem = styled.li`
  padding: 10px;
  font: ${FONT.bold_medium};
  border-radius: 10px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { ListContainer, ListItems, ListItem };
