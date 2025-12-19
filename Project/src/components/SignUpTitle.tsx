import type { FunctionComponent } from 'react';
import styles from './SignUpTitle.module.css';


const SignUpTitle = () => {
  	return (
    		<div className={styles.parent}>
      			<b className={styles.b}>입력필수</b>
    		</div>);
};

export default SignUpTitle as FunctionComponent;
