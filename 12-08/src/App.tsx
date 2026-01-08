import React from 'react';
import { useState } from 'react';
// import ChildA from './components/ChildA';
// import ChildB from './components/ChildB';

const ChildA = React.lazy(() => import('./components/ChildA'));
const ChildB = React.lazy(() => import('./components/ChildB'));

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && (
        <>
          <ChildA />
          <ChildB />
        </>
      )}
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? 'Hide' : 'Show'}
      </button>
    </>
  );
}
