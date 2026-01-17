import axios from 'axios';
export default function AxiosCrud() {
  const fetchGet = async () => {
    const data = await axios.get(' http://localhost:3000/posts');
    console.log(data);
  };
  const fetchPost = async () => {
    const { data } = await axios.post('http://localhost:3000/posts', {
      title: 'a axios data',
      views: 50,
    });
    console.log(data);
  };
  const fetchPut = async () => {
    // await를 붙여야 서버에서 응답이 올 때까지 기다렸다가 data를 꺼냅니다.
    const { data } = await axios.put('http://localhost:3000/posts/10', {
      title: '수정된 제목', // 보통 숫자가 아닌 문자열이 들어갑니다.
      views: 50,
    });
    console.log('PUT 결과:', data);
  };
  const fetchPatch = async () => {
    // 10번 게시글의 제목만 '안녕'으로 바꾸고 싶을 때
    const { data } = await axios.patch('http://localhost:3000/posts/10', {
      title: '안녕',
    });
    console.log('PATCH 결과:', data);
  };
  const fetchDelete = async () => {
    // 10번 게시글을 지우라고 명령!
    const response = await axios.delete('http://localhost:3000/posts/10');

    if (response.status === 200) {
      console.log('10번 글이 삭제되었습니다.');
    }
  };

  return (
    <>
      <button onClick={fetchGet}>GET</button>
      <button onClick={fetchPost}>POST</button>
      <button onClick={fetchPut}>PUT</button>
      <button onClick={fetchPatch}>PATCH</button>
      <button onClick={fetchDelete}>DELETE</button>
    </>
  );
}
