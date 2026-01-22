import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import Post from './pages/post/Post';
import Default from './layouts/Default';
import PostLoader from './pages/post/PostLoader';
import { axiosInstance } from '../api/axios';
import PostLoading from './pages/post/PostLoading';

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/post',
        Component: Post, 
      },
      {
        path: '/post-loader',
        Component: PostLoader,
        loader: async () => {
          const { data } = await axiosInstance.get('/posts');
          return data;
        },
        HydrateFallback: PostLoading,
        errorElement: <h1>에러낫어용</h1>
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
