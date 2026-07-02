'use client';

import { usePromptsStore } from '@/store/promptsStore';
import { Prompt } from '@/types';

export const usePrompts = () => {
  const store = usePromptsStore();

  return {
    prompts: store.prompts,
    savedPrompts: store.savedPrompts,
    favorites: store.favorites,
    addPrompt: store.addPrompt,
    addPrompts: store.addPrompts,
    savePrompt: store.savePrompt,
    removeSavedPrompt: store.removeSavedPrompt,
    toggleFavorite: store.toggleFavorite,
    getSavedPrompts: store.getSavedPrompts,
    getFavorites: store.getFavorites,
    clearPrompts: store.clearPrompts,
  };
};
