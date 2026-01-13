import useCounter from '../context/counter/useCounter';

export default function CountButton() {
  const newLocal = useCounter();
  const { increment, decrement, reset } = newLocal;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
