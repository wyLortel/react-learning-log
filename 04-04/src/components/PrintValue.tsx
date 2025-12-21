export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  return (
    <>
      <p>number : {props.numberValue}</p>
      <p>string : {props.stringValue}</p>
      <p>booleanValue : {props.booleanValue.toString()}</p>
      <p>arrayValue: {props.arrayValue}</p>
      <p>objectValue : {JSON.stringify(props.objectValue)}</p>
      <p>handleClick : {props.handleClick.toString()}</p>
    </>
  );
}
