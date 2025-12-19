import type { FunctionComponent, PropsWithChildren } from 'react';
import styles from './SignUpBox.module.css';

const SignUpBox: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.rectangleDiv}> 
            {children}
        </div>
    );
};

export default SignUpBox;