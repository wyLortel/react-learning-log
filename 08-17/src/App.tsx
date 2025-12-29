import { twMerge } from 'tailwind-merge';

export default function App() {
  const isRed = true;
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <button
          className={twMerge('bg-amber-700 bg-rose-500', isRed && 'bg-red-900')}
        >
          Click Me
        </button>
        <button className="btns">Click Me</button>
      </div>
    </>
  );
}
