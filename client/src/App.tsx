import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useSwitchTheme } from './hooks/useSwitchTheme';
import { router } from './router';

import { ThemeSwitch } from '@/components/ThemeSwitch';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { getDefaultTheme } from '@/utils/mode';

export const App = () => {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState(getDefaultTheme());
  const { isLight, switchTheme } = useSwitchTheme(theme, setTheme);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ThemeSwitch switchTheme={switchTheme} isLight={isLight} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
