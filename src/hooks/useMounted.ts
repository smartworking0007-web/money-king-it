import { useState, useEffect } from 'react';

export function useMounted() {
  // 1. Initialize state based on whether window exists
  const [mounted, setMounted] = useState(typeof window !== 'undefined');

  // 2. Sync it after the first render to ensure client consistency
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}