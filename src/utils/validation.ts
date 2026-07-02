/**
 * دوال التحقق من الصحة
 */

export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPassword = (password: string): boolean => {
  return password.length >= 8;
};

export const isUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isEmpty = (value: any): boolean => {
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'string') return value.trim().length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return !value;
};

export const isArabic = (text: string): boolean => {
  const arabicRegex = /[\u0600-\u06FF]/g;
  return arabicRegex.test(text);
};

export const isEnglish = (text: string): boolean => {
  const englishRegex = /[a-zA-Z]/g;
  return englishRegex.test(text);
};
