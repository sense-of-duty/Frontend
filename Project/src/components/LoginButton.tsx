import { type FunctionComponent } from 'react';
import styles from './LoginButton.module.css';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: FunctionComponent<LoginButtonProps> = ({ onClick }) => {
  return (
    <button 
      type="button" 
      className={styles.loginButton} 
      onClick={onClick}
    >
      <b className={styles.buttonText}>로그인</b>
    </button>
  );
};

export default LoginButton;