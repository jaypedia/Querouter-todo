import { useLoaderData } from 'react-router-dom';

import { Form } from '@/components/Todo/Form';
import { DetailContainer } from '@/styles/common';
import { TodoLoaderData } from '@/types/todoType';

export const Edit = () => {
  const todoContent = useLoaderData() as TodoLoaderData;

  return (
    <DetailContainer>
      <Form editTodoData={todoContent.data} />
    </DetailContainer>
  );
};
