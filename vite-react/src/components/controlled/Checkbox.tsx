import React, { useState } from "react"

export default function Checkbox() {
  const [isChecked, setIschecked] = useState(false);
  const handelCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setIschecked(event.target.checked)
  };
    return (
    <form>
        <input type="checkbox" checked={isChecked} 
            onChange={handelCheckboxChange}/>
        <label>아이템 1({isChecked ? '선택됨' : '미선택'})</label>
    </form>
  )
}
