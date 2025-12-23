import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(10);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}

//현재 상태값을 기준으로 무언가를 하기위한건 항상 최신의 값으로 올바르게 사용할수잇는
//업데이트형식을 사용하는것이 좋다

//현재 상태값과 관련이 전혀 없을때 그때 직접 업데이트 방식을 사용해라
