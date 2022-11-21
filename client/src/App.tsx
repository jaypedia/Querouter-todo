import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { useSwitchTheme } from './hooks/useSwitchTheme';
import { router } from './router';

import { ThemeSwitch } from '@/components/ThemeSwitch';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { getDefaultTheme } from '@/utils/mode';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const queryClient = new QueryClient();
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
