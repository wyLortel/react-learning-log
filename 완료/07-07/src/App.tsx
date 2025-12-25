export default function App() {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <h1>Welcome to Back!</h1>}
      {!isLoggedIn && <h1>please Sign Up!</h1>}
    </>
  );
}
