import { useRef } from 'react';

export default function UserInfoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      //커렌트 라는 속성이 참조 가능하다는것은 폼ref 객체가 폼테그랑 잘 연결이 되어져잇음
      //연결이 되잇으면 이 요소 값을 굉장히 쉽게 가져올수있음
      const formData = new FormData(formRef.current);
      const name = formData.get('name');
      const email = formData.get('email');
      const gender = formData.get('gender');
      const skills = formData.get('skills');
      const bio = formData.get('bio');

      console.log({ name, email, gender, skills, bio });
    }
  };
  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              name="gender"
              value="남성"
              defaultChecked
            />
            남성
          </label>
          <label className="form-group__radio">
            <input type="radio" id="female" name="gender" value="여성" />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input type="checkbox" name="skills" value="JavaScript" />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input type="checkbox" name="skills" value="React" />
            React
          </label>
          <label className="form-group__checkbox">
            <input type="checkbox" name="skills" value="Node.js" />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개:
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            name="bio"
            placeholder="자기소개를 작성해주세요"
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>
    </div>
  );
}
