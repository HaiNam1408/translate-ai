'use client';

import { languages } from '@/lib/languages';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  isSource?: boolean;
}

export function LanguageSelector({
  value,
  onChange,
  label,
  isSource = false,
}: LanguageSelectorProps) {
  // Filter out "auto" option for target language
  const languageOptions = isSource
    ? languages
    : languages.filter(lang => lang.code !== 'auto');

  return (
    <div className="flex flex-col space-y-1">
      {label && <span className="text-sm text-gray-500">{label}</span>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={isSource ? "Detect language" : "Select language"} />
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
