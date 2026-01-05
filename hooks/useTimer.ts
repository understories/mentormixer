'use client';

import { useState, useEffect, useRef } from 'react';

interface UseTimerOptions {
  initialDuration: number; // seconds
  onComplete?: () => void;
}

type TimerState = 'idle' | 'running' | 'paused' | 'completed';

export function useTimer({ initialDuration, onComplete }: UseTimerOptions) {
  const [remaining, setRemaining] = useState(initialDuration);
  const [state, setState] = useState<TimerState>('idle');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (state === 'idle' || state === 'paused') {
      setState('running');
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            setState('completed');
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stop = () => {
    if (state === 'running') {
      setState('paused');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const reset = () => {
    setState('idle');
    setRemaining(initialDuration);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { remaining, state, start, stop, reset };
}

