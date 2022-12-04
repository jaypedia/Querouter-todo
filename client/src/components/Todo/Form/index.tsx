import { useNavigate } from 'react-router-dom';

import * as S from './style';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import TextArea from '@/components/common/TextArea';
import { FlexEnd } from '@/styles/common';
import { Todo } from '@/types/todoType';

export const Form = ({ editTodoData }: { editTodoData: Todo }) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <S.TodoForm method="post">
      <Input
        name="title"
        placeholder="Title"
        inputStyle="medium"
        title="Title"
        type="text"
        defaultValue={editTodoData.title}
      />
      <TextArea name="content" defaultValue={editTodoData.content} />
      <FlexEnd>
        <Button
          size="small"
          background="grey"
          text="Cancel"
          type="button"
          onClick={handleCancelClick}
        />
        <Button size="small" background="primary" text="Update todo" type="submit" />
      </FlexEnd>
    </S.TodoForm>
  );
};
