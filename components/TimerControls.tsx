'use client';

type TimerState = 'idle' | 'running' | 'paused' | 'completed';

interface TimerControlsProps {
  state: TimerState;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export function TimerControls({ state, onStart, onStop, onReset }: TimerControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <button
        onClick={onStart}
        disabled={state === 'running'}
        className="flex-1 sm:flex-none px-6 py-3 sm:px-8 sm:py-4 bg-primary-green text-white rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform min-h-[48px] touch-manipulation"
      >
        Start
      </button>
      <button
        onClick={onStop}
        disabled={state !== 'running'}
        className="flex-1 sm:flex-none px-6 py-3 sm:px-8 sm:py-4 bg-earth text-white rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform min-h-[48px] touch-manipulation"
      >
        Stop
      </button>
      <button
        onClick={onReset}
        className="flex-1 sm:flex-none px-6 py-3 sm:px-8 sm:py-4 bg-warm text-white rounded-xl font-semibold text-lg active:scale-95 transition-transform min-h-[48px] touch-manipulation"
      >
        Reset
      </button>
    </div>
  );
}

