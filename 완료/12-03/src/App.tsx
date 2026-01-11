import { useEffect, useState } from 'react';
import Count from './components/Count';

export default function App() {
  const [isShow, setIsShow] = useState(false);

  //컴포넌트가 생성될때만 호출 (리렌더링의 영향을 받지않음 )
  //빈배열로 유즈이펙트 훅을 사용하면 컴포넌트가 생성될때만 실행할수있는 코드 작성 가능
  useEffect(() => {
    console.log('count 컴포넌트 생성!');

    //컴포넌트가 언마운트(삭제될때) 될때 실행할 정리(clean-up)함수 반환
    return () => {
      console.log('count 컴포넌트 삭제!');
    };
  }, []);

  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>노출 변경</button>
      {isShow && <Count />}
    </>
  );
}
