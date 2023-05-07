import type { QueryClient } from '@tanstack/react-query';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteTodos } from '@/apis/todoApi';
import { TOAST_TODO } from '@/constants/toast';
import { ActionParams } from '@/types/actionParamsType';

export const destroyAction =
  (queryClient: QueryClient) =>
  async ({ params }: ActionParams) => {
    const id = params.todoId;
    await deleteTodos(id);
    queryClient.invalidateQueries({ queryKey: ['todos'] });
    toast.success(TOAST_TODO.message.delete, TOAST_TODO.option);
    return redirect('/');
  };
