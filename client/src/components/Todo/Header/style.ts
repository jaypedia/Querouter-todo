import styled from 'styled-components';

import { COLOR } from '@/styles/color';

const HeaderWrapper = styled.header`
  height: 50px;
  width: 100%;
  background-color: ${COLOR.primary[200]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 20px;
  color: ${COLOR.white};
  font-weight: 700;
`;

export { HeaderWrapper };
