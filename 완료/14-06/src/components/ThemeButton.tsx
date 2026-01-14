import { useDispatch } from 'react-redux';
import { changeTheme } from '../store/features/theme/themeSlice';

export default function ThemeButton() {
  console.log('리렌더링 됨');
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(changeTheme())}>테마 변경</button>
    </>
  );
}
