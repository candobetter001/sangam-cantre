import React from "react";
import { Award, Star, Globe, BookOpen } from "lucide-react";

const awards = [
  {
    icon: <Star className="text-yellow-500" size={32} />,
    title: "IIT Bombay Conference — Best Paper",
    year: "2024",
    description: "Recognised at the Reimagining Indian Governance conference at SJMSoM, IIT Bombay for outstanding research contribution.",
    category: "Research Excellence",
  },
  {
    icon: <Globe className="text-teal-600" size={32} />,
    title: "Swaraj International Conference — Featured Presenter",
    year: "2025",
    description: "Sangam Centre research on Water Management was featured at the Swaraj International Conference.",
    category: "Public Policy",
  },
  {
    icon: <BookOpen className="text-blue-600" size={32} />,
    title: "IKS Conference — Invited Publication",
    year: "2025",
    description: "Research on Indian Knowledge Systems and Environmental Governance was invited for publication at the IKS Conference.",
    category: "Academic Recognition",
  },
];

const affiliations = [
  { name: "IIT Bombay — SJMSoM", role: "Research Partner", logo: "🏛️" },
  { name: "University of Delhi", role: "Affiliated Institution", logo: "🎓" },
  { name: "Rishihood University", role: "Collaborative Institution", logo: "📚" },
  { name: "Vivekanand Global University", role: "Knowledge Partner", logo: "🌐" },
  { name: "XIM University", role: "Visiting Faculty Partner", logo: "🏫" },
];

const Awards = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="mx-auto mb-4 text-yellow-300" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold newspaper-heading text-white mb-4">Recognition & Affiliations</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Institutional partnerships and recognitions that affirm our research impact.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold newspaper-heading text-center mb-12">Awards & Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <div key={i} className="bg-teal-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-teal-500">
                <div className="mb-4">{award.icon}</div>
                <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-2 py-1 rounded-full">{award.category}</span>
                <h3 className="text-xl font-bold newspaper-heading mt-3 mb-2">{award.title}</h3>
                <p className="text-sm text-teal-700 font-semibold mb-3">{award.year}</p>
                <p className="newspaper-body text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold newspaper-heading text-center mb-12">Institutional Affiliations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliations.map((aff, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{aff.logo}</div>
                <h3 className="font-bold newspaper-heading mb-1">{aff.name}</h3>
                <p className="text-sm text-teal-600 font-medium">{aff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
