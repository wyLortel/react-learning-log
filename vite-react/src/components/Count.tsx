function Count({count,increment}:{count:number;increment:()=>void}) {
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increment}>증가</button>
    </>
  )
}

export default Count