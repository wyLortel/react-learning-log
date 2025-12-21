export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}

//의도적으로 특정한것만 받아야할경우 말고 기본적으로는 ReactNode를 사용해서 받음
//아마 엘리먼트 빼고 안될때

//자식 컴포넌트가
//콘텐츠에서 사용되는 경우 칠드런으로
//속성에서 사용되는경우 속성으로 전달한다
