import type { FunctionComponent } from 'react';
import styles from './LoginTitle.module.css';
import GDGHeaderLogo from '../assets/GDGheaderLogo.webp'; 

const LoginTitle: FunctionComponent = () => {
  return (
    <div className={styles.loginTitleContainer}>
      <b className={styles.titleText}>GDGoc 통합 페이지</b>
      <div className={styles.logoBox}>
        <img 
          className={styles.logoImage} 
          src={GDGHeaderLogo} 
          alt="GDGoc Logo" 
        />
      </div>
    </div>
  );
};

export default LoginTitle;