import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What is Sangam Centre?",
    a: "Sangam Centre for Culture and Public Policy is a research initiative at the intersection of Indian cultural heritage and contemporary governance. We conduct interdisciplinary research, host policy dialogues, and publish briefs that inform decision-makers, scholars, and the public.",
  },
  {
    q: "How can I collaborate with Sangam Centre?",
    a: "We welcome collaboration from researchers, institutions, policymakers, and practitioners. Visit /collaborate to submit a proposal, or email suryaprakash@sangamcentre.org with a brief outline.",
  },
  {
    q: "Are your publications free to access?",
    a: "Yes. All our publications, policy briefs, and working papers are freely downloadable from the Publications page. We believe in open access for public-interest research.",
  },
  {
    q: "Can I cite your research?",
    a: "Absolutely. Each publication on our site has a Citation button that generates ready-to-paste citations in BibTeX, APA, MLA, and Chicago formats.",
  },
  {
    q: "Do you host internships?",
    a: "Yes — we periodically open research-assistant and internship positions. Check the Work With Us page or follow our LinkedIn for announcements.",
  },
  {
    q: "Can I invite a Sangam researcher to speak at my event?",
    a: "Please submit a speaker request via /speaker-request with details about the event, audience, and topic. We respond within 5 working days.",
  },
  {
    q: "How do you fund your work?",
    a: "Sangam Centre is supported by institutional grants, individual donations, and conference partnerships. See our Annual Reports for financial transparency.",
  },
  {
    q: "Do you accept volunteer support?",
    a: "Yes — researchers, writers, designers, and event coordinators are welcome. Sign up at /volunteer and we'll get in touch when an opportunity matches your skills.",
  },
  {
    q: "Is the website available in Hindi?",
    a: "We currently publish in English. Select publications are available in Hindi or Sanskrit on request — contact us if you need a translation.",
  },
  {
    q: "How can journalists reach you?",
    a: "For press inquiries, contact suryaprakash@sangamcentre.org or use the form on the Press Kit page. Media kit, logos, and team photos are available for download.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <HelpCircle className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={40} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Common questions about our research, collaboration, and engagement.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-gray-900 dark:text-white pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-teal-600 dark:text-teal-300 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-4 pb-4 pt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          Didn't find your question?{" "}
          <a href="/contact" className="text-teal-600 dark:text-teal-300 hover:underline">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
