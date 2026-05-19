import React, { useState } from "react";
import { Calendar, MapPin, ArrowRight, Search, X, Tag, BookOpen } from "lucide-react";

const allPublications = [
  {
    id: 1,
    title: "When Modern Cities Forget Water: A Global Drainage Crisis and the Wisdom We Buried",
    authors: ["Abhishek Bharti"],
    year: "2025",
    category: "environmental-policy",
    categoryLabel: "Environmental Policy",
    location: "India",
    abstract: "An exploration of how ancient water management wisdom embedded in Indian culture can address the contemporary urban drainage crisis, with a comparative global perspective.",
    pdf: "/Flood and Culture (Global).pdf",
    tags: ["Water Policy", "Urban Planning", "Indian Knowledge Systems"],
    badge: "Latest Publication",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 2,
    title: "Culture as the Soul of Public Policy: Reimagining Good Governance, the Bharatiya Way",
    authors: ["Prof. Rana Prithviraj Singh"],
    year: "2020",
    category: "governance",
    categoryLabel: "Governance & Culture",
    location: "India",
    abstract: "A foundational argument that effective governance in India must be rooted in its civilisational cultural values — examining how Bharatiya traditions can inform modern public administration.",
    pdf: "/Culture as the Soul of Public Policy.pdf",
    tags: ["Governance", "Culture", "Public Policy", "Bharatiya Philosophy"],
    badge: "Governance & Culture",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    title: "Policy Analysis of SAMRUDHI (Agriculture Policy)",
    authors: ["Shri Subrat Tripathy"],
    year: "2020",
    category: "governance",
    categoryLabel: "Governance & Culture",
    location: "Odisha",
    abstract: "A detailed policy analysis of the SAMRUDHI agricultural scheme in Odisha, examining implementation challenges, community impact, and recommendations for culturally-sensitive agricultural governance.",
    pdf: "/Assignment_Submission_Subrat Tripathy _Guest Series 2_AMPPP2021[1].pdf",
    tags: ["Agriculture", "Odisha", "Policy Analysis", "Rural Development"],
    badge: "Governance & Culture",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 4,
    title: "Cultural Intelligence and Inclusive Governance",
    authors: ["Prof. Rana Prithviraj Singh", "Suryaprakash Kar"],
    year: "2025",
    category: "governance",
    categoryLabel: "Governance & Culture",
    location: "India",
    abstract: "Explores how cultural intelligence (CQ) can be integrated into governance frameworks to create more inclusive, context-sensitive public institutions that serve India's diverse populations.",
    pdf: "/CQ_CB_ Governance_ABSTRACT (1).pdf",
    tags: ["Cultural Intelligence", "Inclusive Governance", "Policy"],
    badge: "Governance & Culture",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 5,
    title: "A Pluralistic, Culturally-Rooted Environmental Governance Model Integrating Indian Knowledge Systems and Scientific Evidence through MCDA",
    authors: ["Saiyami Bhardwaj", "Abhishek Bharti"],
    year: "2025",
    category: "environmental-policy",
    categoryLabel: "Environmental Policy",
    location: "India",
    abstract: "Proposes a multi-criteria decision analysis (MCDA) framework that integrates traditional Indian Knowledge Systems with contemporary scientific evidence for environmental governance.",
    pdf: "/Draft of IKS Conference Version 2.pdf",
    tags: ["IKS", "Environmental Governance", "MCDA", "Sustainability"],
    badge: "Environmental Policy",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 6,
    title: "Water Management — Swaraj International Conference",
    authors: ["Subrat Tripathy"],
    year: "2025",
    category: "water-policy",
    categoryLabel: "Water Policy",
    location: "India",
    abstract: "Conference presentation examining water management challenges through the lens of cultural traditions and indigenous practices, presented at the Swaraj International Conference.",
    pdf: "/Water Management -Swaraj Internatonal Conference   -Subrat Tripathy Final Prez 1[1].pdf",
    tags: ["Water Management", "Swaraj", "Indigenous Knowledge"],
    badge: "Water Policy",
    badgeColor: "bg-green-100 text-green-800",
  },
];

