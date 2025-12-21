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
