import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "sangam_welcome_seen_v1";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        const t = setTimeout(() => setShow(true), 1800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage blocked — show anyway
      const t = setTimeout(() => setShow(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setClosing(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setTimeout(() => setShow(false), 250);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center px-4 print-hidden ${
        closing ? "animate-fade-out" : "animate-fade-in"
      }`}
      onClick={dismiss}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden ${
          closing ? "" : "animate-bounce-in"
        }`}
      >
        <button
          onClick={dismiss}
          aria-label="Close welcome popup"
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <X size={22} />
        </button>

        {/* gradient header */}
        <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-indigo-700 px-6 py-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 50%)",
              }}
            />
          </div>
          <div className="relative">
            <Sparkles size={36} className="mx-auto mb-3 animate-pulse" />
            <h2 className="text-2xl font-serif font-bold mb-1">
              Welcome to Sangam Centre
            </h2>
            <p className="text-teal-50 text-sm">
              Where heritage and policy meet
            </p>
          </div>
        </div>

        {/* body */}
        <div className="px-6 py-6 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
            Discover our research, events, and publications at the
            intersection of Indian culture and public policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              to="/about"
              onClick={dismiss}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium text-sm transition-colors"
            >
              Learn About Us
            </Link>
            <button
              onClick={dismiss}
              className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium text-sm transition-colors"
            >
              Explore Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
