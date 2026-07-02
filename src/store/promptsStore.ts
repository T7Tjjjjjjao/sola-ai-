import { create } from 'zustand';
import { Prompt, PromptLevel } from '@/types';

interface PromptsStore {
  prompts: Prompt[];
  savedPrompts: Prompt[];
  favorites: Prompt[];
  addPrompt: (prompt: Prompt) => void;
  addPrompts: (prompts: Prompt[]) => void;
  savePrompt: (prompt: Prompt) => void;
  removeSavedPrompt: (id: string) => void;
  toggleFavorite: (id: string) => void;
  getSavedPrompts: () => Prompt[];
  getFavorites: () => Prompt[];
  clearPrompts: () => void;
}

export const usePromptsStore = create<PromptsStore>((set, get) => ({
  prompts: [],
  savedPrompts: [],
  favorites: [],
  addPrompt: (prompt) => set((state) => ({ prompts: [...state.prompts, prompt] })),
  addPrompts: (prompts) => set((state) => ({ prompts: [...state.prompts, ...prompts] })),
  savePrompt: (prompt) =>
    set((state) => ({
      savedPrompts: [...state.savedPrompts, { ...prompt, id: `saved-${Date.now()}` }],
    })),
  removeSavedPrompt: (id) =>
    set((state) => ({
      savedPrompts: state.savedPrompts.filter((p) => p.id !== id),
    })),
  toggleFavorite: (id) =>
    set((state) => {
      const prompt = state.savedPrompts.find((p) => p.id === id);
      if (!prompt) return state;
      return {
        savedPrompts: state.savedPrompts.map((p) =>
          p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
        ),
        favorites: prompt.isFavorite
          ? state.favorites.filter((p) => p.id !== id)
          : [...state.favorites, { ...prompt, isFavorite: true }],
      };
    }),
  getSavedPrompts: () => get().savedPrompts,
  getFavorites: () => get().favorites,
  clearPrompts: () => set({ prompts: [], savedPrompts: [], favorites: [] }),
}));
