export default function button() {
  const handleClick = () => alert('클릭 이벤트 발생');

  return (
    <>
      <button onDoubleClick={handleClick}>클릭</button>
    </>
  );
}
