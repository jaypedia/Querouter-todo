import * as S from './style';

import * as I from '@/assets/icons/themeSwitch';

type ThemeSwitchProps = {
  switchTheme: () => void;
  isLight: boolean;
};

export const ThemeSwitch = ({ switchTheme, isLight }: ThemeSwitchProps) => {
  return <S.ThemeSwitch onClick={switchTheme}>{isLight ? <I.Moon /> : <I.Sun />}</S.ThemeSwitch>;
};
