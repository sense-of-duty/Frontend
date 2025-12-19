import type { FunctionComponent } from 'react';
import styles from './SignUpHeader.module.css';
import GDGLogo from '../assets/GDGLogo.jpg'; 

const SignUpHeader = () => {
    return (
        <div className={styles.gdgoc}>
            <b className={styles.gdgoc2}>GDGoc 통합 페이지</b>
            <img 
                className={styles.logoImage}
                alt="GDG Logo"
                src={GDGLogo}
            />
        </div>
    );
};

export default SignUpHeader as FunctionComponent;