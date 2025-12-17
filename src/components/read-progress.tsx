'use client';

import {useCallback, useEffect, useState} from 'react';

export function ReadProgress() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    setProgress(scrolled);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    window.addEventListener('scroll', handleScroll, {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background z-10">
      <div className="h-full bg-primary" style={{width: `${progress}%`}} />
    </div>
  );
}
