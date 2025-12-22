import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount((count) => count + 1); //0
    setCount((count) => count + 1);
    setCount((count) => count + 1); //함수형 매게변수 업데이트 방식은 항상 함수의 매개변수로
    //최신의 상태값이 넘어옴 그니 클로저에도 구애받지않음
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}

//리렌더링을 한번할때 최대한 변경할수잇는 모든 상태값을 모아 한번에 처리
//상태 업데이트 함수는 기본적으로 비동기
//클로저때문에 전부 0을가리키고 배치업데이트 때문에 모든 상태변경업데이트는 모아서 실행
