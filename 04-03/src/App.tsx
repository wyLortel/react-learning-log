import User from './components/User';

export default function App() {
  return (
    <>
      <User name="Jack" age={20} />
      <User name="Mike" age={30} />
    </>
  );
}

//이렇게 컴포넌트에서 속성으로 주게 되면 자식컴포넌트에서 매게변수로 사용가능 이걸 자식에게 프롭스를 전달한다표현
