import { type FunctionComponent, type ChangeEvent } from 'react';
import styles from './LoginIdInput.module.css';

interface LoginIdInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginIdInput: FunctionComponent<LoginIdInputProps> = ({ value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="user-id" className={styles.label}>
        아이디
      </label>
      <input
        id="user-id"
        type="text"
        placeholder="아이디"
        className={styles.inputField}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginIdInput;