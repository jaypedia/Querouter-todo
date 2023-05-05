import type { QueryClient } from '@tanstack/react-query';
import { Outlet, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoadingUI } from './style';

import { createTodo } from '@/apis/todoApi';
import { Header } from '@/components/Todo/Header';
import { List } from '@/components/Todo/List';
import { USER_TOKEN_KEY, INITIAL_TODO } from '@/constants';
import { TOAST_LOGIN } from '@/constants/toast';
import { TodoBox, MainWrapper } from '@/styles/common';

export const rootLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    toast.warn(TOAST_LOGIN.message.warn, TOAST_LOGIN.option);
    return redirect('/login');
  }
  return null;
};

export const rootAction = (queryClient: QueryClient) => async () => {
  const todo = await createTodo(INITIAL_TODO);
  queryClient.invalidateQueries(['todos']);
  return todo;
};

export const Root = () => {
  const navigation = useNavigation();

  return (
    <MainWrapper>
      <TodoBox>
        <Header />
        <List />
        <LoadingUI className={navigation.state === 'loading' ? 'loading' : ''}>
          <Outlet />
        </LoadingUI>
      </TodoBox>
    </MainWrapper>
  );
};
