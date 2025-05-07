'use client';

import { useEffect, useRef, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MdClear, MdContentCopy } from 'react-icons/md';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { toast } from 'sonner';

interface TranslationInputProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  canClear?: boolean;
  canCopy?: boolean;
}

export function TranslationInput({
  value,
  onChange,
  placeholder = 'Type something here...',
  maxLength = 10000,
  readOnly = false,
  canClear = false,
  canCopy = false,
}: TranslationInputProps) {
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength && onChange) {
      onChange(newValue);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange('');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy text');
      console.error('Copy error:', error);
    }
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="relative flex-grow">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="min-h-[200px] resize-none w-full font-sans text-base"
          readOnly={readOnly}
        />
      </div>

      <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
        <div>
          {maxLength && (
            <span>
              {charCount} / {maxLength} characters
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {canClear && value && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClear}
                    className="h-8 w-8"
                  >
                    <MdClear className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Clear text</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {canCopy && value && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopy}
                    className="h-8 w-8"
                  >
                    <MdContentCopy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  );
}
