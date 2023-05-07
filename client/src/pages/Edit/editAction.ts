import type { QueryClient } from '@tanstack/react-query';
import { redirect } from 'react-router-dom';

import { updateTodo } from '@/apis/todoApi';
import { ActionParams } from '@/types/actionParamsType';

export const editAction =
  (queryClient: QueryClient) =>
  async ({ request, params }: ActionParams) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateTodo({ id: params.todoId, ...updates });
    queryClient.invalidateQueries(['todos']);
    queryClient.invalidateQueries(['todo', params.todoId]);
    return redirect(`/todos/${params.todoId}`);
  };
