import { useState } from 'react';

function LoginForm2() {
  const [email, setEmail] = useState('');
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <form action="">
      <label htmlFor="uid">
        <input
          type="text"
          id="uid"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={changeEmail}
        />
      </label>
      <label htmlFor="upw">
        <input
          type="text"
          id="upw"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={changePassword}
        />
      </label>
    </form>
  );
}

export default LoginForm2;
