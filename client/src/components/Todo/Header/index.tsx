import { Form, Link } from 'react-router-dom';

import * as S from './style';

import * as I from '@/assets/icons/headerButton';
import { useLogout } from '@/hooks/useLogout';

export const Header = () => {
  const { logout } = useLogout();

  return (
    <S.HeaderWrapper className="header">
      <Form method="post" style={{ lineHeight: 0 }}>
        <S.HeaderButton type="submit" area-label="Add todo">
          <I.Add />
        </S.HeaderButton>
      </Form>
      <Link to="/">Star Todo</Link>
      <S.HeaderButton type="button" area-label="Logout" onClick={logout}>
        <I.LogOut />
      </S.HeaderButton>
    </S.HeaderWrapper>
  );
};
