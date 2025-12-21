import Button from './components/ui/Button';
import UserProfile from './components/UserProfile';

export default function App() {
  return (
    <>
      <Button>Logout</Button>
      <Button>Login</Button>
      <UserProfile name="Alice" age={30} isAdmin={true} />
      <UserProfile name="Bob" age={25} isAdmin={false} />
    </>
  );
}

//jsx도 컨텐츠가 있는 형태로 작성가능
//대신 컴포넌트 안에 컨텐츠는 자식으로 전달됨
//대신 이경우 칠드런이라는 예약된 프롭스 속성으로만 받을수있다
