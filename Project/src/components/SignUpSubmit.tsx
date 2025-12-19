import type { FunctionComponent, MouseEvent, PropsWithChildren } from 'react';
import styles from './SignUpSubmit.module.css';

interface SignUpSubmitProps {
    onSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
}

const SignUpSubmit: FunctionComponent<PropsWithChildren<SignUpSubmitProps>> = ({ 
    onSubmit, 
    disabled, 
    children
}) => {
    return (
        <button 
            className={styles.submitButtonContainer}
            type="button" 
            onClick={onSubmit} 
            disabled={disabled}
        >
            <div className={styles.submitButtonText}>
                {children} 
            </div>
        </button>
    );
};

export default SignUpSubmit;