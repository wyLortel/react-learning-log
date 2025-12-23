import { useState } from 'react';
import TrafficLight from './component/TrafficLight';

export default function App() {
  const [light, setLight] = useState('red');
  const handleChangeLight = () => {
    setLight((light) => {
      switch (light) {
        case 'red':
          return 'yellow';
        case 'yellow':
          return 'green';
        case 'green':
          return 'red';
        default:
          return 'red';
      }
    });
  };
  return (
    <>
      <TrafficLight light={light} handleChangeLight={handleChangeLight} />
    </>
  );
}
