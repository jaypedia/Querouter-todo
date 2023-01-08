import { useRef, useState } from 'react';

import useInput from '@/hooks/useInput';

export const useLogin = (isCreateAccount = false) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { value: emailInput, setValue: setEmailInput } = useInput('');
  const { value: passwordInput, setValue: setPasswordInput } = useInput('');
  const { value: passwordConfirmInput, setValue: setPasswordConfirmInput } = useInput('');

  const isValidInput = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email || !emailRegex.test(email)) return false;
    if (!password || password.length < 8) return false;
    if (isCreateAccount && password !== passwordConfirm) return false;
    return true;
  };

  const checkInputAndSetButton = () => {
    const isValid = isValidInput();
    setIsButtonDisabled(!isValid);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    checkInputAndSetButton();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    checkInputAndSetButton();
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmInput(e.target.value);
    checkInputAndSetButton();
  };

  return {
    isButtonDisabled,
    handleEmailChange,
    handlePasswordChange,
    emailInput,
    passwordInput,
    emailRef,
    passwordRef,
    passwordConfirmRef,
    passwordConfirmInput,
    handlePasswordConfirmChange,
  };
};
