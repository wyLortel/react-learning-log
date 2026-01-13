import { useContext } from 'react';
import { TodoContext, TodoContextAction } from './TodoContext';

export function UseTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo는 투두 프로바이더에서만 사용가능');
  }
  return context;
}

export function UseTodoAction() {
  const context = useContext(TodoContextAction);
  if (!context) {
    throw new Error('useTodo액션는 투두 프로바이더에서만 사용가능');
  }
  return context;
}
