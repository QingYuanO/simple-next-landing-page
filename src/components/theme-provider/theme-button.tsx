'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';

export default function ThemeToggleBtn() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    if (theme === 'system') {
      const themeMedia = window.matchMedia('(prefers-color-scheme: light)');
      if (themeMedia.matches) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
    setMounted(true);
  }, [setTheme, theme]);

  if (!mounted) {
    return null;
  }
  return (
    <Button variant="ghost" className="text-lg" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} size="icon">
      {theme === 'light' ? <i className="i-lucide-sun"></i> : <i className="i-lucide-moon"></i>}
    </Button>
  );
}
