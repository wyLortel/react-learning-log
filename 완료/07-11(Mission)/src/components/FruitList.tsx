import { useState } from 'react';

export default function FruitList() {
  const [item, setItem] = useState(['사과', '바나나', '오렌지']);
  const [flag, setFlag] = useState(false);
  const handleGrape = () => {
    setItem((item) => [...item, '포도']);
    setFlag(true);
  };
  return (
    <>
      <h1>FruitList Component</h1>
      <ul>
        {item.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={handleGrape} disabled={flag}>
        과일추가
      </button>
    </>
  );
}
