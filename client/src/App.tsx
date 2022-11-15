import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { useSwitchTheme } from './hooks/useSwitchTheme';
import { Router } from './Router';

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
        <RecoilRoot>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </RecoilRoot>
        <ThemeSwitch switchTheme={switchTheme} isLight={isLight} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
