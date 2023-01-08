import { IoMdLogOut, IoMdAddCircleOutline } from 'react-icons/io';
import styled from 'styled-components';

import { COLOR } from '@/styles/color';

const headerButtonStyle = `
display: block;
width: 100%;
height: 100%;
padding: 5px;
transition: 0.2s ease-in;
fill: ${COLOR.grey[200]};
`;

const Add = styled(IoMdAddCircleOutline)`
  ${headerButtonStyle}

  :hover {
    fill: ${COLOR.primary[100]};
  }
`;
const LogOut = styled(IoMdLogOut)`
  ${headerButtonStyle}

  :hover {
    fill: ${COLOR.primary[100]};
  }
`;

export { Add, LogOut };
