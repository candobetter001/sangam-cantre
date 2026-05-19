import React, { useState } from 'react';
import { Calendar, Play, ExternalLink, Instagram, Youtube } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Media = () => {
  const [activeTab, setActiveTab] = useState('press');

  const pressReleases: any[] = [
    // Add real press releases here when available
  ];

  const mediaAppearances: any[] = [
    // Add real media appearances here when available
  ];

  const tabs = [
    { id: "press", label: "Press Releases" },
    { id: "appearances", label: "Media Appearances" },
    { id: "videos", label: "Videos" },
    { id: "social", label: "Social Media" },
    { id: "media-kit", label: "Media Kit" },
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold newspaper-heading text-white mb-4">Media Centre</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Press releases, media appearances, and multimedia content from Sangam Centre.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-md font-semibold text-sm transition-colors ${activeTab === tab.id ? "bg-teal-600 text-white" : "text-gray-600 hover:text-teal-600 bg-white border border-gray-200"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      {activeTab === "press" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold newspaper-heading text-center mb-12">Press Releases</h2>
            {pressReleases.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-lg">
                <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-xl newspaper-body text-gray-500">No press releases yet.</p>
                <p className="text-gray-400 mt-2">Check back after our upcoming events and publications.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {pressReleases.map((r: any) => (
                  <article key={r.id} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded">Press Release</span>
                      <span className="text-gray-500 text-sm flex items-center"><Calendar className="mr-2" size={14} />{r.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold newspaper-heading mb-3">{r.title}</h3>
                    <p className="newspaper-body mb-4">{r.excerpt}</p>
                    {r.link && r.link !== "#" && <a href={r.link} className="text-teal-600 font-semibold hover:underline inline-flex items-center gap-1"><ExternalLink size={14} />Read Full Release</a>}
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Media Appearances */}
      {activeTab === "appearances" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold newspaper-heading text-center mb-12">Media Appearances</h2>
            {mediaAppearances.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-lg">
                <Play className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-xl newspaper-body text-gray-500">No media appearances listed yet.</p>
                <p className="text-gray-400 mt-2">Add real TV, print, and digital media appearances here as they happen.</p>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* Videos */}
      {activeTab === "videos" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold newspaper-heading text-center mb-4">Video Content</h2>
            <p className="text-center newspaper-body text-gray-500 mb-12">Watch recordings of our events, conferences, and panel discussions.</p>

            {/* FEATURED: IIT Bombay Conference 2024 - Replace VIDEO_ID with real YouTube ID */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-teal-50 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  {/* Replace YOUR_YOUTUBE_VIDEO_ID with the actual ID from the YouTube URL */}
                  {/* Example: if URL is https://youtube.com/watch?v=abc123, use abc123 */}
                  <div className="text-center text-white p-8">
                    <Youtube className="mx-auto mb-4 text-red-500" size={56} />
                    <p className="text-lg font-semibold">Reimagining Indian Governance — IIT Bombay 2024</p>
                    <p className="text-sm text-gray-400 mt-2">Add your YouTube video ID to display the embed here</p>
                    <a href="https://youtube.com/@sangamcentre" target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm">
                      <Youtube size={16} /> Visit our YouTube Channel
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold newspaper-heading">Reimagining Indian Governance Through Cultural and Technological Lenses</h3>
                  <p className="text-sm newspaper-body mt-1">IIT Bombay SJMSoM Conference, June 6–7, 2024</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="https://youtube.com/@sangamcentre" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                <Youtube size={20} /> Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Social Media */}
      {activeTab === "social" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold newspaper-heading text-center mb-12">Follow Sangam Centre</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Instagram */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 rounded-lg p-6 text-center">
                <Instagram className="mx-auto text-purple-600 mb-3" size={40} />
                <h3 className="text-xl font-bold newspaper-heading mb-2">Instagram</h3>
                <p className="newspaper-body text-sm mb-4">Event photos, cultural highlights, and updates</p>
                <a href="https://www.instagram.com/sangam_centre" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90">
                  <ExternalLink size={14} /> @sangam_centre
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                <FaLinkedin className="mx-auto text-blue-700 mb-3" size={40} />
                <h3 className="text-xl font-bold newspaper-heading mb-2">LinkedIn</h3>
                <p className="newspaper-body text-sm mb-4">Research updates, publications, and policy commentary</p>
                <a href="https://www.linkedin.com/company/sangam-centre/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800">
                  <ExternalLink size={14} /> Sangam Centre on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Media Kit */}
      {activeTab === "media-kit" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold newspaper-heading text-center mb-4">Media Kit</h2>
            <p className="text-center newspaper-body text-gray-500 mb-12">Resources for journalists and media professionals.</p>

            <div className="max-w-2xl mx-auto bg-teal-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold newspaper-heading mb-4">Media Inquiries</h3>
              <p className="newspaper-body mb-6">For interviews, expert commentary, speaking engagements, or additional information, please contact our team directly.</p>
              <div className="space-y-3 text-sm">
                <p className="newspaper-body"><strong>Email:</strong> <a href="mailto:suryaprakash@sangamcentre.org" className="text-teal-600 hover:underline">suryaprakash@sangamcentre.org</a></p>
                <p className="newspaper-body"><strong>Response Time:</strong> Within 24 hours</p>
              </div>
              <a href="/contact" className="mt-6 inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                <ExternalLink size={18} /> Send a Media Inquiry
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Media;
