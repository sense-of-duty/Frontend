import { type FunctionComponent, useState } from 'react'; // useState 추가
import styles from './MainHeader.module.css';

const Navigation: FunctionComponent = () => {
    const menus = ['홈', '커뮤니티', '활동', '일정', '소개'];
    
    // 현재 활성화된 메뉴를 관리하는 상태 (기본값: '홈')
    const [activeMenu, setActiveMenu] = useState<string>('홈');

    return (
        <nav className={styles.navSection}>
            <ul className={styles.navList}>
                {menus.map((menu) => (
                    <li 
                        key={menu} 
                        // 클릭 시 activeMenu 상태를 현재 메뉴 이름으로 변경
                        onClick={() => setActiveMenu(menu)}
                        // 현재 메뉴가 activeMenu 상태와 일치하면 active 클래스 적용
                        className={`${styles.navItem} ${menu === activeMenu ? styles.active : ''}`}
                    >
                        {menu}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;