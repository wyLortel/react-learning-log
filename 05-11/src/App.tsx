import Button from './components/Button';

export default function App() {
  const handleClick = function handleClick(message: string): void {
    alert(message);
  };

  return (
    <>
      <Button message="안녕!" handle={handleClick}>
        버튼입니다
      </Button>
    </>
  );
}
