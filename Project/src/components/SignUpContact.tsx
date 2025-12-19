import { type FunctionComponent } from 'react';
import type { ChangeEvent } from 'react'; 
import styles from './SignUp.module.css';

interface SignUpContactProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpContact: FunctionComponent<SignUpContactProps> = ({ value, onChange }) => {

    return (
        <input
            className={styles.SignUp} 
            type="tel" 
            name="phone"
            placeholder="연락처"
            
            value={value}
            onChange={onChange}
        />
    );
};

export default SignUpContact;