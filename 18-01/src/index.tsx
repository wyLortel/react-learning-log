import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './routes/pages/Home';
import About from './routes/pages/About';

export default function Router() {
  const router = createBrowserRouter([
    //  / 는 홈 컴포넌트를 렌더링해라
    {
      path: '/',
      element: Home,
    },
    //어바웃은 경로는 어바웃컴포넌트를 렌더링해라
    {
      path: '/about',
      element: <About />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
