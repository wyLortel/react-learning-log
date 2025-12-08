import { useState } from "react"

function Input() {
  const[value ,setValue] = useState('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }
  return (
    <form>
      <h1>input: {value}</h1>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  )
}

export default Input