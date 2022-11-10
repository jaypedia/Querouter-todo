import { useRef, useState } from 'react';

import useInput from '@/hooks/useInput';

export const useLogin = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { value: emailInput, setValue: setEmailInput } = useInput('');
  const { value: passwordInput, setValue: setPasswordInput } = useInput('');

  const isValid = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email || !emailRegex.test(email)) return false;
    if (!password || password.length < 8) return false;
    return true;
  };

  const setButton = () => {
    if (isValid()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    setButton();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    setButton();
  };

  return {
    isButtonDisabled,
    handleEmailChange,
    handlePasswordChange,
    emailInput,
    passwordInput,
    emailRef,
    passwordRef,
  };
};
