import { useState, useCallback, type ChangeEvent, type MouseEvent, type FunctionComponent } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import SignUpHeader from '../components/SignUpHeader';
import SignUpBox from '../components/SignUpBox'; 
import SignUpTitle from '../components/SignUpTitle'; 
import SignUpName from '../components/SignUpName';
import SignUpEmail from '../components/SignUpEmail';
import SignUpPassword from '../components/SignUpPassword';
import SignUpConfirmPassword from '../components/SignUpConfirmPassword';
import SignUpContact from '../components/SignUpContact';
import SignUpPart from '../components/SignUpPart';
import SignUpSubmit from '../components/SignUpSubmit';
import styles from './SignUpPage.module.css';
import { signUp, } from "../api";

interface FormState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    partType: string;
}

const initialFormState: FormState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    partType: '',
};

interface ServerErrorResponse {
    message?: string;
}

const SignUpPage: FunctionComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
            if (error) setError(null);
        },
        [error]
    );

    const handleSubmit = useCallback(
        async (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            if (isLoading) return;

            if (formData.password !== formData.confirmPassword) {
                setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
                return;
            }
            
            const requestBody = {
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                name: formData.name,
                phone: formData.phone,
                partType: formData.partType as "WEB" | "BACKEND" | "DESIGN" | "PM" | "MOBILE" | "ORGANIZER",
            };

            setIsLoading(true);
            setError(null);
            
            try {
                await signUp(requestBody);
                console.log("회원가입 요청 성공");
                navigate(`/verify?email=${formData.email}`); 
                
            } catch (err) {
                let message = '회원가입 요청 중 알 수 없는 오류가 발생했습니다.';

                if (axios.isAxiosError(err)) {
                    const axiosError = err as AxiosError<ServerErrorResponse>;
                    
                    if (axiosError.response) {
                        const serverErrorMessage = axiosError.response.data?.message;
                        message = serverErrorMessage || `요청 실패: ${axiosError.response.status}`;
                    } else if (axiosError.request) {
                        message = '서버로부터 응답을 받지 못했습니다. 네트워크를 확인해주세요.';
                    }
                }
                
                setError(message);
                console.error('API 호출 오류:', err);
                
            } finally {
                setIsLoading(false);
            }
        },
        [formData, isLoading, navigate]
    );

    return (
        <div className={styles.container}>
            <SignUpHeader />
            <SignUpBox>
                <SignUpTitle /> 
                
                <SignUpName value={formData.name} onChange={handleChange} />
                <SignUpEmail value={formData.email} onChange={handleChange} />
                <SignUpPassword value={formData.password} onChange={handleChange} />
                <SignUpConfirmPassword value={formData.confirmPassword} onChange={handleChange} />
                <SignUpContact value={formData.phone} onChange={handleChange} />
                <SignUpPart value={formData.partType} onChange={handleChange} />
                
                {error && <p className={styles.errorText}>{error}</p>}
                
                <SignUpSubmit onSubmit={handleSubmit} disabled={isLoading}>
                    {isLoading ? '요청 중...' : '가입하기'}
                </SignUpSubmit>
            </SignUpBox>
        </div>
    );
};

export default SignUpPage;