import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function CountOutside() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <h1>CountOutside: {count}</h1>
    </>
  );
}
