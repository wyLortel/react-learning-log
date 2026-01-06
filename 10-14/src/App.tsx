import useInput from './hooks/useInput';

export default function App() {
  const { value: email, handleValueChange: handleEmailChange } = useInput('');
  const { value: password, handleValueChange: handlePasswordChange } =
    useInput('');
  const { value: name, handleValueChange: handleNameChange } = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      alert(emailError);
      return;
    }
    console.log({ email, password, name });
  };

  const validateEmail = (email: string) => {
    if (!email) return '이메일을 입력해주세요';
    if (!/^[a-zA-Z0-9]+@(gmail\.com|naver\.com)$/.test(email)) {
      return '이메일은 gmail과 naver만 포함할 수 있습니다';
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          minLength={4}
          maxLength={6}
          required
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
