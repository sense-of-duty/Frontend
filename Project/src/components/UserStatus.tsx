import type { FunctionComponent } from 'react';
import styles from './MainHeader.module.css';

const UserStatus: FunctionComponent = () => {
    return (
        <div className={styles.userSection}>
            <button className={styles.notificationBtn}>
                <span className="material-icons">notifications_none</span>
            </button>
            
            <div className={styles.userInfo}>
                <span className={styles.userName}>홍길동</span>
                <span className={styles.userDivider}>/</span>
                <span className={styles.userRole}>Backend</span>
                <span className={styles.userDivider}>/</span>
                <span className={styles.userMember}>Member</span>
            </div>

            <img src="/assets/Person.webp" alt="User Profile" className={styles.profileImage} />
        </div>
    );
};

export default UserStatus;