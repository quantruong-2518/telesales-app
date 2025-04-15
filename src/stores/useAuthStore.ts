import { create } from 'zustand';
import { IAuthState } from '@/types/authStore.type';

export const useAuthStore = create<IAuthState>((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
