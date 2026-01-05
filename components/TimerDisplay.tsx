'use client';

import { formatTime } from '@/utils/formatTime';

interface TimerDisplayProps {
  time: number; // seconds
  maxTime: number; // maximum time for percentage calculation
}

export function TimerDisplay({ time, maxTime }: TimerDisplayProps) {
  // Color transitions: Green → Yellow → Red
  const getColor = () => {
    const percentage = time / maxTime;
    
    if (percentage > 0.5) return 'text-primary-green';
    if (percentage > 0.2) return 'text-warm';
    return 'text-red-600';
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${getColor()} font-mono font-bold transition-colors duration-300`}
        style={{
          fontSize: 'clamp(48px, 12vw, 96px)',
          lineHeight: '1.2',
        }}
      >
        {formatTime(time)}
      </div>
    </div>
  );
}

