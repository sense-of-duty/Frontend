import { type FunctionComponent } from 'react';
import type { ChangeEvent } from 'react';
import styles from './SignUp.module.css';

interface SignUpNameProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpName: FunctionComponent<SignUpNameProps> = ({ value, onChange }) => {

    return (
        <input
            className={styles.SignUp} 
            type="text"
            name="name"
            placeholder="이름"
            
            value={value} 
            onChange={onChange} 
        />
    );
};

export default SignUpName;