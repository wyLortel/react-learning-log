export default function CountButton({
  handleIncrement,
  handleDecrement,
  handleReset,
}: {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleReset: () => void;
}) {
  return (
    <>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
      <button onClick={handleReset}>리셋</button>
    </>
  );
}
