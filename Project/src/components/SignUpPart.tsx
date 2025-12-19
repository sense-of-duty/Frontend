import type { FunctionComponent, ChangeEvent } from 'react';
import styles from './SignUpPart.module.css';

interface SignUpPartProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SignUpPart: FunctionComponent<SignUpPartProps> = ({ value, onChange }) => {
    const partOptions = ['BACKEND', 'DESIGN', 'PM', 'MOBILE', 'WEB', 'ORGANIZER'];

    return (
        <select
            className={`${styles.SignUp} ${value === "" ? styles.placeholderColor : ""}`} 
            name="partType" 
            value={value} 
            onChange={onChange}
        >
            <option value="" disabled hidden>
                파트
            </option>

            {partOptions.map((p) => (
                <option key={p} value={p} className={styles.optionText}>
                    {p}
                </option>
            ))}
        </select>
    );
};

export default SignUpPart;