import * as S from './style';

import { createTodo } from '@/apis/todoApi';
import { Button } from '@/components/common/Button';
import { useRefetchTodo } from '@/queries/todo';
import { getDate } from '@/utils/date';

export const Header = () => {
  const date = getDate();
  const { mutate } = useRefetchTodo();

  const handleNewTodoClick = async () => {
    await createTodo({ title: 'New Todo', content: '' });
    mutate();
  };

  return (
    <S.HeaderWrapper>
      {date}
      <Button size="xSmall" background="grey" text="New Todo" onClick={handleNewTodoClick} />
    </S.HeaderWrapper>
  );
};
