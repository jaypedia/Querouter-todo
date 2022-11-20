import { useState } from 'react';

import { DARK, LIGHT, ThemeType } from '@/styles/theme';

export const useSwitchTheme = (
  theme: ThemeType,
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>,
) => {
  const isLight = theme === LIGHT;
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>(isLight ? 'light' : 'dark');

  const switchTheme = () => {
    const nextTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(nextTheme);
    const themeString = nextTheme === LIGHT ? 'light' : 'dark';
    setCurrentTheme(themeString);
  };

  return { isLight, switchTheme, currentTheme };
};
