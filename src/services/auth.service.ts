import axios from 'axios';
import { User } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5168';
const AUTH_TOKEN_KEY = 'auth_token';
const CURRENT_USER_KEY = 'current_user';

export const authService = {
  // Simple client-side login (for development)
  // In production, this should call backend /api/auth/login endpoint
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    try {
      // Fetch user by email from backend
      const response = await axios.get(`${API_BASE_URL}/api/users`, {
        params: { search: email }
      });

      const users = response.data.data;
      const user = users.find((u: User) => u.email === email);

      if (!user) {
        throw new Error('Email tidak ditemukan');
      }

      // For development: simple password validation
      // Production: This should be done on backend with proper BCrypt verification
      // For now, we'll just accept the login if email exists
      if (!password) {
        throw new Error('Password diperlukan');
      }

      // Store auth token (UUID or JWT - for demo we'll use a simple token)
      const token = `token_${user.id}_${Date.now()}`;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

      return { user, token };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message || 'Login gagal');
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
