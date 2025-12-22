import { type FunctionComponent, type ChangeEvent } from 'react';
import styles from './LoginPasswordInput.module.css';

interface LoginPasswordInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginPasswordInput: FunctionComponent<LoginPasswordInputProps> = ({ value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="user-password" className={styles.label}>
        비밀번호
      </label>
      <input
        id="user-password"
        type="password"
        placeholder="비밀번호 입력"
        className={styles.inputField}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginPasswordInput;