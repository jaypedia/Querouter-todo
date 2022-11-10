import { useLogin } from './Login.hook';
import * as S from './style';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
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

  const handleLogin = () => {
    return null;
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
