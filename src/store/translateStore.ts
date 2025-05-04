'use client';

import { create } from 'zustand';

export interface TranslateStore {
  sourceText: string;
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  isTranslating: boolean;
  error: string | null;

  // Actions
  setSourceText: (text: string) => void;
  setTranslatedText: (text: string) => void;
  setSourceLanguage: (lang: string) => void;
  setTargetLanguage: (lang: string) => void;
  setIsTranslating: (status: boolean) => void;
  setError: (error: string | null) => void;
  resetTranslation: () => void;
  swapLanguages: () => void;
}

export const useTranslateStore = create<TranslateStore>((set) => ({
  sourceText: '',
  translatedText: '',
  sourceLanguage: 'auto',
  targetLanguage: 'es', // Spanish as default target
  isTranslating: false,
  error: null,

  // Actions
  setSourceText: (text) => set({ sourceText: text }),
  setTranslatedText: (text) => set({ translatedText: text }),
  setSourceLanguage: (lang) => set({ sourceLanguage: lang }),
  setTargetLanguage: (lang) => set({ targetLanguage: lang }),
  setIsTranslating: (status) => set({ isTranslating: status }),
  setError: (error) => set({ error }),
  resetTranslation: () => set({
    sourceText: '',
    translatedText: '',
    error: null
  }),
  swapLanguages: () => set((state) => {
    if (state.sourceLanguage === 'auto') return state;

    return {
      sourceLanguage: state.targetLanguage,
      targetLanguage: state.sourceLanguage,
      sourceText: state.translatedText,
      translatedText: state.sourceText
    };
  }),
}));
