import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getTodoById, getTodos } from '@/apis/todoApi';

export const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};

export const useGetTodoById = (id: string) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => getTodoById(id),
  });
};

export const useRefetchTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(getTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};

export const useRefetchTodoDetail = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => getTodoById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('todo');
    },
  });
};
