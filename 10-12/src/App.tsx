import { useState } from 'react';
import useInput from './hooks/useinput';

export default function App() {
  const { value: email, handleValueChange: handleEmailChange } = useInput('');

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState('');
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, name });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
