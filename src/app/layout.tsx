'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/appStore';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAppStore();

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sola AI - منصة توليد البرومبتات</title>
        <meta name="description" content="منصة احترافية لتوليد برومبتات عالية الجودة" />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}
