import React from 'react';

import { createAccount } from '@/apis/loginApi';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { useLogin } from '@/hooks/useLogin';
import useMovePage from '@/hooks/useMovePage';
import * as S from '@/pages/Login/style';
import { Heading1, Heading4 } from '@/styles/common';

export const SignUp = () => {
  const [goLogin] = useMovePage('/login');

  const handleCancelClick = () => {
    goLogin();
  };

  const {
    isButtonDisabled,
    handleEmailChange,
    handlePasswordChange,
    emailInput,
    emailRef,
    passwordRef,
    passwordInput,
    handlePasswordConfirmChange,
    passwordConfirmInput,
    passwordConfirmRef,
  } = useLogin(true);

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = e.target;
    const userAccount = { email: formData.email.value, password: formData.password.value };
    await createAccount(userAccount);
    alert(`Now you can log in with your account.`);
    goLogin();
  };

  return (
    <S.LoginWrapper>
      <Heading1>Star Todo</Heading1>
      <Heading4>Create your Account</Heading4>
      <S.LoginForm onSubmit={handleCreateAccount}>
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
          placeholder="Your Password"
          title="Password"
          inputStyle="large"
          name="password"
          onChange={handlePasswordChange}
          value={passwordInput}
          ref={passwordRef}
        />
        <Input
          type="password"
          placeholder="Password Confirm"
          title="Password Confirm"
          inputStyle="large"
          name="password confirm"
          onChange={handlePasswordConfirmChange}
          value={passwordConfirmInput}
          ref={passwordConfirmRef}
        />
        <Button
          size="large"
          type="submit"
          background="primary"
          text="Create Account"
          disabled={isButtonDisabled}
        />
      </S.LoginForm>
      <Button isText text="Cancel" color="grey" onClick={handleCancelClick} />
    </S.LoginWrapper>
  );
};
