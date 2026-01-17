export default function FetchCrud() {
  // 1. 조회 (GET)
  const fetchGet = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    console.log('조회 결과:', data);
  };

  // 2. 등록 (POST)
  const fetchPost = async () => {
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: '새 글', views: 100 }),
    });
    const data = await response.json();
    console.log('등록 결과:', data);
  };

  // 3. 전체 수정 (PUT) - 1번 글을 아예 갈아끼움
  const fetchPut = async () => {
    const response = await fetch('http://localhost:3000/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: '수정된 제목', views: 200 }),
    });
    const data = await response.json();
    console.log('PUT 결과:', data);
  };

  // 4. 부분 수정 (PATCH) - 1번 글의 제목만 바꿈
  const fetchPatch = async () => {
    const response = await fetch('http://localhost:3000/posts/1', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: '제목만 쓱 바꿈' }),
    });
    const data = await response.json();
    console.log('PATCH 결과:', data);
  };

  // 5. 삭제 (DELETE)
  const fetchDelete = async () => {
    const response = await fetch('http://localhost:3000/posts/1', {
      method: 'DELETE',
    });
    if (response.ok) console.log('1번 글 삭제 완료');
  };

  return (
    <div>
      <button onClick={fetchGet}>조회(Get)</button>
      <button onClick={fetchPost}>등록(Post)</button>
      <button onClick={fetchPut}>전체수정(Put)</button>
      <button onClick={fetchPatch}>부분수정(Patch)</button>
      <button onClick={fetchDelete}>삭제(Delete)</button>
    </div>
  );
}
