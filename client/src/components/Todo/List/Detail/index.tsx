import { toast } from 'react-toastify';

import * as S from './style';

import { deleteTodos } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import { Form } from '@/components/Todo/Form';
import { TOAST_TODO } from '@/constants/toast';
import useBoolean from '@/hooks/useBoolean';
import useMovePage from '@/hooks/useMovePage';
import { useGetTodoById, useRefetchTodo, useRefetchTodoDetail } from '@/queries/todo';
import { FlexEnd, Heading2 } from '@/styles/common';
import { Todo } from '@/types/todoType';
import { timeForToday } from '@/utils/time';

const DetailContent = ({ todoContent }: { todoContent: Todo }) => {
  const { id, title, content, createdAt, updatedAt } = todoContent;
  const [goHome, goEdit] = useMovePage(['/', `/todos/${id}/edit`]);

  const { mutate: mutateTodo } = useRefetchTodo();
  const { mutate: mutateDetail } = useRefetchTodoDetail(id);
  const { booleanState: isEditOpen, setTrue, setFalse } = useBoolean(false);

  const handleEditClick = () => {
    setTrue();
    goEdit();
  };

  const handleDeleteClick = () => {
    toast.success(TOAST_TODO.message.delete, TOAST_TODO.option);
    deleteTodos(id);
    mutateDetail();
    mutateTodo();
    goHome();
  };

  return isEditOpen ? (
    <Form onCancel={setFalse} editTodoData={{ id, title, content }} />
  ) : (
    <>
      <Heading2>{title}</Heading2>
      <FlexEnd>
        <Button size="xSmall" background="primary" text="Edit" onClick={handleEditClick} />
        <Button size="xSmall" background="black" text="Delete" onClick={handleDeleteClick} />
      </FlexEnd>
      <S.TodoContent>{content || '💨 No content.'}</S.TodoContent>
      <S.Time>⏰ Created at: {timeForToday(createdAt)}</S.Time>
      <S.Time>🖍 Updated at: {timeForToday(updatedAt)}</S.Time>
    </>
  );
};

export const Detail = ({ todoId }: { todoId: string }) => {
  const { data: todoContent, isLoading } = useGetTodoById(todoId);

  return (
    <S.DetailContainer>
      {isLoading || !todoContent ? '' : <DetailContent todoContent={todoContent.data} />}
    </S.DetailContainer>
  );
};
