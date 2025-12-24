import { useEffect, useReducer, type FunctionComponent } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { verifyEmail } from '../api';
import styles from './VerifyEmailPage.module.css';

type VerifyStatus = 'loading' | 'success' | 'error' | 'waiting';

interface State {
    status: VerifyStatus;
    message: string;
}

type Action =
    | { type: 'LOADING' }
    | { type: 'SUCCESS'; message: string }
    | { type: 'ERROR'; message: string }
    | { type: 'WAITING' };

const initialState: State = {
    status: 'waiting',
    message: '',
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOADING':
            return { status: 'loading', message: '' };
        case 'SUCCESS':
            return { status: 'success', message: action.message };
        case 'ERROR':
            return { status: 'error', message: action.message };
        case 'WAITING':
            return { status: 'waiting', message: '' };
        default:
            return state;
    }
};

interface ServerErrorResponse {
    message?: string;
}

const VerifyEmailPage: FunctionComponent = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    const token = searchParams.get('token');
    const email = searchParams.get('email');

    useEffect(() => {
        if (!token) {
            dispatch({ type: 'WAITING' });
            return;
        }

        let isMounted = true;
        const controller = new AbortController();

        dispatch({ type: 'LOADING' });

        const verify = async () => {
            try {
                await verifyEmail(token);
                
                if (isMounted) {
                    dispatch({ type: 'SUCCESS', message: '이메일 인증이 완료되었습니다!' });
                    
                    setTimeout(() => {
                        if (isMounted) {
                            navigate('/login');
                        }
                    }, 3000);
                }
            } catch (error) {
                if (!isMounted) return;
                
                let errorMessage = '인증 중 오류가 발생했습니다.';
                
                if (error instanceof AxiosError) {
                    const axiosError = error as AxiosError<ServerErrorResponse>;
                    const serverMessage = axiosError.response?.data?.message;
                    errorMessage = serverMessage || '인증에 실패했습니다. 링크가 만료되었을 수 있습니다.';
                }
                
                dispatch({ type: 'ERROR', message: errorMessage });
            }
        };

        verify();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [token, navigate]);

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {state.status === 'loading' && (
                    <>
                        <div className={styles.spinner} />
                        <p className={styles.message}>인증 중...</p>
                    </>
                )}
                
                {state.status === 'success' && (
                    <>
                        <div className={styles.icon}>✅</div>
                        <h2 className={styles.title}>인증 완료!</h2>
                        <p className={styles.message}>{state.message}</p>
                        <p className={styles.subMessage}>잠시 후 로그인 페이지로 이동합니다...</p>
                    </>
                )}
                
                {state.status === 'error' && (
                    <>
                        <div className={styles.icon}>❌</div>
                        <h2 className={styles.title}>인증 실패</h2>
                        <p className={styles.message}>{state.message}</p>
                        <button 
                            className={styles.button}
                            onClick={handleNavigateToLogin}
                        >
                            로그인 페이지로 이동
                        </button>
                    </>
                )}
                
                {state.status === 'waiting' && (
                    <>
                        <div className={styles.icon}>📧</div>
                        <h2 className={styles.title}>이메일 인증</h2>
                        <p className={styles.message}>
                            {email ? `${email}로 인증 메일을 발송했습니다.` : '인증 메일을 확인해주세요.'}
                        </p>
                        <p className={styles.subMessage}>
                            이메일의 인증 링크를 클릭하면 가입이 완료됩니다.
                        </p>
                        <button 
                            className={styles.button}
                            onClick={handleNavigateToLogin}
                        >
                            로그인 페이지로 이동
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default VerifyEmailPage;