import { type FunctionComponent } from 'react';
import styles from './LoginDivider.module.css';

const LoginDivider: FunctionComponent = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.line}></div>
      <span className={styles.text}>또는</span>
      <div className={styles.line}></div>
    </div>
  );
};

export default LoginDivider;