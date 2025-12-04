import React from 'react'

function CountButtons({increment, reset ,decrement}:{increment:()=>void; reset:()=>void; decrement:()=>void}) {


  return (
    <>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>초기화</button>
        <button onClick={increment}>증가</button>
    </>
  )
}

export default CountButtons