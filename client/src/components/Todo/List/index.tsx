import { NavLink } from 'react-router-dom';

import { Detail } from './Detail';
import * as S from './style';

import { useGetTodos } from '@/queries/todo';
import { Todo } from '@/types/todoType';

export const List = () => {
  const { data: todoData, isSuccess } = useGetTodos();

  return (
    <S.ListContainer>
      <S.ListItems>
        {isSuccess
          ? todoData.data.map(({ id, title }: Pick<Todo, 'id' | 'title'>) => (
              <NavLink
                key={id}
                to={`/todos/${id}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <S.ListItem>{title}</S.ListItem>
              </NavLink>
            ))
          : null}
      </S.ListItems>
      <Detail />
    </S.ListContainer>
  );
};
