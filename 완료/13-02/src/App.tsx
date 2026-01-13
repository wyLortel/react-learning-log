import Count from './components/Count';
import CountOutside from './components/CountOutside';
import CounterProvider from './context/counter/counterProvider';

export default function App() {
  return (
    <>
      <CounterProvider>
        <Count />
        <CountOutside />
      </CounterProvider>
    </>
  );
}
