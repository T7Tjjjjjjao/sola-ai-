import { create } from 'zustand';
import { LanguageType } from '@/types';

interface AppStore {
  language: LanguageType;
  theme: 'dark' | 'light';
  setLanguage: (lang: LanguageType) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  language: 'ar',
  theme: 'dark',
  setLanguage: (lang) => set({ language: lang }),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));
