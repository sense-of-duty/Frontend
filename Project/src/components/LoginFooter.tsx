import { type FunctionComponent } from 'react';
import styles from './LoginFooter.module.css';

interface LoginFooterProps {
  onSignupClick?: () => void;
}

const LoginFooter: FunctionComponent<LoginFooterProps> = ({ onSignupClick }) => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.infoText}>아직 GDGoc회원이 아니신가요?</span>
      <button 
        type="button" 
        className={styles.signupButton} 
        onClick={onSignupClick}
      >
        회원가입
      </button>
    </div>
  );
};

export default LoginFooter;