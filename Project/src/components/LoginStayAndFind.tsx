import type { FunctionComponent } from 'react';
import styles from './LoginStayAndFind.module.css';

const LoginStayAndFind: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <label className={styles.stayLoggedIn}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.stayText}>로그인 유지</span>
      </label>

      <div className={styles.findLinks}>
        <button type="button" className={styles.findButton}>
          아이디 / 비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default LoginStayAndFind;