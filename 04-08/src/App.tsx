import User from './components/User';
import User2 from './components/User2';

export default function App() {
  const userObj = {
    name: 'jack',
    age: 20,
    gender: 'male',
  };

  return (
    <>
      <User userObj={userObj} />
      <User2 {...userObj} />
      {/* <User2 name={"jack"} age={20} gender={"male"} /> 위에것을 이렇게 전하는거랑 동일*/}
    </>
  );
}
//전개 연산자를 이용해 전달하는건 실무에서도 많이 쓰이는 패턴
