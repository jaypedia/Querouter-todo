import { Outlet, redirect } from 'react-router-dom';

import { NavBar } from './NavBar';

import { USER_TOKEN_KEY } from '@/constants';

// eslint-disable-next-line consistent-return
export const loader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    alert('Need Login!');
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
