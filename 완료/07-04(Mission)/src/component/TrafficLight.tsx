export default function TrafficLight({
  light,
  handleChangeLight,
}: {
  light: string;
  handleChangeLight: () => void;
}) {
  return (
    <>
      <h1>라이트 ; {light.toLocaleUpperCase()}</h1>
      <button onClick={handleChangeLight}>변경</button>
    </>
  );
}
