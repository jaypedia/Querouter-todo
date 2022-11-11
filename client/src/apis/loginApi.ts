import axios from 'axios';

import { API_END_POINT, USER_TOKEN } from '@/constants/constants';

type UserAccount = {
  email: string;
  password: string;
};

export const createAccount = async (userAccount: UserAccount) => {
  try {
    const response = await axios.post(`${API_END_POINT}/users/create`, userAccount);
    const { message, token } = response.data;
    return { message, token };
  } catch (error) {
    console.error(error);
    return { message: error?.response.data.details };
  }
};

export const postLogin = async (userAccount: UserAccount) => {
  try {
    const response = await axios.post(`${API_END_POINT}/users/login`, userAccount);
    const { message, token } = response.data;
    if (response.status === 200) {
      localStorage.setItem(USER_TOKEN, token);
    }
    return { message, token };
  } catch (error) {
    console.error(error);
    return { message: error?.response.data.details };
  }
};
