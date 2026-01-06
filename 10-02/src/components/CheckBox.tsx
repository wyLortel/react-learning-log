import { useState } from 'react';

export default function CheckBox() {
  const [chk1, setChk1] = useState(false);
  const handleChkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChk1(e.target.checked);
  };

  // const [chk2, setChk2] = useState(false);
  // const handleChk2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setChk2(e.target.checked);
  // };

  const [formState, setFormState] = useState({
    chk1: false,
    chk2: false,
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.checked,
    }));
  };
  return (
    <div>
      <input
        type="checkbox"
        id="item1"
        name="chk1"
        checked={chk1}
        onChange={handleChkChange}
      />
      <label htmlFor="item1">아이템 1{chk1 ? '선택됨' : '선택되지않음'}</label>

      <input
        type="checkbox"
        id="item2"
        name="chk2"
        checked={formState.chk1}
        onChange={handleFormStateChange}
      />
      <label htmlFor="item1">아이템 1{chk1 ? '선택됨' : '선택되지않음'}</label>

      <input
        type="checkbox"
        id="item1"
        checked={formState.chk2}
        onChange={handleFormStateChange}
      />
      <label htmlFor="item1">아이템 1{chk1 ? '선택됨' : '선택되지않음'}</label>
    </div>
  );
}
