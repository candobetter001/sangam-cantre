import { Cookie } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Cookie className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">What cookies we use and why.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">What Are Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and analyse traffic.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Cookies We Use</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We use only essential and analytics cookies. We do not use advertising or tracking cookies for marketing purposes.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Analytics Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We use Google Analytics 4 to understand how visitors use our site. Data collected is anonymised — we cannot identify individual visitors. You can opt out via the cookie banner.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Functional Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We store your dark-mode preference, cookie-consent choice, and dismissed-popup states in your browser's localStorage. These are not transmitted to our servers.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Managing Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">You can decline non-essential cookies via the consent banner on first visit. You can also clear cookies anytime through your browser settings.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Browser Settings</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">All major browsers let you block or delete cookies via Settings or Preferences. Note that disabling cookies may affect site functionality.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Third-Party Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We do not embed third-party advertising trackers. Google Analytics is the only third-party cookie used.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Updates</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We may update this Cookie Policy. Significant changes will be announced via the cookie banner.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
