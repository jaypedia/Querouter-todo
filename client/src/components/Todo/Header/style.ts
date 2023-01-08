import styled from 'styled-components';

import { COLOR } from '@/styles/color';

const HeaderWrapper = styled.header`
  height: 50px;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.headerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 20px;
  color: ${COLOR.white};
  font-weight: 700;
  grid-area: header;
`;

const HeaderButton = styled.button`
  background: ${COLOR.grey[100]};
  box-shadow: 0px 0px 5px rgb(0 0 0 / 30%);
  transition: 0.2s ease-in;
  border-radius: 50%;

  :hover {
    background: ${({ theme }) => theme.color.headerBg};
  }
`;

export { HeaderWrapper, HeaderButton };
