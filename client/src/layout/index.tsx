import { Outlet, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { NavBar } from './NavBar';

import { USER_TOKEN_KEY } from '@/constants';
import { TOAST_LOGIN } from '@/constants/toast';

// eslint-disable-next-line consistent-return
export const loader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    toast.warn(TOAST_LOGIN.message.warn, TOAST_LOGIN.option);
    return redirect('/login');
  }
};

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
