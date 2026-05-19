import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "sangam_cookie_consent_v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) setTimeout(() => setShow(true), 1200);
    } catch {
      setTimeout(() => setShow(true), 1200);
    }
  }, []);

  const respond = (value: "accept" | "decline") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 print-hidden animate-slide-bottom">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="text-teal-600 dark:text-teal-300 shrink-0 mt-0.5" size={22} />
          <div className="text-sm text-gray-700 dark:text-gray-300">
            We use minimal analytics cookies to understand how visitors use this
            site. No personal data is shared with third parties.
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => respond("decline")}
            className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => respond("accept")}
            className="px-4 py-2 text-sm bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
