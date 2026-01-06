'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Timer } from '@/components/Timer';
import { PromptDisplay } from '@/components/PromptDisplay';
import { Footer } from '@/components/Footer';
import hotSeatPrompts from '@/data/hotSeatPrompts.json';

export default function HotSeatPage() {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  const prompts = hotSeatPrompts.prompts;
  const currentPrompt = prompts[currentPromptIndex] || prompts[0];

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full gap-6 sm:gap-8">
        <Link
          href="/"
          className="self-start mb-2 px-4 py-2 text-text-light hover:text-text transition-colors text-base font-medium min-h-[44px] flex items-center touch-manipulation"
        >
          ← Back
        </Link>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8">
          <Timer initialDuration={180} />
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

      <Footer />
    </div>
  );
}

