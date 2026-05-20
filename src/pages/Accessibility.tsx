import { Accessibility } from "lucide-react";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Accessibility className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Accessibility Statement
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Our commitment to a barrier-free web experience.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Our Commitment</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre is committed to making sangamcentre.org accessible to people of all abilities. We follow Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where feasible.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Features</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Our site includes: keyboard navigation, sufficient color contrast, alt text on images, semantic HTML headings, ARIA labels on interactive elements, focus-visible indicators, skip-to-content link, dark mode for light sensitivity, and adjustable font size.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Reduced Motion</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We respect the 'prefers-reduced-motion' system setting. If enabled, our animations and transitions are minimised.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Assistive Technology</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We test our site with screen readers (NVDA, VoiceOver) and keyboard-only navigation. If you encounter issues, please tell us.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Areas for Improvement</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We are actively working on: improving color contrast on some legacy sections, adding captions to video content, providing transcripts for upcoming podcast episodes.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Feedback</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">If you experience accessibility barriers on our site, please email suryaprakash@sangamcentre.org with the page URL and a description. We aim to respond within 5 working days.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Alternative Access</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">If a page is not accessible to you, contact us and we will provide the content in an alternative format.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
