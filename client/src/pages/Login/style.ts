import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';
import { FONT } from '@/styles/font';

const LoginWrapper = styled.div`
  ${flexBox({ direction: 'column' })}
  width: 340px;
  margin: auto;
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 340px;
  margin-top: 60px;
`;

const SignUpLink = styled(Link)`
  font: ${FONT.bold_small};
  color: ${({ theme: { color } }) => color.text};
  text-align: center;
  display: block;
  font-style: normal;
`;

const LoginForm = styled.form`
  input {
    margin-bottom: 16px;
  }

  button {
    margin: 24px 0;
  }
`;

export { LoginWrapper, LoginBox, SignUpLink, LoginForm };
