import type { QueryClient } from '@tanstack/react-query';

import { todoDetailQuery } from '@/queries/todo';
import { ActionParams } from '@/types/actionParamsType';

export const todoLoader =
  (queryClient: QueryClient) =>
  async ({ params }: ActionParams) => {
    const query = todoDetailQuery(params.todoId);
    return queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query));
  };
