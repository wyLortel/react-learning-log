import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleIsLogIn = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>"환영합니다"</h1>
          <button onClick={handleIsLogIn}>로그아웃</button>
        </>
      ) : (
        <>
          <h1>"로그인이 필요합니다"</h1>
          <button onClick={handleIsLogIn}>로그인</button>
        </>
      )}
    </>
  );
}
