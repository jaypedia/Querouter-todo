import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

import { USER_TOKEN } from '@/constants/constants';
import useMovePage from '@/hooks/useMovePage';

export const Layout = () => {
  const [goLogin] = useMovePage('/login');

  useEffect(() => {
    const userToken = localStorage.getItem(USER_TOKEN);
    if (!userToken) {
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      goLogin();
    }
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
