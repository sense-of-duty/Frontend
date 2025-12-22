import { useState, type FunctionComponent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../components/LoginBox';
import LoginTitle from '../components/LoginTitle';
import LoginIdInput from '../components/LoginIdInput';
import LoginPasswordInput from '../components/LoginPasswordInput';
import LoginStayAndFind from '../components/LoginStayAndFind';
import LoginButton from '../components/LoginButton';
import LoginDivider from '../components/LoginDivider';
import GoogleLoginButton from '../components/GoogleLoginButton';
import LoginFooter from '../components/LoginFooter';
import styles from './LoginPage.module.css';

const LoginPage: FunctionComponent = () => {
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_API_URL;
    const API_URL = `${baseURL}/auth/login`;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleLogin = async () => {
        if (!email || !password) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('로그인 성공:', data);
                navigate('/home');
            } else {
                console.error('로그인 실패');
                alert('아이디 또는 비밀번호를 확인해주세요.');
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <LoginContainer>
                <div className={styles.componentsWrapper}>
                    <div className={styles.titleSection}>
                        <LoginTitle />
                    </div>

                    <LoginIdInput value={email} onChange={handleEmailChange} />
                    <LoginPasswordInput value={password} onChange={handlePasswordChange} />

                    <LoginStayAndFind />

                    <LoginButton onClick={handleLogin} />

                    <div className={styles.dividerSection}>
                        <LoginDivider />
                    </div>

                    <div className={styles.googleSection}>
                        <GoogleLoginButton />
                    </div>

                    <LoginFooter onSignupClick={() => navigate('/signup')} />
                </div>
            </LoginContainer>
        </div>
    );
};

export default LoginPage;