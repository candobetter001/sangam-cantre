import { useState } from "react";
import { Mic, CheckCircle2 } from "lucide-react";

const FORMSPREE_ID = "YOUR_FORM_ID";

export default function SpeakerRequest() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request received</h1>
          <p className="text-gray-600 dark:text-gray-400">
            We respond to speaker requests within 5 working days. Thank you for considering Sangam Centre.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Mic className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Request a Speaker
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Invite a Sangam researcher to your conference, panel, or workshop.
          </p>
        </div>

        <form onSubmit={submit} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name *</label>
              <input name="name" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Organisation *</label>
              <input name="organisation" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
            <input name="email" type="email" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Date</label>
              <input name="date" type="date" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Format</label>
              <select name="format" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white">
                <option value="">Select…</option>
                <option>In-person</option>
                <option>Virtual</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Topic *</label>
            <input name="topic" required className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Audience size</label>
            <input name="audience" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional context</label>
            <textarea name="context" rows={4} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white" />
          </div>
          <input type="hidden" name="_subject" value="Speaker Request — Sangam Centre" />
          <button type="submit" disabled={submitting} className="w-full px-5 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white rounded-md font-medium">
            {submitting ? "Sending…" : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
