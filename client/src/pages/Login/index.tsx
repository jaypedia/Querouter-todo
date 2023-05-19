import { FormEvent, useRef } from 'react';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as S from './style';

import { postLogin } from '@/apis/loginApi';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { USER_TOKEN_KEY } from '@/constants';
import { TOAST_LOGIN } from '@/constants/toast';
import { useLogin } from '@/hooks/useLogin';
import useMovePage from '@/hooks/useMovePage';
import { Heading1 } from '@/styles/common';

interface FormDataType extends EventTarget {
  email?: HTMLInputElement;
  password?: HTMLInputElement;
}

export const loginLoader = () => {
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
  const toastId = useRef(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const formData: FormDataType = e.target;
    if (!formData.email || !formData.password) return;
    const userAccount = { email: formData.email.value, password: formData.password.value };
    const response = await postLogin(userAccount);
    if (response?.token) {
      goHome();
      toast.success(TOAST_LOGIN.message.success, TOAST_LOGIN.option);
    } else if (!toast.isActive(toastId.current)) {
      toastId.current = toast.warn(TOAST_LOGIN.message.fail, TOAST_LOGIN.option);
    }
  };

  return (
    <S.LoginWrapper>
      <Heading1>Star Todo</Heading1>
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
