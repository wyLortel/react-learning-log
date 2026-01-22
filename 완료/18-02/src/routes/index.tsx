import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import DashboardHome from './pages/dashboard/DashboardHome';
import Dashborad from './pages/dashboard/Dashborad';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/dashboard',
    Component: Dashborad,
    children: [
      {
        path: '', //
        Component: DashboardHome,
      },
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
