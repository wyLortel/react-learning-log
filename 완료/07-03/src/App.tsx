import StatusMessage from './components/StatusMessage';

export default function App() {
  const status = 'error';
  return (
    <>
      <StatusMessage status={status} />
    </>
  );
}
