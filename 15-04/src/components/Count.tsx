import { useEffect } from 'react';
import CountGroup from './CountGroup';
import { useCountStore } from '../store/countStore';

export default function Count() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => console.log('new count = ' + newCount),
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <CountGroup />
    </>
  );
}
