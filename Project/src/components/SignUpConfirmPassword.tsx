import { type FunctionComponent } from 'react';
import type { ChangeEvent } from 'react'; 
import styles from './SignUp.module.css';

interface SignUpConfirmPasswordProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpConfirmPassword: FunctionComponent<SignUpConfirmPasswordProps> = ({ value, onChange }) => {

    return (
        <input
            className={styles.SignUp} 
            type="password" 
            name="confirmPassword"
            placeholder="비밀번호 재입력"
            
            value={value}
            onChange={onChange}
        />
    );
};

export default SignUpConfirmPassword;