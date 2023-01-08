import axios, { AxiosRequestConfig } from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from '@/constants';
import { Todo } from '@/types/todoType';
/* eslint-disable consistent-return */

const axiosConfig: AxiosRequestConfig = {
  baseURL: `${API_END_POINT}/todos`,
  timeout: 10000,
  headers: { Authorization: localStorage.getItem(USER_TOKEN_KEY) || '' },
};

const todoInstance = axios.create(axiosConfig);

export const getTodos = async () => {
  try {
    const response = await todoInstance.get('');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodoById = async (id: string) => {
  try {
    const response = await todoInstance.get(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (newTodo: Pick<Todo, 'title' | 'content'>) => {
  try {
    const response = await todoInstance.post('', newTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async ({
  id,
  title,
  content,
}: Pick<Todo, 'id' | 'title' | 'content'>) => {
  try {
    const response = await todoInstance.put(id, { title, content });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodos = async (id: string) => {
  try {
    const response = await todoInstance.delete(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
