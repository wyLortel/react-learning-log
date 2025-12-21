import React from 'react';

//자식을 받을때 다른이유를 써도 상관은없으나 관례상 props를 사용한다
function User(props: { name: string; age: number }) {
  return (
    <>
      <div>
        <p>name: {props.name}</p>
        <p>age: {props.age}</p>
      </div>
    </>
  );
}

export default User;
