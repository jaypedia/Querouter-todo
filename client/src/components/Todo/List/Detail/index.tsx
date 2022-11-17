import { useParams } from 'react-router-dom';

import { Form } from '../../Form';
import * as S from './style';

import { deleteTodos } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import useBoolean from '@/hooks/useBoolean';
import useMovePage from '@/hooks/useMovePage';
import { useGetTodoById, useRefetchTodo, useRefetchTodoDetail } from '@/queries/todo';
import { FlexEnd, Heading2 } from '@/styles/common';
import { Todo } from '@/types/todoType';

const DetailContent = ({ todoContent }: { todoContent: Todo }) => {
  const { id, title, content } = todoContent;
  const [goHome] = useMovePage('/');

  const { mutate: mutateTodo } = useRefetchTodo();
  const { mutate: mutateDetail } = useRefetchTodoDetail(id);
  const { booleanState: isEditOpen, setTrue, setFalse } = useBoolean(false);

  const handleEditClick = () => {
    setTrue();
  };

  const handleDeleteClick = () => {
    deleteTodos(id);
    mutateDetail();
    mutateTodo();
    goHome();
  };

  return isEditOpen ? (
    <Form formType="edit" onCancel={setFalse} editTodoData={{ id, title, content }} />
  ) : (
    <>
      <Heading2>{title}</Heading2>
      {id && (
        <FlexEnd>
          <Button size="xSmall" background="primary" text="Edit" onClick={handleEditClick} />
          <Button size="xSmall" background="black" text="Delete" onClick={handleDeleteClick} />
        </FlexEnd>
      )}
      <div>{content}</div>
    </>
  );
};

export const Detail = () => {
  const { todoId } = useParams();
  const { data: todoContent, isLoading } = useGetTodoById(todoId);

  return (
    <S.DetailContainer>
      {isLoading || !todoContent ? '' : <DetailContent todoContent={todoContent.data} />}
    </S.DetailContainer>
  );
};
