import type { FunctionComponent } from 'react';
import styles from './MainHeader.module.css';
import headerLogo from '../assets/GDGheaderLogo.webp'; 

const Logo: FunctionComponent = () => {
    return (
        <div className={styles.logoSection}>
            <img src={headerLogo} alt="GDG Logo" className={styles.logoImage} />
            <div className={styles.logoText}>
                <h1 className={styles.mainTitle}>GDGoc 통합 페이지</h1>
                <p className={styles.subTitle}>Sungkonghoe University</p>
            </div>
        </div>
    );
};

export default Logo;