const categories = [
  { value: "all", label: "All Publications" },
  { value: "governance", label: "Governance & Culture" },
  { value: "environmental-policy", label: "Environmental Policy" },
  { value: "water-policy", label: "Water Policy" },
];

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalPub, setModalPub] = useState<typeof allPublications[0] | null>(null);

  const filtered = allPublications.filter((pub) => {
    const matchSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === "all" || pub.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="bg-white dark:bg-gray-950">
      <img src="/Publication.png" alt="Publications banner" className="w-full h-[300px] md:h-[400px] object-cover" />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold newspaper-heading mb-4">Publications</h2>
            <p className="newspaper-body max-w-2xl mx-auto">Research papers, policy briefs, and analytical reports by Sangam Centre contributors.</p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={18} />
                </button>
              )}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              {categories.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <p className="text-sm newspaper-body text-gray-500 mb-6">
            Showing {filtered.length} of {allPublications.length} publications
            {searchTerm && <span> for "<strong>{searchTerm}</strong>"</span>}
          </p>

          {/* Publications List */}
          <div className="space-y-6">
            {filtered.map((pub) => (
              <div key={pub.id} className="bg-teal-50 dark:bg-gray-800 border border-transparent hover:border-teal-300 rounded-lg shadow-sm hover:shadow-md transition-all p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${pub.badgeColor}`}>{pub.badge}</span>
                  <span className="flex items-center text-sm newspaper-body text-gray-500 gap-1"><Calendar size={14} />{pub.year}</span>
                  <span className="flex items-center text-sm newspaper-body text-gray-500 gap-1"><MapPin size={14} />{pub.location}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold newspaper-heading mb-2">{pub.title}</h3>
                <p className="text-sm font-medium text-teal-700 mb-3">by {pub.authors.join(", ")}</p>
                <p className="newspaper-body text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">{pub.abstract}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {pub.tags.map((tag) => (
                    <button key={tag} onClick={() => setSearchTerm(tag)}
                      className="inline-flex items-center gap-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded hover:border-teal-400 hover:text-teal-700 transition-colors">
                      <Tag size={11} />{tag}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setModalPub(pub)}
                    className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors text-sm font-medium">
                    <BookOpen className="mr-2" size={16} /> Read Abstract
                  </button>
                  <a href={pub.pdf} download
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                    <ArrowRight className="mr-2" size={16} /> Download PDF
                  </a>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Search className="mx-auto text-gray-300 mb-4" size={40} />
                <p className="text-xl newspaper-body text-gray-500">No publications match "{searchTerm}"</p>
                <button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
                  className="mt-4 text-teal-600 hover:underline text-sm">Clear search</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Abstract Modal */}
      {modalPub && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setModalPub(null)}>
          <div className="bg-white dark:bg-gray-900 max-w-2xl w-full p-8 rounded-xl shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalPub(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"><X size={22} /></button>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${modalPub.badgeColor}`}>{modalPub.badge}</span>
              <span className="text-sm text-gray-500">{modalPub.year} · {modalPub.location}</span>
            </div>
            <h3 className="text-2xl font-bold newspaper-heading mb-2">{modalPub.title}</h3>
            <p className="text-sm font-medium text-teal-700 mb-4">by {modalPub.authors.join(", ")}</p>
            <h4 className="font-semibold newspaper-body mb-2">Abstract</h4>
            <p className="newspaper-body text-sm leading-relaxed text-gray-700 dark:text-gray-300">{modalPub.abstract}</p>
            <div className="flex flex-wrap gap-2 mt-4 mb-6">
              {modalPub.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"><Tag size={11} />{tag}</span>
              ))}
            </div>
            <a href={modalPub.pdf} download onClick={() => setModalPub(null)}
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold">
              <ArrowRight className="mr-2" size={18} /> Download Full PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;
