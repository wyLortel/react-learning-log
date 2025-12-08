import React, { useState } from "react"

export default function Radio() {
  const [selectVale , setSelectValue] = useState('option1')
  const handelRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value)
  }
    return (
    <form>
        <label>
            <input type="radio" value='option1' checked={selectVale === 'option1'} onChange={handelRadioChange} />
            옵션1
        </label>

        <label>
            <input type="radio" value='option2' checked={selectVale === 'option2'} onChange={handelRadioChange} />
            옵션2
        </label>

        <label>
            <input type="radio" value='option3' checked={selectVale === 'option3'} onChange={handelRadioChange} />
            옵션3
        </label>
    </form>
  )
}
