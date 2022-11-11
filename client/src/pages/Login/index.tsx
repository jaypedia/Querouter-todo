import { useEffect } from 'react';

import { useLogin } from './Login.hook';
import * as S from './style';

import { postLogin } from '@/apis/loginApi';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { USER_TOKEN } from '@/constants/constants';
import useMovePage from '@/hooks/useMovePage';
import { Heading1 } from '@/styles/common';

export const Login = () => {
  const {
    isButtonDisabled,
    handleEmailChange,
    handlePasswordChange,
    emailInput,
    emailRef,
    passwordRef,
    passwordInput,
  } = useLogin();
  const [goHome] = useMovePage('/');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = e.target;
    const userAccount = { email: formData.email.value, password: formData.password.value };
    const response = await postLogin(userAccount);
    if (response.token) {
      goHome();
    } else {
      alert(response.message);
    }
  };

  useEffect(() => {
    const userToken = localStorage.getItem(USER_TOKEN);
    if (userToken) {
      goHome();
    }
  });

  return (
    <S.LoginWrapper>
      <Heading1>✨ Todo List ✨</Heading1>
      <S.LoginBox>
        <S.LoginForm onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Your Email"
            title="User Email"
            inputStyle="large"
            name="email"
            onChange={handleEmailChange}
            value={emailInput}
            ref={emailRef}
          />
          <Input
            type="password"
            placeholder="Password"
            title="Password"
            inputStyle="large"
            name="password"
            onChange={handlePasswordChange}
            value={passwordInput}
            ref={passwordRef}
          />
          <Button
            size="large"
            type="submit"
            background="primary"
            text="Login"
            disabled={isButtonDisabled}
          />
        </S.LoginForm>
        <S.SignUpLink to="/sign-up">New user? Sign up!</S.SignUpLink>
      </S.LoginBox>
    </S.LoginWrapper>
  );
};
