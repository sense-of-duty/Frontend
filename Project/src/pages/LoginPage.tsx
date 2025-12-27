import { useState, type FunctionComponent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
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
import { AxiosError } from 'axios';

const LoginPage: FunctionComponent = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleLogin = async () => {
        if (!email || !password) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }
        console.log('로그인 요청 데이터:', { email, password });

        setIsLoading(true);

        try {
            const response = await login(email, password);
            const { token, user } = response.data;

            localStorage.setItem('accessToken', token.accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            console.log('로그인 성공:', user.name);
            navigate('/');
        } catch (error) {
    console.error('로그인 실패:', error);

    if (error instanceof AxiosError) {
        console.log('서버 응답:', error.response?.data);
        
        const serverMessage = error.response?.data?.message;
        
        if (error.response?.status === 400) {
            alert(serverMessage || '입력 정보를 확인해주세요.');
        } else if (error.response?.status === 401) {
            alert('아이디 또는 비밀번호를 확인해주세요.');
        } else if (error.response?.status === 403) {
            alert('승인대기 중인 계정입니다.');
        } else {
            alert(serverMessage || '로그인 중 오류가 발생했습니다.');
        }
    } else {
        alert('네트워크 오류가 발생했습니다.');
    }
}finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isLoading) {
            handleLogin();
        }
    };

    return (
        <div className={styles.pageWrapper} onKeyDown={handleKeyDown}>
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