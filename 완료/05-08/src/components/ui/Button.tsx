export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick('클릭햇어용', event)}>
        클릭
      </button>
    </>
  );
}

//매개변수를 전달할때는 똑같이 이벤트 객체를 명시적으로 전달
//부모에서 와도 이벤트 객체는 같이 넘어옴
