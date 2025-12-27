import axios from "axios";

// ============ Interfaces ============

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  part: "WEB" | "SERVER" | "DESIGN" | "PM";
  role: "MEMBER" | "ADMIN" | "GUEST";
  isApproved: boolean;
  isProfileCompleted: boolean;
  isActive: boolean;
  createdAt: string;
  lastLoginAt: string;
  profileImageUrl: string;
  emailVerified: boolean;
  rejectionReason: string;
}

export interface LoginResponse {
  token: {
    accessToken: string;
  };
  user: User;
}

export interface SignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  partType: "WEB" | "BACKEND" | "DESIGN" | "PM" | "MOBILE" | "ORGANIZER";
}

export interface SignUpResponse {
  message: string;
}

// ============ Axios Instance ============

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 헤더에 토큰 자동 추가
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ============ Auth API ============

/** POST /auth/login */
export const login = (email: string, password: string) => {
  return api.post<LoginResponse>("/auth/login", { email, password });
};

/** POST /auth/signup */
export const signUp = (data: SignUpRequest) => {
  return api.post<SignUpResponse>("/auth/signup", data);
};

// googleLogin 함수 삭제됨 (POST 요청 불필요)

export const verifyEmail = (token: string) => {
  return api.get("/auth/verify-email", { params: { token } });
};

// ============ Member API ============

/** DELETE /member/:id */
export const deleteMember = (id: number) => {
  return api.delete(`/member/${id}`);
};

/** PUT /member/:id */
export const updateMember = (
  id: number,
  data: {
    userName: string;
    phoneNumber: string;
    position: string;
  }
) => {
  return api.put(`/member/${id}`, data);
};

/** POST /member */
export const createMember = (data: {
  userName: string;
  phoneNumber: string;
  position: string;
}) => {
  return api.post("/member", data);
};