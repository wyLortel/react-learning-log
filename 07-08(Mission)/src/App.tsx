import { useState } from 'react';

export default function App() {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      {showNotification && <h1>새로운 알람이 도착했습니다</h1>}
      <button
        onClick={() =>
          setShowNotification((showNotification) => !showNotification)
        }
      >
        {showNotification ? '알림 닫기' : '알림 보기'}
      </button>
    </>
  );
}
