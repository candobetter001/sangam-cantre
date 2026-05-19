import React from "react";
import { Headphones, Mic, ExternalLink } from "lucide-react";

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com", color: "bg-green-500", icon: "🎵" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com", color: "bg-purple-600", icon: "🎙️" },
  { name: "YouTube", url: "https://youtube.com/@sangamcentre", color: "bg-red-600", icon: "▶️" },
  { name: "Google Podcasts", url: "https://podcasts.google.com", color: "bg-blue-600", icon: "🎧" },
];

const upcomingEpisodes = [
  {
    title: "Culture as the Foundation of Good Governance",
    guest: "Prof. Rana Prithviraj Singh",
    description: "A deep conversation on how Indian cultural values can reshape public administration and policy.",
    status: "Coming Soon",
  },
  {
    title: "India's Soft Power: Heritage in a Multipolar World",
    guest: "Divya Rathore",
    description: "Exploring how India's cultural diplomacy strategy is evolving in the 21st century.",
    status: "Coming Soon",
  },
  {
    title: "Environmental Governance Through Indian Knowledge Systems",
    guest: "Saiyami Bhardwaj & Abhishek Bharti",
    description: "Integrating traditional wisdom with modern policy frameworks for a sustainable India.",
    status: "Coming Soon",
  },
];

const Podcast = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Headphones className="mx-auto mb-4 text-teal-200" size={56} />
          <h1 className="text-4xl md:text-5xl font-bold newspaper-heading text-white mb-4">Sangam Centre Podcast</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
            Long-form conversations on culture, heritage, governance, and the policies that shape India.
          </p>
          <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">Launching Soon</span>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold newspaper-heading mb-4">Subscribe & Be First to Listen</h2>
          <p className="newspaper-body mb-8 max-w-xl mx-auto">The podcast launches soon. Subscribe on your preferred platform to get notified when the first episode drops.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {platforms.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className={`${p.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity`}>
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="text-sm font-semibold">{p.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Episodes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold newspaper-heading text-center mb-12">Upcoming Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEpisodes.map((ep, i) => (
              <div key={i} className="bg-teal-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-teal-500">
                <Mic className="text-teal-600 mb-3" size={24} />
                <span className="text-xs font-bold bg-teal-100 text-teal-800 px-2 py-1 rounded-full">{ep.status}</span>
                <h3 className="text-xl font-bold newspaper-heading mt-3 mb-1">{ep.title}</h3>
                <p className="text-sm text-teal-600 font-semibold mb-3">with {ep.guest}</p>
                <p className="newspaper-body text-sm">{ep.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mic className="mx-auto mb-4 text-teal-200" size={40} />
          <h2 className="text-3xl font-bold text-white mb-4">Want to be a Guest?</h2>
          <p className="text-teal-100 mb-8">Are you a researcher, policymaker, or practitioner working at the intersection of culture and governance? We'd love to feature you.</p>
          <a href="/contact" className="bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors inline-flex items-center gap-2">
            <ExternalLink size={18} />
            Reach Out
          </a>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
