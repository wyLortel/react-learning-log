// type PrintValueProps {
//   numberValue: number;
//   stringValue: string;
//   booleanValue: boolean;
//   arrayValue: number[];
//   objectValue: { name: string; age: number };
//   handleClick: () => void;
// }인터페이스나 타입 둘다 가능
//프롭스를 받을때는 컴포넌트이름에 프롭스를 넣어서 명명하는게 관례

//  "include": ["src"] 타입스크립트 앱 컨피스안에 src가 기본으로 포함되어잇기에
//src안에 작성되있는 d.ts파일을 자동으로 인식하게끔 설정이 되어있기 때문이다
//이렇게 별도로 분리해도 되고 안해도 된다 중요한것은 팀내 일관된 규칙에 따르는것
//근데 현업에서는 타입을 따로 파일로 빼서 관리하는것을 선호한다

export default function PrintValue(props: PrintValueProps) {
  return (
    <>
      <p>number: {props.numberValue}</p>
      <p>string: {props.stringValue}</p>
      <p>boolean: {props.booleanValue.toString()}</p>
      <p>array: {props.arrayValue}</p>
      <p>object: {JSON.stringify(props.objectValue)}</p>
      <p>function: {props.handleClick.toString()}</p>
    </>
  );
}
