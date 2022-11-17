import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/layout';
import { Home, SignUp, Login, NewTodo, Error } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':todoId',
        element: <Home />,
      },
      {
        path: 'new-todo',
        element: <NewTodo />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
]);
