import { Form } from '@/components/Todo/Form';
import { InnerContainer, MainWrapper } from '@/styles/common';

export const NewTodo = () => {
  return (
    <MainWrapper>
      <InnerContainer>
        <Form />
      </InnerContainer>
    </MainWrapper>
  );
};
