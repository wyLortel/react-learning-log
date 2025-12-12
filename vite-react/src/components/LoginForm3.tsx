import useInput from '../hooks/useInput';

export default function LoginForm3() {
  const { value: email, onChange: changeEmail } = useInput('');
  const { value: password, onChange: changePassword } = useInput('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={changeEmail} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={changePassword}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
