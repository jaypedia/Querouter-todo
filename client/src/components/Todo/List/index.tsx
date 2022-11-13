import { useState } from 'react';

import { Detail } from './Detail';
import * as S from './style';

import { getTodoById } from '@/apis/todoApi';
import { Todo } from '@/types/todoType';

export const List = ({ todoList }: Todo[]) => {
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
        {todoList?.map(({ id, title }) => (
          <S.ListItem key={id} onClick={() => handleListItemClick(id)}>
            {title}
          </S.ListItem>
        ))}
      </S.ListItems>
      <Detail id={todoDetail.id} />
    </S.ListContainer>
  );
};
