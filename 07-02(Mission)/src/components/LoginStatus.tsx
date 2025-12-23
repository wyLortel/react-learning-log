import { useState } from 'react';

export default function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogIn = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  if (isLogin) {
    return (
      <>
        <h1>환영합니다, 정우영님!</h1>
        <button onClick={handleLogIn}>로그아웃</button>
      </>
    );
  } else {
    return (
      <>
        <h1>로그인이 필요합니다</h1>
        <button onClick={handleLogIn}>로그인</button>
      </>
    );
  }
}
