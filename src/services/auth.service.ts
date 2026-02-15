import apiClient from './api';
import { User } from '../types';
const AUTH_TOKEN_KEY = 'authToken';
const CURRENT_USER_KEY = 'current_user';

export const authService = {
  async register(fullName: string, email: string, password: string): Promise<User> {
    try {
      const response = await apiClient.post<User>('/api/auth/register', {
        fullName,
        email,
        password,
      });

      return response.data;
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Register gagal';
      throw new Error(message);
    }
  },

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    try {
      const response = await apiClient.post<{ token: string; user: User }>(
        '/api/auth/login',
        { email, password }
      );

      const { token, user } = response.data;

      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

      return { user, token };
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Login gagal';
      throw new Error(message);
    }
  },

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  getCurrentUser(): User | null {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
};
