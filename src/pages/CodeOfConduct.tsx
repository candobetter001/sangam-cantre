import { Heart } from "lucide-react";

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Heart className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Code of Conduct
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Our shared commitment to respectful engagement.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Our Pledge</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre is committed to creating a safe, inclusive, and respectful environment at all our events, dialogues, and online platforms — regardless of age, gender, religion, caste, disability, ethnicity, or background.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Expected Behavior</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We expect participants to: be respectful and constructive; engage in good faith; respect diverse viewpoints; respect privacy and consent; credit the work of others.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Unacceptable Behavior</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Harassment, discrimination, threats, sustained disruption, plagiarism, and any form of intimidation are not tolerated.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Reporting Concerns</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">If you experience or witness unacceptable behavior at a Sangam event or platform, please report it confidentially to suryaprakash@sangamcentre.org. All reports are taken seriously and handled with discretion.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Consequences</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Violations may result in warnings, removal from the event, and bans from future engagement. Serious violations may be reported to relevant authorities.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Scope</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">This Code applies to all Sangam Centre events (in-person and virtual), our website, and our communications.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Acknowledgement</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Inspired by the Contributor Covenant and CHI Code of Conduct, adapted to the Indian research community context.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
