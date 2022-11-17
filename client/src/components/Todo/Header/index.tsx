import * as S from './style';

import { Button } from '@/components/common/Button';
import useMovePage from '@/hooks/useMovePage';
import { getDate } from '@/utils/date';

export const Header = () => {
  const [goNewTodo] = useMovePage('/new-todo');
  const date = getDate();

  return (
    <S.HeaderWrapper>
      {date}
      <Button size="xSmall" background="grey" text="New Todo" onClick={goNewTodo} />
    </S.HeaderWrapper>
  );
};
