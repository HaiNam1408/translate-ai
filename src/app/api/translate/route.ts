import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { text, sourceLanguage, targetLanguage } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Create prompt based on languages
    let prompt = 'Translate the following text';
    if (sourceLanguage && sourceLanguage !== 'auto') {
      prompt += ` from ${sourceLanguage}`;
    }
    if (targetLanguage) {
      prompt += ` to ${targetLanguage}`;
    }
    prompt += '. Provide only the translated text with no explanations or additional text.\n\n';
    prompt += text;

    // Call Gemini API for translation
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(prompt);
    const translatedText = result.response.text();

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Failed to translate text' },
      { status: 500 }
    );
  }
}

