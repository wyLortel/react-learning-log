import { useEffect, useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count 값 변경됨:', count);
  }, [count]);
  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
