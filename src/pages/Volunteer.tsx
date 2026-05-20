import { useState } from "react";
import { Heart, CheckCircle2 } from "lucide-react";

const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank you!</h1>
          <p className="text-gray-600 dark:text-gray-400">
            We've received your signup. We'll reach out when an opportunity matches your interests.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Heart className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Volunteer With Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Researchers, writers, designers, and event coordinators — we'd love your help.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
              <input
                name="name"
                required
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              City / Location
            </label>
            <input
              name="location"
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              What can you help with? *
            </label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["Research", "Writing/Editing", "Design", "Event Coordination", "Translation", "Outreach", "Tech", "Other"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <input type="checkbox" name="interests" value={opt} className="rounded text-teal-600" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Time available per week
            </label>
            <select
              name="availability"
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white"
            >
              <option value="">Select…</option>
              <option value="1-3 hrs">1–3 hours</option>
              <option value="4-8 hrs">4–8 hours</option>
              <option value="8+ hrs">More than 8 hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Brief background / motivation
            </label>
            <textarea
              name="background"
              rows={4}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Tell us a little about yourself and why you'd like to volunteer."
            />
          </div>
          <input type="hidden" name="_subject" value="New Volunteer Signup — Sangam Centre" />
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-5 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white rounded-md font-medium transition-colors"
          >
            {submitting ? "Sending…" : "Submit"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          Replace <code>YOUR_FORM_ID</code> with your Formspree ID to receive submissions at suryaprakash@sangamcentre.org.
        </p>
      </div>
    </div>
  );
}
