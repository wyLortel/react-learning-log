import React, { useState } from "react"

function Input3() {
  const [formstate , setFormState] = useState({
    id:'' , password:'',data:''
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formstate)=>({
        ...formstate,
        [e.target.name]:e.target.value,
    }));
  }
  return (
    <>
        <h1>
            Id: {formstate.id} / password: {formstate.password} / Data: {formstate.data}
        </h1>
        <input type="text" name="id" value={formstate.id} onChange={handleChange} />
        <input type="password" name="password" value={formstate.password} onChange={handleChange} />
        <input type="date" name="date" value={formstate.data} onChange={handleChange} />

    </>
  )
}

export default Input3