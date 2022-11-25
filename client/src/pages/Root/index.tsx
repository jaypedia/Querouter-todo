import { Outlet, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Header } from '@/components/Todo/Header';
import { List } from '@/components/Todo/List';
import { USER_TOKEN_KEY } from '@/constants';
import { TOAST_LOGIN } from '@/constants/toast';
import { TodoBox, MainWrapper } from '@/styles/common';

export const rootLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    toast.warn(TOAST_LOGIN.message.warn, TOAST_LOGIN.option);
    return redirect('/login');
  }
};

export const Root = () => {
  return (
    <MainWrapper>
      <TodoBox>
        <Header />
        <List />
        <Outlet />
      </TodoBox>
    </MainWrapper>
  );
};
