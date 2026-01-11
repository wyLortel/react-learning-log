import TodoListEmpty from './TodoListEmpty';
import TodoListItem from './TodoListItem';

export default function ToDoLIst() {
  return (
    <>
      <ul className="todo__list">
        {/* <!-- 할 일 목록이 없을 때 --> */}
        <TodoListEmpty />
        {/* <!-- 할 일 목록이 있을 때 --> */}

        <TodoListItem />
      </ul>
    </>
  );
}
