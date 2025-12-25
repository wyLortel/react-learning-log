// import GuestView from './components/GuestView';
// import UserInfoView from './components/UserInfoView';
// import UserVIew from './components/UserVIew';

import Greeting from './components/Greeting';

export default function App() {
  const isLoggedIn = false;

  return <Greeting isLoggedIn={isLoggedIn} />;
  // if (isLoggedIn)
  //   return (
  //     <>
  //       <UserVIew />
  //       <UserInfoView />
  //     </>
  //   );
  // else return <GuestView />;
}
