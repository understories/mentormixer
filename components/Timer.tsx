'use client';

import { useTimer } from '@/hooks/useTimer';
import { TimerDisplay } from './TimerDisplay';
import { TimerControls } from './TimerControls';

interface TimerProps {
  initialDuration: number; // seconds
  onComplete?: () => void;
  onReset?: () => void;
}

export function Timer({ initialDuration, onComplete, onReset }: TimerProps) {
  const { remaining, state, start, stop, reset } = useTimer({
    initialDuration,
    onComplete,
  });

  const handleReset = () => {
    reset();
    onReset?.();
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8">
      <TimerDisplay time={remaining} maxTime={initialDuration} />
      <TimerControls state={state} onStart={start} onStop={stop} onReset={handleReset} />
    </div>
  );
}

