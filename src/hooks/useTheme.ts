'use client';

import { useAppStore } from '@/store/appStore';

export const useTheme = () => {
  const { theme, setTheme, toggleTheme } = useAppStore();

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
