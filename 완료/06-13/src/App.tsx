import Count from './components/Count';

export default function App() {
  return (
    <>
      <Count />
    </>
  );
}
//set함수를 넘기면 자식에서 자유성이 너무 올라감 상태값을 마음대로 바꿀수잇음
//그러므로 상태를 변화시킬수있는 상태값을 만들어 하는것을 추천
