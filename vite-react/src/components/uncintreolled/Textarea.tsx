import { useRef } from 'react';

function Textarea() {
  const textareRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = textareRef.current?.value;
    console.log('입력한 텍스트: ', text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea ref={textareRef}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Textarea;
