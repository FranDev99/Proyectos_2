import type { User } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { loginAction } from '../actions/login.action'

type AuthStatus = 'aunthenticated' | 'not-authenticated' | 'checking';

type AuthState = {
    user: User | null
    token: string | null
    authStatus: AuthStatus

    login: (email: string, password: string) => Promise<boolean>
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    user: null,
    token: null,
    authStatus: 'checking',

    login: async (email: string, password: string) => {
        try {
            const data = await loginAction(email, password);
            localStorage.setItem('token', data.token);

            set({ user: data.user, token: data.token });
            return true;

        } catch (error) {
            set({ user: null, token: null });
            localStorage.removeItem('token');
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('token')
        set({ user: null, token: null });
    }
}))