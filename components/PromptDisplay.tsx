interface PromptDisplayProps {
  prompt: string;
}

export function PromptDisplay({ prompt }: PromptDisplayProps) {
  return (
    <div className="w-full p-6 sm:p-8 bg-white rounded-2xl shadow-sm">
      <p className="text-lg sm:text-xl md:text-2xl text-text text-center leading-relaxed font-medium">
        {prompt}
      </p>
    </div>
  );
}

