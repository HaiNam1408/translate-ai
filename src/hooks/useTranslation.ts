'use client';

import { useCallback } from 'react';
import { useTranslateStore } from '@/store/translateStore';
import { toast } from 'sonner';

export function useTranslation() {
  const {
    sourceText,
    sourceLanguage,
    targetLanguage,
    setTranslatedText,
    setIsTranslating,
    setError,
  } = useTranslateStore();

  const translateText = useCallback(async () => {
    // Don't translate if source text is empty
    if (!sourceText.trim()) {
      return;
    }

    try {
      setIsTranslating(true);
      setError(null);

      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: sourceText,
          sourceLanguage,
          targetLanguage,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to translate text');
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Translation failed';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Translation error:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [sourceText, sourceLanguage, targetLanguage, setTranslatedText, setIsTranslating, setError]);

  return { translateText };
}
