import { useDispatch } from 'react-redux';
import { decrement } from '../store/features/counter/counterSlice';

export default function CountButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch({ type: 'counterSlice/reset' })}>
        리셋
      </button>
      <button onClick={() => dispatch({ type: 'counterSlice/increment' })}>
        증가
      </button>
    </>
  );
}
