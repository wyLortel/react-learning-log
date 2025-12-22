export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <a
          href="https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:%EB%8C%80%EB%AC%B8"
          onClick={(event) => event.preventDefault()}
        >
          위키피디아
        </a>
        <button type="submit">전송</button>
      </form>
    </>
  );
}

//preventDefault()를 사용하면 기본동작을 막음 form 제출에 용이
