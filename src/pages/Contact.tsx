import React, { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";

// SETUP: Sign up at https://formspree.io (free), create a form for suryaprakash@sangamcentre.org,
// then replace YOUR_FORM_ID below with the ID from your form endpoint.
const FORMSPREE_ID = "YOUR_FORM_ID";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold newspaper-heading text-white mb-4">Contact Us</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Reach out for research collaboration, media inquiries, or general questions about Sangam Centre.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold newspaper-heading mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-teal-600 mt-1 flex-shrink-0" size={22} />
                  <div>
                    <p className="font-semibold newspaper-body">Email</p>
                    <a href="mailto:divya.r@sangamcentre.org" className="text-teal-600 hover:underline block">divya.r@sangamcentre.org</a>
                    <a href="mailto:suryaprakash@sangamcentre.org" className="text-teal-600 hover:underline block">suryaprakash@sangamcentre.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-teal-600 mt-1 flex-shrink-0" size={22} />
                  <div>
                    <p className="font-semibold newspaper-body">Affiliated With</p>
                    <p className="newspaper-body">Shailesh J. Mehta School of Management, IIT Bombay</p>
                    <p className="newspaper-body">University of Delhi</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="font-bold newspaper-heading mb-3">Response Time</h3>
                <p className="newspaper-body text-sm">We typically respond within 48 hours. For urgent media inquiries, please mention "URGENT" in the subject line.</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold newspaper-heading mb-6">Send a Message</h2>
              {status === "success" ? (
                <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold">Thank you! Your message has been sent.</p>
                  <p className="text-sm mt-2">We'll get back to you within 48 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-4 text-teal-600 hover:underline text-sm">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium newspaper-body mb-1">Full Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium newspaper-body mb-1">Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium newspaper-body mb-1">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                      <option value="">Select a topic...</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Event Registration">Event Registration</option>
                      <option value="Work with Us">Work with Us</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium newspaper-body mb-1">Message *</label>
                    <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-vertical" />
                  </div>
                  {status === "error" && (
                    <p className="text-red-600 text-sm">Something went wrong. Please email us directly at suryaprakash@sangamcentre.org</p>
                  )}
                  <button type="submit" disabled={status === "sending"}
                    className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60">
                    <Send size={18} />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
