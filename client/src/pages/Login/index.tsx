import { FormEvent } from 'react';
import { redirect } from 'react-router-dom';

import { useLogin } from './Login.hook';
import * as S from './style';

import { postLogin } from '@/apis/loginApi';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { USER_TOKEN_KEY } from '@/constants';
import useMovePage from '@/hooks/useMovePage';
import { Heading1 } from '@/styles/common';

interface FormDataType extends EventTarget {
  email?: HTMLInputElement;
  password?: HTMLInputElement;
}

// eslint-disable-next-line consistent-return
export const loader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (userToken) {
    return redirect('/');
  }
};

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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const formData: FormDataType = e.target;
    if (!formData.email || !formData.password) return;
    const userAccount = { email: formData.email.value, password: formData.password.value };
    const response = await postLogin(userAccount);
    if (response && response.token) {
      goHome();
    } else {
      alert('유효하지 않은 이메일이거나 비밀번호입니다. 다시 확인해주세요.');
    }
  };

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
