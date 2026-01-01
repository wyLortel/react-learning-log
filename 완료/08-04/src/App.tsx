import styles from './App.module.css';
import classNames from 'classnames/bind';
export default function App() {
  const cx = classNames.bind(styles);
  return (
    <>
      <button className={`${styles.btn} ${styles['is-active']}`}>버튼</button>
      <button className={cx('btn', 'is-active')}>버튼</button>
    </>
  );
}
