//263페이지 부터

import { useRef } from "react";

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    console.log("Submitted value: ", inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">submit</button>
    </form>
  );
}
