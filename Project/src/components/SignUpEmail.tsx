import { type FunctionComponent } from 'react';
import type { ChangeEvent } from 'react'; 
import styles from './SignUp.module.css';

interface SignUpEmailProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpEmail: FunctionComponent<SignUpEmailProps> = ({ value, onChange }) => {

    return (
        <input
            className={styles.SignUp} 
            type="email" 
            name="email"
            placeholder="myemail@email.com"
            
            value={value}
            onChange={onChange}
        />
    );
};

export default SignUpEmail;