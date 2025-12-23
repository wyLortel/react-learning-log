export default function Button() {
  const handleClick = (
    message: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(message);
    console.log(e);
  };

  const handleClick2 = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log('handleClick2');
    console.log(event);
  };

  return (
    <>
      <button onClick={(e) => handleClick('클릭!', e)}>클릭</button>
      <button onClick={handleClick2}>클릭2</button>
    </>
  );
}

//함수의 매게변수에 매개변수를 전달 안해도 암묵적으로 이벤트를 줌
//화살표함수로 감싸면 쉽게 타입추론해서 알수잇음
//이벤트객체는 이벤트 핸들러에 암묵적으로 전달되지만 매개변수를 전달할경우 명시적으로 전달
