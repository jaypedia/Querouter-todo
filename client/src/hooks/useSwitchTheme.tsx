import { DARK, LIGHT, ThemeType } from '@/styles/theme';

export const useSwitchTheme = (
  theme: ThemeType,
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>,
) => {
  const isLight = theme === LIGHT;

  const switchTheme = () => {
    const nextTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(nextTheme);
  };

  return { isLight, switchTheme };
};
