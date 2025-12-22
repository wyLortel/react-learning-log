import { useState } from 'react';

export default function App() {
  const [name, setName] = useState<string>('jack');
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<string>('male');

  const handleChange = () => {
    setName('우영');
    setAge(27);
    setGender('남성');
  };

  return (
    <>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>gender : {gender}</p>
      <button onClick={handleChange}>변경</button>
    </>
  );
}

//타입추론이 가능하기네 제너릭을 사용하거나 사용하지않아도 된다
//허나 일관적이어야함 할거면 하고 안할거면 안하고
