import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useSwitchTheme } from '@/hooks/useSwitchTheme';
import {
  Root,
  SignUp,
  Login,
  Error,
  Edit,
  Todo,
  Default,
  rootLoader,
  loginLoader,
  todoLoader,
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
    errorElement: <Error />,
    loader: rootLoader,
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
        element: <Edit />,
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
      <ReactQueryDevtools initialIsOpen />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ThemeSwitch switchTheme={switchTheme} isLight={isLight} />
        <ToastContainer theme={currentTheme} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
