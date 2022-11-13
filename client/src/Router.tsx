import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/layout';
import { Home, NotFound, SignUp, Login, NewTodo } from '@/pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/new-todo" element={<NewTodo />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
