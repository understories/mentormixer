'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Timer } from '@/components/Timer';
import { InstructionsBanner } from '@/components/InstructionsBanner';
import { PromptDisplay } from '@/components/PromptDisplay';
import { SwitchIndicator } from '@/components/SwitchIndicator';
import { Footer } from '@/components/Footer';
import speedRoundPrompts from '@/data/speedRoundPrompts.json';

type Turn = 'person_a' | 'person_b';

export default function SpeedRoundPage() {
  const [currentTurn, setCurrentTurn] = useState<Turn>('person_a');
  const [showSwitch, setShowSwitch] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const prompts = speedRoundPrompts.prompts;
  const currentPrompt = prompts[currentPromptIndex] || prompts[0];

  const handleTimerComplete = () => {
    setShowSwitch(true);
    setTimeout(() => {
      setShowSwitch(false);
      setCurrentTurn((prev) => (prev === 'person_a' ? 'person_b' : 'person_a'));
      // Force timer to reset by changing key
      setTimerKey((prev) => prev + 1);
    }, 2000);
  };

  const handleReset = () => {
    setCurrentTurn('person_a');
    setShowSwitch(false);
    setTimerKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full gap-6 sm:gap-8">
        <Link
          href="/"
          className="self-start mb-2 px-4 py-2 text-text-light hover:text-text transition-colors text-base font-medium min-h-[44px] flex items-center touch-manipulation"
        >
          ← Back
        </Link>
        <InstructionsBanner text='Answer with specifics: a concrete example, artifact, or decision you made. Prefer "what I did" over "what I believe." It&apos;s always allowed to say: "Pass / not sure yet." Only click "Next Prompt" if both people pass.' />

        <div className="text-center mb-4">
          <div className="text-lg sm:text-xl font-heading font-semibold text-text">
            Current: {currentTurn === 'person_a' ? 'Person A' : 'Person B'}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8">
          <Timer
            key={`${currentTurn}-${timerKey}`}
            initialDuration={60}
            onComplete={handleTimerComplete}
            onReset={handleReset}
          />
        </div>

        <PromptDisplay prompt={currentPrompt} />

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
            }}
            className="px-6 py-3 bg-primary-green-light text-white rounded-xl font-semibold text-base active:scale-95 transition-transform min-h-[48px] touch-manipulation"
          >
            Next Prompt
          </button>
        </div>
      </div>

      {showSwitch && <SwitchIndicator />}
      <Footer />
    </div>
  );
}

