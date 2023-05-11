import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Detail } from '@/components/Todo/Detail';
import { todoDetailQuery } from '@/queries/todo';

export const Todo = () => {
  const params = useParams();
  const { data: todoContent } = useQuery(todoDetailQuery(params.todoId || ''));

  return <Detail todoContent={todoContent?.data} />;
};
