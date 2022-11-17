import { Todo } from '@/components/Todo';
import { InnerContainer, MainWrapper } from '@/styles/common';

export const Home = () => {
  return (
    <MainWrapper>
      <InnerContainer>
        <Todo />
      </InnerContainer>
    </MainWrapper>
  );
};
