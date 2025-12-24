import GuestView from './components/GuestView';
import UseInfo from './components/UseInfo';
import UserView from './components/userView';

export default function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <>
          <UserView />
          <UseInfo />
        </>
      ) : (
        <GuestView />
      )}
    </>
  );
}
