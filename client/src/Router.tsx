import { createBrowserRouter } from 'react-router-dom';

import { Layout, loader as TodoLoader } from '@/layout';
import { Home, SignUp, Login, Error, loader as LoginLoader } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    loader: TodoLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'todos/:todoId',
        element: <Home />,
      },
      {
        path: 'todos/:todoId/edit',
        element: <Home />,
      },
    ],
  },
  {
    path: 'login',
    loader: LoginLoader,
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
]);
