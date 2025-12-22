import type { FunctionComponent } from 'react';
import styles from './GoogleLoginButton.module.css';
import googleLogo from '../assets/Google.png';

const GoogleLoginButton: FunctionComponent = () => {
  return (
    <button type="button" className={styles.googleButton}>
      <div className={styles.contentWrapper}>
        <img 
          src={googleLogo} 
          alt="Google Logo" 
          className={styles.googleIcon} 
        />
        <span className={styles.buttonText}>구글 로그인</span>
      </div>
    </button>
  );
};

export default GoogleLoginButton;