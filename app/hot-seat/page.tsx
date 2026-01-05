'use client';

import Link from 'next/link';
import { Timer } from '@/components/Timer';
import { InstructionsBanner } from '@/components/InstructionsBanner';
import { Footer } from '@/components/Footer';

export default function HotSeatPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full gap-6 sm:gap-8">
        <Link
          href="/"
          className="self-start mb-2 px-4 py-2 text-text-light hover:text-text transition-colors text-base font-medium min-h-[44px] flex items-center touch-manipulation"
        >
          ← Back
        </Link>
        <InstructionsBanner />

        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8">
          <Timer initialDuration={180} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

