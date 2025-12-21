export default function Button() {
  const handleClick = (value: string) => alert(value);
  return (
    <>
      <button onClick={() => handleClick('안녕')}>클릭</button>
    </>
  );
}
