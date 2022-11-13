import * as S from './style';

import { Button } from '@/components/common/Button';
import useMovePage from '@/hooks/useMovePage';

export const Header = () => {
  const [goNewTodo] = useMovePage('/new-todo');

  return (
    <S.HeaderWrapper>
      Nov 13 Sunday
      <Button size="xSmall" background="grey" text="New Todo" onClick={goNewTodo} />
    </S.HeaderWrapper>
  );
};
