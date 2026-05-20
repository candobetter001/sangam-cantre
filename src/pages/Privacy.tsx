import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Shield className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">How we collect, use, and protect your information.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre for Culture and Public Policy ('we', 'us') values your privacy. This policy explains what data we collect when you visit sangamcentre.org and how we use it.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We collect: (1) information you give us — your name and email when you contact us or subscribe to our newsletter; (2) basic analytics — anonymised data about visits to our site (pages viewed, time spent, referrer).</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">How We Use Information</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We use your information to respond to your inquiries, send newsletters you have opted into, improve the website, and understand which research is most useful to readers.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We use minimal analytics cookies (Google Analytics) to count visits and understand site usage. We do not use advertising cookies or share data with marketing networks. See our Cookie Policy for details.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Data Sharing</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We do not sell or rent your personal information. We share contact details only with the team members directly responding to your inquiry.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">You may request access to, correction of, or deletion of your personal data at any time by writing to suryaprakash@sangamcentre.org.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Data Retention</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We retain inquiry emails for as long as needed to respond and follow up. Newsletter signups are retained until you unsubscribe.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Changes to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We may update this policy occasionally. The 'last updated' date at the bottom of this page reflects the most recent revision.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Questions about this policy? Email suryaprakash@sangamcentre.org.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
