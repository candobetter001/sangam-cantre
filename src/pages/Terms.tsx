import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <FileText className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Terms of Use
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Terms governing your use of sangamcentre.org.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Acceptance of Terms</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">By accessing or using sangamcentre.org, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Content</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">All content on this site — publications, briefs, articles, images, and design — is the intellectual property of Sangam Centre or its respective authors. You may quote, cite, and share content with proper attribution.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Permitted Use</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">You may read, download, and share our publications for non-commercial educational and research purposes. Commercial use requires written permission.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">User Submissions</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Information you submit through forms (contact, volunteer, collaboration) is governed by our Privacy Policy.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">External Links</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Our site contains links to third-party websites. We are not responsible for their content or privacy practices.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Content on this site is provided for informational purposes. While we strive for accuracy, we make no warranties about the completeness, reliability, or suitability of the information for any specific purpose.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in New Delhi.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">For questions, email suryaprakash@sangamcentre.org.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
