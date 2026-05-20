import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface Props {
  targetDate: string;
  label?: string;
}

export default function EventCountdown({ targetDate, label = "Next event in" }: Props) {
  const target = new Date(targetDate).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = target - now;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const cell = (n: number, unit: string) => (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold tabular-nums text-white">{n.toString().padStart(2, "0")}</div>
      <div className="text-xs text-teal-100 uppercase tracking-wider">{unit}</div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg p-4 md:p-6 text-white">
      <div className="flex items-center gap-2 text-sm text-teal-100 mb-3">
        <Clock size={14} /> {label}
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-6">
        {cell(days, "Days")}
        {cell(hours, "Hours")}
        {cell(minutes, "Min")}
        {cell(seconds, "Sec")}
      </div>
    </div>
  );
}
