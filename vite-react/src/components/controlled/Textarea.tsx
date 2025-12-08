import { useState } from "react"

function Textarea() {
  const [text,setText] =  useState('');
  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  return (
    <form>
        <textarea value={text} onChange={handleChange}></textarea>
        <p>입력한 텍스트:{text}</p>
    </form>
  )
}

export default Textarea