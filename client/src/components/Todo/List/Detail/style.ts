import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const DetailContainer = styled.div`
  background: ${({ theme: { color } }) => color.cell.bg.cellBg};
  width: 70%;
  height: 60vh;
  ${flexBox({ direction: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' })}
  border-bottom-right-radius: 10px;
  padding: 20px;
`;

export { DetailContainer };
