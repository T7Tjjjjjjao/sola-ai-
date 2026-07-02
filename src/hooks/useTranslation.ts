'use client';

import { useAppStore } from '@/store/appStore';
import { LanguageType } from '@/types';
import { t } from '@/lib/translations';

export const useTranslation = () => {
  const { language } = useAppStore();

  return {
    t: (key: string) => t(key, language),
    language,
  };
};
