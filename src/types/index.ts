/**
 * أنواع البيانات الأساسية للتطبيق
 */

export type LanguageType = 'ar' | 'en';

export type PromptLevel = 1 | 2 | 3 | 4 | 5;

export interface Prompt {
  id: string;
  title: string;
  content: string;
  level: PromptLevel;
  category: string;
  language: LanguageType;
  userInput: string;
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
  usageCount: number;
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  language: LanguageType;
  tags: string[];
  rating: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  language: LanguageType;
  theme: 'dark' | 'light';
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedPrompt {
  id: string;
  userId: string;
  promptId: string;
  title: string;
  content: string;
  level: PromptLevel;
  category: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  language: LanguageType;
}

export interface GeneratedPrompts {
  userInput: string;
  language: LanguageType;
  prompts: {
    level: PromptLevel;
    content: string;
    title: string;
  }[];
  generatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
