import GuestView from './GuestView';

export default function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) return null;
  else return <GuestView />;
}
