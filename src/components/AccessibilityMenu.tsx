import { useEffect, useState } from "react";
import { Accessibility, Plus, Minus, Type, Contrast } from "lucide-react";

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("sangam_a11y") || "{}");
      if (saved.fontSize) setFontSize(saved.fontSize);
      if (saved.highContrast) setHighContrast(true);
      if (saved.dyslexicFont) setDyslexicFont(true);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    document.documentElement.classList.toggle("high-contrast", highContrast);
    document.documentElement.classList.toggle("dyslexic-font", dyslexicFont);
    try {
      localStorage.setItem("sangam_a11y", JSON.stringify({ fontSize, highContrast, dyslexicFont }));
    } catch {}
  }, [fontSize, highContrast, dyslexicFont]);

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setDyslexicFont(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility options"
        className="fixed left-6 bottom-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg print-hidden"
        title="Accessibility options"
      >
        <Accessibility size={20} />
      </button>

      {open && (
        <div className="fixed left-6 bottom-24 z-40 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 print-hidden">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Accessibility size={16} /> Accessibility
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400 block mb-1">Text size: {fontSize}%</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setFontSize(Math.max(75, fontSize - 10))} aria-label="Decrease" className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200">
                  <Minus size={14} />
                </button>
                <input type="range" min="75" max="150" step="10" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="flex-1 accent-teal-600" />
                <button onClick={() => setFontSize(Math.min(150, fontSize + 10))} aria-label="Increase" className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200">
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-2"><Contrast size={14} /> High contrast</span>
              <input type="checkbox" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} className="accent-teal-600" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-2"><Type size={14} /> Readable font</span>
              <input type="checkbox" checked={dyslexicFont} onChange={(e) => setDyslexicFont(e.target.checked)} className="accent-teal-600" />
            </label>
            <button onClick={reset} className="w-full mt-2 text-xs text-gray-500 hover:text-teal-600 dark:text-gray-400 underline">
              Reset to defaults
            </button>
          </div>
        </div>
      )}
    </>
  );
}
