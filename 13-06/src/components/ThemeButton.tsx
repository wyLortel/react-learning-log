import { useThemeAction } from '../context/theme/useTheme';

export default function ThemeButton() {
  const { changeTheme } = useThemeAction();
  return (
    <>
      <button onClick={changeTheme}>테마변경</button>
    </>
  );
}
