import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getTodoById, getTodos } from '@/apis/todoApi';

export const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};

export const todoDetailQuery = (id: string) => ({
  queryKey: ['todo', id],
  queryFn: async () => {
    const todo = await getTodoById(id);
    if (!todo) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }
    return todo;
  },
});

export const useGetTodoDetail = (id: string) => {
  return useQuery(todoDetailQuery(id));
};

export const useRefetchTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(getTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export const useRefetchTodoDetail = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => getTodoById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });
};
