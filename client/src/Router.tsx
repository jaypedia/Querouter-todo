import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/layout';
import { Home, NotFound } from '@/pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
