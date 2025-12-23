export default function Button() {
  const handleClick = () => alert('클릭 이벤트 발생');
  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onDoubleClick={handleClick}>클릭</button>
    </>
  );
}

//공식 사이트에 api참고서 있음
