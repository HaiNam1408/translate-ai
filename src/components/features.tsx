'use client';

import {
  MdTranslate,
  MdOutlineAutoAwesome,
  MdOutlineLanguage,
  MdOutlineSecurityUpdateGood
} from 'react-icons/md';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Features() {
  const features = [
    {
      icon: <MdTranslate className="h-8 w-8" />,
      title: 'Instant Translation',
      description: 'Translate text quickly and accurately between 100+ languages using advanced AI technology.'
    },
    {
      icon: <MdOutlineAutoAwesome className="h-8 w-8" />,
      title: 'AI-Powered Quality',
      description: 'Our app uses advanced language models to ensure natural-sounding, contextually accurate translations.'
    },
    {
      icon: <MdOutlineLanguage className="h-8 w-8" />,
      title: 'Wide Language Support',
      description: 'Translate to and from over 100 global languages with high accuracy.'
    },
    {
      icon: <MdOutlineSecurityUpdateGood className="h-8 w-8" />,
      title: 'Secure Processing',
      description: 'Your text is processed securely and not stored after translation is complete.'
    }
  ];

  return (
    <div className="py-12 container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Features</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Our AI-powered translation tool offers multiple features designed to make
          language translation fast, accurate, and easy to use.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="border bg-card text-card-foreground shadow-sm">
            <CardHeader className="pb-2">
              <div className="text-primary mb-2">{feature.icon}</div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
