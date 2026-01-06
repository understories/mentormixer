interface InstructionsBannerProps {
  text: string;
}

export function InstructionsBanner({ text }: InstructionsBannerProps) {
  return (
    <div className="w-full p-4 bg-warm-light/20 rounded-xl border border-warm/30 mb-6">
      <p className="text-sm sm:text-base text-text text-center leading-relaxed">
        {text}
      </p>
    </div>
  );
}

