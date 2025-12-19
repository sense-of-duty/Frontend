import { type FunctionComponent } from 'react';
import type { ChangeEvent } from 'react'; 
import styles from './SignUp.module.css';

interface SignUpPasswordProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpPassword: FunctionComponent<SignUpPasswordProps> = ({ value, onChange }) => {

    return (
        <input
            className={styles.SignUp} 
            type="password" 
            name="password"
            placeholder="비밀번호 입력"
            
            value={value}
            onChange={onChange}
        />
    );
};

export default SignUpPassword;