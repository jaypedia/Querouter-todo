import { Form } from '../../Form';
import * as S from './style';

import { deleteTodos } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import useBoolean from '@/hooks/useBoolean';
import { useGetTodoById, useRefetchTodo, useRefetchTodoDetail } from '@/queries/todo';
import { FlexEnd, Heading2 } from '@/styles/common';

const DetailContent = ({ detailTodo }) => {
  const { data } = detailTodo;
  const { id, title, content } = data;

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

export const Detail = ({ id }) => {
  const { data, isLoading } = useGetTodoById(id);

  return (
    <S.DetailContainer>
      {isLoading || !data ? '' : <DetailContent detailTodo={data} />}
    </S.DetailContainer>
  );
};
