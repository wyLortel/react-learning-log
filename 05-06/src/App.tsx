import Button from './components/ui/Button';

export default function App() {
  const handleClick = (message: string) => alert(message);

  return (
    <>
      <Button handleClick={handleClick} message="playong">
        Play Movie
      </Button>
      <Button handleClick={handleClick} message="uplodaing">
        Upload Image
      </Button>
    </>
  );
}

//이벤트 핸들러의 함수를 별도로 빼는게 더 깔금함
