import { Header } from './Header';
import { List } from './List';

export const Todo = ({ todoList }) => {
  const list = todoList.data;

  return (
    <>
      <Header />
      <List todoList={list} />
    </>
  );
};
