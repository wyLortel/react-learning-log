import PrintValue from './components/PrintValue';

export default function App() {
  const numberValue = 42;
  const stringValue = 'Hello World';
  const booleanValue = true;
  const arrayValue = [1, 2, 3, 4];
  const objectValue = { name: 'John Doe', age: 30 };
  const handleClick = () => alert('버튼이 클릭되었습니다!');

  return (
    <>
      <PrintValue
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />
    </>
  );
}

//numberValue={numberValue} 이두개 이름을 맞춰줄 필요는없지만 맞춰주면 가독성이 올라가기에
//맞추는게 좋음
