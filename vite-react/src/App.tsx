import React, { useState } from 'react'

function App() {
   const [ count , setCount] = useState(0);
   const clickHandler = () => {
    setCount((count)=>count + 1);
    setCount((count)=> count + 1);
    setCount((count) => count + 1);
   }
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={clickHandler}>증가</button>
     </div>
  )
}

export default App
