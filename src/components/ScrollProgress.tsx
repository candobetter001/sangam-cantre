import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none print-hidden">
      <div
        className="h-full bg-gradient-to-r from-teal-500 via-teal-400 to-indigo-500 shadow-md transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
