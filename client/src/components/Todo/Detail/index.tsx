import { toast } from 'react-toastify';

import * as S from './style';

import { deleteTodos } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import { TOAST_TODO } from '@/constants/toast';
import useMovePage from '@/hooks/useMovePage';
import { useRefetchTodo, useRefetchTodoDetail } from '@/queries/todo';
import { DetailContainer, FlexEnd, Heading2 } from '@/styles/common';
import { Todo as TodoType } from '@/types/todoType';
import { timeForToday } from '@/utils/time';

export const Detail = ({ todoContent }: { todoContent: TodoType }) => {
  const { id, title, content, createdAt, updatedAt } = todoContent;
  const [goHome, goEdit] = useMovePage(['/', `/todos/${id}/edit`]);

  const { mutate: mutateTodo } = useRefetchTodo();
  const { mutate: mutateDetail } = useRefetchTodoDetail(id);

  const handleEditClick = () => {
    goEdit();
  };

  const handleDeleteClick = () => {
    const isConfirm = window.confirm('Are you sure you want to delete this?');
    if (!isConfirm) return;

    toast.success(TOAST_TODO.message.delete, TOAST_TODO.option);
    deleteTodos(id);
    mutateDetail();
    mutateTodo();
    goHome();
  };

  return (
    <DetailContainer>
      <Heading2>{title}</Heading2>
      <FlexEnd>
        <Button size="xSmall" background="primary" text="Edit" onClick={handleEditClick} />
        <Button size="xSmall" background="black" text="Delete" onClick={handleDeleteClick} />
      </FlexEnd>
      <S.TodoContent>{content || '💨 No content.'}</S.TodoContent>
      <S.Time>⏰ Created at: {timeForToday(createdAt)}</S.Time>
      <S.Time>🖍 Updated at: {timeForToday(updatedAt)}</S.Time>
    </DetailContainer>
  );
};
