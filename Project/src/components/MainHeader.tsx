import type { FunctionComponent } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserStatus from './UserStatus';
import styles from './MainHeader.module.css';

const MainHeader: FunctionComponent = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Logo />
                <Navigation />
                <UserStatus />
            </div>
        </header>
    );
};

export default MainHeader;