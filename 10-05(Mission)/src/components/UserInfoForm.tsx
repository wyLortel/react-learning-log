import { useState } from 'react';

export default function UserInfoForm() {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    gender: '',
    skills: [],
    bio: '',
  });

  const handleFormStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type, value, checked } = e.target;

    setFormState((prev) => {
      if (type === 'checkbox') {
        const skills = prev.skills as string[];

        return {
          ...prev,
          [name]: checked
            ? [...skills, value] // 체크 → 추가
            : skills.filter((v) => v !== value), // 해제 → 제거
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            name="userName"
            onChange={handleFormStateChange}
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
            onChange={handleFormStateChange}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              value="남성"
              name="gender"
              checked={formState.gender === '남성'}
              onChange={handleFormStateChange}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              value="여성"
              name="gender"
              checked={formState.gender === '여성'}
              onChange={handleFormStateChange}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              name="skills"
              onChange={handleFormStateChange}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              name="skills"
              onChange={handleFormStateChange}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              name="skills"
              onChange={handleFormStateChange}
            />
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
            placeholder="자기소개를 작성해주세요"
            name="bio"
            onChange={handleFormStateChange}
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름:{formState.userName} </p>
        <p className="preview__item">이메일:{formState.email} </p>
        <p className="preview__item">성별:{formState.gender} </p>
        <p className="preview__item">기술 관심:{formState.skills} </p>
        <p className="preview__item">자기소개:{formState.bio} </p>
      </div>
    </div>
  );
}
