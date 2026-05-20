import { Users } from "lucide-react";

export default function Diversity() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Users className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Diversity & Inclusion
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Our commitment to representation and inclusive research.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Our Stance</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre believes diverse voices produce richer research. Our work intentionally engages perspectives across India's regions, languages, religions, castes, genders, and lived experiences.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">In Our Team</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We actively recruit researchers and associates from underrepresented communities. Mentorship and growth opportunities are open to all.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">In Our Research</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Our research methodologies seek out community voices, particularly those historically excluded from policy discourse. We document oral traditions, regional perspectives, and grassroots practice alongside academic literature.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">In Our Events</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We design our events for accessibility: language support, regional rotation, hybrid formats, and travel support for participants who need it.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Equal Opportunity</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">We do not discriminate on the basis of religion, caste, gender, sexual orientation, disability, age, or national origin in hiring, programs, or partnerships.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Continuous Learning</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Diversity work is ongoing. We hold ourselves accountable through annual reviews, public reporting, and feedback channels.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">To share feedback or discuss collaboration with diverse communities, email suryaprakash@sangamcentre.org.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
