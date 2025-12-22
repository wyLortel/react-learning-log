import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>카운트: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
      <button onClick={handleReset}>리셋</button>
    </>
  );
}
