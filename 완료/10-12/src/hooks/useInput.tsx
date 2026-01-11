import { useState } from 'react';

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue); //공용으로 사용하기에 상태명은 범용적으로
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    handleValueChange,
  };
}
