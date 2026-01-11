import { useState } from 'react';
import ToDoEditor from './ToDoEditor';
import TodoHeader from './TodoHeader';
import ToDoLIst from './ToDoLIst';

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };
  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록 */}
        <ToDoEditor addTodo={addTodo} />
        {/* <!-- 할 일 목록 --> */}
        <ToDoLIst />
      </div>
    </>
  );
}
