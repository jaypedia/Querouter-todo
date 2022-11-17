import { useState } from 'react';

import { Detail } from './Detail';
import * as S from './style';

import { getTodoById } from '@/apis/todoApi';
import { useGetTodos } from '@/queries/todo';
import { Todo } from '@/types/todoType';

export const List = () => {
  const { data: todoData, isSuccess } = useGetTodos();

  const [todoDetail, setTodoDetail] = useState({
    id: null,
    title: '',
    content: '',
  });

  const handleListItemClick = async (id: string) => {
    const { data } = await getTodoById(id);
    setTodoDetail(data);
  };

  return (
    <S.ListContainer>
      <S.ListItems>
        {isSuccess
          ? todoData.data.map(({ id, title }: Pick<Todo, 'id' | 'title'>) => (
              <S.ListItem key={id} onClick={() => handleListItemClick(id)}>
                {title}
              </S.ListItem>
            ))
          : null}
      </S.ListItems>
      <Detail id={todoDetail.id} />
    </S.ListContainer>
  );
};
