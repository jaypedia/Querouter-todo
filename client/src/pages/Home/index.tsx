import { Todo } from '@/components/Todo';
import { useGetTodos } from '@/queries/todo';
import { InnerContainer, MainWrapper } from '@/styles/common';

export const Home = () => {
  const { data, isLoading } = useGetTodos();

  return (
    <MainWrapper>
      <InnerContainer>{isLoading ? 'Loading...' : <Todo todoList={data} />}</InnerContainer>
    </MainWrapper>
  );
};
