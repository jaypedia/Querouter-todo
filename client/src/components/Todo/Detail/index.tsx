import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Form } from 'react-router-dom';

import * as S from './style';

import { Button } from '@/components/common/Button';
import useMovePage from '@/hooks/useMovePage';
import { DetailContainer, FlexEnd, Heading2 } from '@/styles/common';
import { Todo as TodoType } from '@/types/todoType';

dayjs.extend(relativeTime);

export const Detail = ({ todoContent }: { todoContent: TodoType }) => {
  const { id, title, content, createdAt, updatedAt } = todoContent;
  const [goEdit] = useMovePage([`/todos/${id}/edit`]);

  const handleEditClick = () => {
    goEdit();
  };

  const handleDelete = (event: React.FormEvent) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    const isNotConfirm = !confirm('Are you sure you want to delete this?');
    if (isNotConfirm) {
      event.preventDefault();
    }
  };

  return (
    <DetailContainer>
      <Heading2>{title}</Heading2>
      <FlexEnd>
        <Button size="xSmall" background="primary" text="Edit" onClick={handleEditClick} />
        <Form method="post" action="destroy" onSubmit={handleDelete}>
          <Button size="xSmall" background="black" text="Delete" type="submit" />
        </Form>
      </FlexEnd>
      <S.TodoContent>{content || '💨 No content.'}</S.TodoContent>
      <S.Time>⏰ Created at: {dayjs().to(dayjs(createdAt))}</S.Time>
      <S.Time>🖍 Updated at: {dayjs().to(dayjs(updatedAt))}</S.Time>
    </DetailContainer>
  );
};
