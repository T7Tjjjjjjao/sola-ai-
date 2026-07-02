'use client';

import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string, successMessage?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(successMessage || 'تم النسخ بنجاح!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('فشل النسخ');
    }
  }, []);

  return { copyToClipboard, copied };
};
