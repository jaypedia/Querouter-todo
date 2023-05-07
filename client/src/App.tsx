import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { destroyAction } from './components/Todo/Detail/destoyAction';

import { ThemeSwitch } from '@/components/common/ThemeSwitch';
import { useSwitchTheme } from '@/hooks/useSwitchTheme';
import {
  Root,
  SignUp,
  Login,
  ErrorPage,
  Edit,
  Todo,
  Default,
  rootLoader,
  rootAction,
  loginLoader,
  todoLoader,
  editAction,
} from '@/pages';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { getDefaultTheme } from '@/utils/mode';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction(queryClient),
    children: [
      {
        index: true,
        element: <Default />,
      },
      {
        path: 'todos/:todoId',
        loader: todoLoader(queryClient),
        element: <Todo />,
      },
      {
        path: 'todos/:todoId/edit',
        loader: todoLoader(queryClient),
        action: editAction(queryClient),
        element: <Edit />,
      },
      {
        path: 'todos/:todoId/destroy',
        action: destroyAction(queryClient),
      },
    ],
  },
  {
    path: 'login',
    loader: loginLoader,
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
]);

export const App = () => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const { isLight, switchTheme, currentTheme } = useSwitchTheme(theme, setTheme);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ThemeSwitch switchTheme={switchTheme} isLight={isLight} />
        <ToastContainer theme={currentTheme} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
