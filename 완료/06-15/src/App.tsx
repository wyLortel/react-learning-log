import { useReducer } from 'react';
import { reducer } from './reducer/counterReducer';

//리듀서 함수는 리듀서 훅으로 결정되는 상태를 최종적으로 결정할때 사용하는 중요한함수
//매개변수로 현재 상태값과 액션이라 불리는 데이터값을 받음
//리듀서 함수에서 리턴되는 값이 상태값이 됨

export default function App() {
  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => countDispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => countDispatch({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => countDispatch({ type: 'RESET' })}>리셋</button>
    </>
  );
}
