import { useState } from 'react';

export default function App() {
  const [state, setState] = useState<number>(0);
  const handleSetToTen = () => {
    setState(10);
  };
  return (
    <>
      <h1>state:{state}</h1>
      <button onClick={handleSetToTen}>Set To 10</button>
    </>
  );
}

//리액트 상태란? 시간이 지남에 따라 변할수있는 데이터
//리액트 훅 함수형 컴포넌트에서 상태관리 생명주기 및 부가적인 기능을 활용할수잇게도와주는 기능
//상태값이 변경되면 리액트가 감지하여 화면을 리렌더링
