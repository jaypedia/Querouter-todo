import * as S from './style';

import * as I from '@/assets/icons/themeSwitch';

export const ThemeSwitch = ({ switchTheme, isLight }: any) => {
  return <S.ThemeSwitch onClick={switchTheme}>{isLight ? <I.Moon /> : <I.Sun />}</S.ThemeSwitch>;
};
