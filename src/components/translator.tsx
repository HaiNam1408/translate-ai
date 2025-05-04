'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslateStore } from '@/store/translateStore';
import { LanguageSelector } from '@/components/language-selector';
import { TranslationInput } from '@/components/translation-input';
import { useTranslation } from '@/hooks/useTranslation';
import { MdSwapHoriz } from 'react-icons/md';
import { Toaster } from 'sonner';

export function Translator() {
  const {
    sourceText,
    translatedText,
    sourceLanguage,
    targetLanguage,
    isTranslating,
    setSourceText,
    setSourceLanguage,
    setTargetLanguage,
    swapLanguages,
  } = useTranslateStore();

  const { translateText } = useTranslation();

  // Automatically translate after a short delay when text changes
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (sourceText.trim() && !isTranslating) {
        translateText();
      }
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [sourceText, sourceLanguage, targetLanguage, isTranslating, translateText]);

  // Handle swap button click
  const handleSwap = () => {
    if (sourceLanguage !== 'auto') {
      swapLanguages();
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Toaster position="top-center" richColors />

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            {/* Language selectors */}
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <LanguageSelector
                  value={sourceLanguage}
                  onChange={setSourceLanguage}
                  isSource
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleSwap}
                disabled={sourceLanguage === 'auto'}
                className="h-10 w-10 flex-shrink-0"
              >
                <MdSwapHoriz className="h-5 w-5" />
              </Button>

              <div className="flex-1">
                <LanguageSelector
                  value={targetLanguage}
                  onChange={setTargetLanguage}
                />
              </div>
            </div>

            {/* Translation panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <TranslationInput
                  value={sourceText}
                  onChange={setSourceText}
                  placeholder="Enter text to translate..."
                  canClear
                />
              </div>

              <div>
                <TranslationInput
                  value={translatedText}
                  placeholder="Translation will appear here..."
                  readOnly
                  canCopy
                />
              </div>
            </div>

            {/* Translation button */}
            <div className="flex justify-center">
              <Button
                onClick={translateText}
                disabled={!sourceText.trim() || isTranslating}
                className="px-8"
              >
                {isTranslating ? 'Translating...' : 'Translate'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
