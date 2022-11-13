import { useRef } from 'react';

import * as S from './style';

import { createTodo, updateTodo } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import TextArea from '@/components/common/TextArea';
import useMovePage from '@/hooks/useMovePage';
import { useRefetchTodo, useRefetchTodoDetail } from '@/queries/todo';
import { FlexEnd } from '@/styles/common';
import { Todo } from '@/types/todoType';

type FormProps = {
  formType?: string;
  onCancel?: () => void;
  editTodoData?: Pick<Todo, 'id' | 'title' | 'content'>;
};

export const Form = ({ formType = 'newTodo', onCancel, editTodoData }: FormProps) => {
  const [goHome] = useMovePage('/');
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = useRefetchTodo();
  // TODO: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  const { mutate: mutateDetail } = useRefetchTodoDetail(editTodoData?.id);

  const handleCancelClick = () => {
    if (formType === 'edit' && onCancel) {
      onCancel();
    } else {
      goHome();
    }
  };

  const handleSubmit = async () => {
    if (!titleRef.current || !contentRef.current) return;

    const todoData = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    if (formType === 'edit' && editTodoData && onCancel) {
      await updateTodo({ id: editTodoData.id, ...todoData });
      mutate();
      mutateDetail();
      onCancel();
    } else {
      await createTodo(todoData);
      mutate();
      goHome();
    }
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
        defaultValue={editTodoData?.title}
      />
      <TextArea name="content" ref={contentRef} defaultValue={editTodoData?.content} />
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
          text={formType === 'edit' ? 'Update todo' : 'Create new todo'}
          type="button"
          onClick={handleSubmit}
        />
      </FlexEnd>
    </S.TodoForm>
  );
};
