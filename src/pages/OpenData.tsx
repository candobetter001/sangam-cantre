import { Database } from "lucide-react";

export default function OpenData() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Database className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Open Data Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Making research data accessible to all.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Our Stance</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre believes research that informs public policy must itself be open to public scrutiny. Where possible, we publish our underlying data, methodologies, and analyses.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">What We Publish</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Survey questionnaires, anonymised datasets, methodology notes, interview protocols, and policy-coding frameworks are released alongside major publications.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Licensing</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Open datasets are released under CC BY 4.0 unless otherwise noted. You may use, share, and adapt with attribution.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Privacy Safeguards</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Personal identifiers are removed from all released data. Interview transcripts use pseudonyms where identification could harm participants.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Where to Find It</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Data is linked from each publication's page on /publications. Direct requests may be sent to suryaprakash@sangamcentre.org.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Reuse and Citation</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Please cite the original publication when reusing our data. We are happy to provide guidance on appropriate use.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Limitations</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Some data — particularly where individuals could be identified or where partners have requested confidentiality — cannot be shared publicly. We will note this in publications.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
