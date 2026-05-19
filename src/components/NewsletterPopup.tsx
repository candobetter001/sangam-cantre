import { useEffect, useState } from "react";
import { X, Mail, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "sangam_newsletter_v1";

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (dismissed) return;
    } catch {}

    const handler = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setShow(true);
        window.removeEventListener("scroll", handler);
      }
    };
    const timer = setTimeout(() => setShow(true), 45000);
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setShow(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Open mailto fallback — user adds Formspree endpoint later
    setSubmitted(true);
    setTimeout(dismiss, 2500);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60] max-w-sm print-hidden animate-slide-right">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <button
          onClick={dismiss}
          aria-label="Dismiss newsletter"
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="p-6 text-center">
            <CheckCircle2 className="text-teal-500 mx-auto mb-2 animate-bounce-in" size={40} />
            <p className="text-gray-800 dark:text-gray-100 font-medium">Thank you!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We'll be in touch.
            </p>
          </div>
        ) : (
          <div className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-teal-50 dark:bg-teal-900 p-2 rounded-lg">
                <Mail className="text-teal-600 dark:text-teal-300" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Stay updated
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Research briefs, event invites, and publications.
                </p>
              </div>
            </div>
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
