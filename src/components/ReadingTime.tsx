import { Clock } from "lucide-react";

const WPM = 220;

export default function ReadingTime({ text, words }: { text?: string; words?: number }) {
  const wordCount = words ?? (text ? text.trim().split(/\s+/).length : 0);
  const minutes = Math.max(1, Math.round(wordCount / WPM));
  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
      <Clock size={12} />
      {minutes} min read
    </span>
  );
}
