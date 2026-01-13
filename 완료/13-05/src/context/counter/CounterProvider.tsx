import { useMemo, useReducer } from 'react';
import { CounterContext, CounterContextAction } from './CounterContext';
import counterReducer from '../../reducer/counterReducer';

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useReducer(counterReducer, 0);
  const increment = () => {
    setCount({ type: 'INCREMENT' });
  };
  const decrement = () => {
    setCount({ type: 'DECREMENT' });
  };
  const reset = () => {
    setCount({ type: 'RESET' });
  };

  const memoization = useMemo(() => ({ increment, decrement, reset }), []);
  return (
    <>
      <CounterContextAction value={memoization}>
        <CounterContext value={{ count }}>{children}</CounterContext>
      </CounterContextAction>
    </>
  );
}
