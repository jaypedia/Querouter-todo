import styled from 'styled-components';

import { InnerContainer } from '@/styles/common';
import { flexBox } from '@/styles/flexBox';

const NavbarContainer = styled.div`
  background-color: ${({ theme: { color } }) => color.headerBg};
  padding: 15px 0;
`;

const InnerFlex = styled(InnerContainer)`
  ${flexBox({ justifyContent: 'space-between' })}
`;

export { NavbarContainer, InnerFlex };
