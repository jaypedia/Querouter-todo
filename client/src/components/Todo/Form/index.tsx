import { useRef } from 'react';

import * as S from './style';

import { updateTodo } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import TextArea from '@/components/common/TextArea';
import { useRefetchTodo, useRefetchTodoDetail } from '@/queries/todo';
import { FlexEnd } from '@/styles/common';
import { Todo } from '@/types/todoType';

type FormProps = {
  onCancel: () => void;
  editTodoData: Pick<Todo, 'id' | 'title' | 'content'>;
};

export const Form = ({ onCancel, editTodoData }: FormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = useRefetchTodo();
  const todoId = editTodoData.id;
  const { mutate: mutateDetail } = useRefetchTodoDetail(todoId);

  const handleCancelClick = () => {
    onCancel();
  };

  const handleSubmit = async () => {
    if (!titleRef.current || !contentRef.current) return;

    const todoData = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    await updateTodo({ id: todoId, ...todoData });
    mutate();
    mutateDetail();
    onCancel();
  };

  return (
    <S.TodoForm>
      <Input
        name="title"
        placeholder="Title"
        inputStyle="medium"
        title="Title"
        type="text"
        ref={titleRef}
        defaultValue={editTodoData.title}
      />
      <TextArea name="content" ref={contentRef} defaultValue={editTodoData.content} />
      <FlexEnd>
        <Button
          size="small"
          background="grey"
          text="Cancel"
          type="button"
          onClick={handleCancelClick}
        />
        <Button
          size="small"
          background="primary"
          text="Update todo"
          type="button"
          onClick={handleSubmit}
        />
      </FlexEnd>
    </S.TodoForm>
  );
};
