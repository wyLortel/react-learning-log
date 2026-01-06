import { useState } from 'react';

export default function Input() {
  // const [input, setInput] = useState(' ');
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value);
  // };

  // const [pw, setPw] = useState(' ');
  // const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPw(e.target.value);
  // };

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form>
        <h1>
          Input: {formState.email} / {formState.password}
        </h1>
        <input
          type="text"
          value={formState.email}
          name="email"
          onChange={handleFormStateChange}
        />
        <input
          type="password"
          value={formState.password}
          name="password"
          onChange={handleFormStateChange}
        />
      </form>
    </>
  );
}
