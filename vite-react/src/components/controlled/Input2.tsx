import React, { useState } from "react"

function Input2 () {
  const[value ,setValue] = useState('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }
  const[password,setPassword] = useState('');
  const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setPassword(e.target.value)
  }

  const [data, setData] = useState('');
  const handleChangeData = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setData(e.target.value)
  }
  return (
    <form>
      <h1>ID: {value} / Password:{password} / Data:{data}</h1>
      <input type="text" value={value} onChange={handleChange} />
      <input type="password" value={password} onChange={handleChangePassword} />
      <input type="date" value={data} onChange={handleChangeData} />
    </form>
  )
}

export default Input2