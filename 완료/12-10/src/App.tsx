import { lazy, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
const ChildA = lazy(() => import('./components/ChildA'));
const ChildB = lazy(() => import('./components/ChildB'));

function Fallback({
  error,
  restError,
}: {
  error: Error;
  restError: () => void;
}) {
  return (
    <div role="alert">
      <p>에러가 발생했습니다.</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={restError}>다시 시도</button>
    </div>
  );
}

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && (
        <>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<h1>ChildA Loading..</h1>}>
              <ChildA />
            </Suspense>
          </ErrorBoundary>
          <Suspense fallback={<h1>ChildB Loading..</h1>}>
            <ChildB />
          </Suspense>
        </>
      )}
    </>
  );
}
