import { useRef, useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('이메일을 입력하세요');
      idRef.current?.focus();
      return;
    }
    if (password.trim() === '') {
      alert('비밀번호를 입력하세요');
      pwRef.current?.focus();
      return;
    }
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="uid">
        <input
          type="text"
          id="uid"
          ref={idRef}
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={changeEmail}
        ></input>
      </label>
      <label htmlFor="upw">
        <input
          ref={pwRef}
          type="text"
          id="upw"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={changePassword}
        ></input>
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
