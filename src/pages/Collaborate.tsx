import { useState } from "react";
import { Handshake, CheckCircle2 } from "lucide-react";

const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Collaborate() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch {}
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle2 className="text-teal-500 mx-auto mb-4" size={48} />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Proposal received</h1>
          <p className="text-gray-600 dark:text-gray-400">We'll review and get back to you within 7 working days.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Handshake className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Research Collaboration
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Propose joint research, co-authored publications, or institutional partnerships.
          </p>
        </div>

        <form onSubmit={submit} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
              <input name="name" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Affiliation *</label>
              <input name="affiliation" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
            <input name="email" type="email" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type of collaboration *</label>
            <select name="type" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white">
              <option value="">Select…</option>
              <option>Joint research project</option>
              <option>Co-authored publication</option>
              <option>Conference / event partnership</option>
              <option>Data sharing</option>
              <option>Student exchange / mentorship</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Proposal summary *</label>
            <textarea name="proposal" required rows={6} placeholder="What do you propose? Why is it a good fit for Sangam Centre? What outcomes do you envision?" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
            <input name="timeline" placeholder="e.g. 6 months, 1 year" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <input type="hidden" name="_subject" value="Research Collaboration Proposal — Sangam Centre" />
          <button type="submit" disabled={submitting} className="w-full px-5 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white rounded-md font-medium">
            {submitting ? "Sending…" : "Submit Proposal"}
          </button>
        </form>
      </div>
    </div>
  );
}
