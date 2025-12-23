export default function Button() {
  const handleClick = () => alert('click');

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => alert('클릭')}>클릭2</button>
      <button onClick={() => handleClick()}>클릭2</button>
    </>
  );
}

//무조건 별도로 이벤트함수를 정의하고 넣는 방법을추천
//매게변수가 있으면 2번째 없으면 첫번째 이렇게 하면 가독성도 좋아짐
