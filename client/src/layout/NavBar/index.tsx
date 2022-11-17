import * as S from './style';

import { Button } from '@/components/common/Button';
import { USER_TOKEN_KEY } from '@/constants';
import useMovePage from '@/hooks/useMovePage';
import { Heading2 } from '@/styles/common';

export const NavBar = () => {
  const [goLogin] = useMovePage('/login');
  const handleButtonClick = () => {
    localStorage.removeItem(USER_TOKEN_KEY);
    goLogin();
  };

  return (
    <S.NavbarContainer>
      <S.InnerFlex>
        <Heading2>✨ Todo List ✨</Heading2>
        <Button size="small" background="primary" text="Logout" onClick={handleButtonClick} />
      </S.InnerFlex>
    </S.NavbarContainer>
  );
};
