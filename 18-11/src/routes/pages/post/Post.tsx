import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../api/axios';

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosInstance.get('/posts');
      setPosts(data);
    };
    fetchPost();
  }, []);
  return (
    <>
      <h1>Post Component</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
