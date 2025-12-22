import type { FunctionComponent, ReactNode } from 'react';
import styles from './LoginBox.module.css';

interface LoginContainerProps {
  children?: ReactNode;
}

const LoginContainer: FunctionComponent<LoginContainerProps> = ({ children }) => {
  return (
    <div className={styles.pageBackground}>
      <main className={styles.mainBox}>
        <div className={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default LoginContainer;