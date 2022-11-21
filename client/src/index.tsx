import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import { API_END_POINT } from '@/constants';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
axios.defaults.baseURL = API_END_POINT;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
