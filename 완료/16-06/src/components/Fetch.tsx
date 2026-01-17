import { useEffect, useState } from 'react';

interface Posts {
  id: number;
  title: string;
  views: number;
}

export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // 1. 컨트롤러 생성
    const controller = new AbortController();

    // 2. 비동기 로직을 별도 함수로 분리 (중요!)
    const fetchData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('http://localhost:3000/posts', {
          signal: controller.signal, // 신호 연결
        });

        if (!response.ok) {
          throw new Error('네트워크 통신 오류');
        }

        const data = await response.json();
        setPosts(data);
      } catch (e) {
        // 취소된 에러가 아닐 때만 에러 상태 업데이트
        if (e instanceof Error && e.name !== 'AbortError') {
          setError(e.message);
        }
      } finally {
        // 취소되지 않은 정상적인 상황에서만 로딩을 꺼줌
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData(); // 함수 실행

    // 3. 클린업 함수: 컴포넌트가 사라지면 요청 취소
    return () => controller.abort();
  }, []);

  // 에러 화면 처리
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <>
      <h3>Fetch Component</h3>
      <ul>
        {isLoading ? (
          <p>Loading... </p>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </>
  );
}
