import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full p-4 text-center border-t border-gray-200 bg-white">
      <a
        href="https://p2pmentor.com/lite"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-sm text-text-light hover:text-text transition-colors min-h-[44px] touch-manipulation"
      >
        <span>🌱</span>
        <span>NS Jan Cohort Ask & Offer Board</span>
      </a>
    </footer>
  );
}

