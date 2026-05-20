import { Camera } from "lucide-react";

export default function PressKit() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Camera className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Press Kit
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Resources for journalists, partners, and media.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">About Sangam Centre</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre for Culture and Public Policy is a research initiative at the confluence of Indian cultural heritage and contemporary governance. Founded to bridge cultural research and policy practice, the Centre publishes briefs, hosts dialogues, and partners with institutions across India.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Quick Facts</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">• Founded: 2024
• Headquarters: New Delhi, India
• Team: 7+ researchers and associates
• Publications: 6+ peer-reviewed papers and policy briefs
• Events: Annual conferences, monthly dialogues
• Partners: IIT Bombay SJMSoM, University of Delhi, Rishihood University, XIM University</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Media Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">For interview requests, comment, or background — contact:

Suryaprakash · Operations & Research
suryaprakash@sangamcentre.org

Divya Rathore · Delhi Head
divya.r@sangamcentre.org

Response time: 48 hours; mark urgent inquiries as URGENT.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Boilerplate</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Sangam Centre is a research and policy initiative at the confluence of Indian heritage and contemporary governance. Through interdisciplinary research, public dialogue, and policy engagement, the Centre works to inform decision-makers and strengthen cultural institutions.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Spokespeople</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Available for comment on: cultural policy, environmental governance, water management, inclusive governance, soft power, heritage preservation, and Indian Knowledge Systems.</p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-teal-100 mb-3">Logo & Visual Assets</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">Logo files (SVG, PNG transparent), team photos, and event photos are available on request — email the media contact above.</p>
        </section>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            Last updated: 20 May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
