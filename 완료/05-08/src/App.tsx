import Button from './components/ui/Button';

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(event);
    console.log(message);
  };
  return (
    <>
      <Button handleClick={handleClick} />
    </>
  );
}
