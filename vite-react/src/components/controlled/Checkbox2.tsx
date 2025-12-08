import React, { useState } from "react"

export default function Checkbox2() {
  const [formState, setFormState] = useState({
    agree1 : false, agree2 : false , agree3:false
  });
  const handelCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setFormState((formState)=>({
        ...formState , [event.target.name]:event.target.checked,
    }));
  };
    return (
    <form >
        <input type="checkbox" id="ag1" name="agree1" checked={formState.agree1} onChange={handelCheckboxChange} />
        <label htmlFor="age1">동의 1({formState.agree1 ? '선택됨' :'미선택'})</label>
        <input type="checkbox" id="ag2" name="agree2" checked={formState.agree2} onChange={handelCheckboxChange} />
        <label htmlFor="age1">동의 1({formState.agree2 ? '선택됨' :'미선택'})</label>
    </form>
  )
}