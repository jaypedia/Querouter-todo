import axios, { AxiosRequestConfig } from 'axios';

import { USER_TOKEN, API_END_POINT } from '@/constants/constants';
/* eslint-disable consistent-return */

type UserAccount = {
  email: string;
  password: string;
};

const axiosConfig: AxiosRequestConfig = {
  baseURL: `${API_END_POINT}/users`,
  timeout: 10000,
};

const loginInstance = axios.create(axiosConfig);

export const createAccount = async (userAccount: UserAccount) => {
  try {
    const response = await loginInstance.post(`/create`, userAccount);
    const { message, token } = response.data;
    return { message, token };
  } catch (error) {
    console.error(error);
  }
};

export const postLogin = async (userAccount: UserAccount) => {
  try {
    const response = await loginInstance.post(`/login`, userAccount);
    const { message, token } = response.data;
    if (response.status === 200) {
      localStorage.setItem(USER_TOKEN, token);
    }
    return { message, token };
  } catch (error) {
    console.error(error);
  }
};
