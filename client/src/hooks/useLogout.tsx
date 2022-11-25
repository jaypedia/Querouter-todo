import { toast } from 'react-toastify';

import { USER_TOKEN_KEY } from '@/constants';
import { TOAST_LOGIN } from '@/constants/toast';
import useMovePage from '@/hooks/useMovePage';

export const useLogout = () => {
  const [goLogin] = useMovePage('/login');

  const logout = () => {
    localStorage.removeItem(USER_TOKEN_KEY);
    toast.success(TOAST_LOGIN.message.logout, TOAST_LOGIN.option);
    goLogin();
  };

  return { logout };
};
