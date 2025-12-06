import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Publications = () => {
    const upcomingEvents = [];
      const [activeTab, setActiveTab] = useState("upcoming");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [modalPub, setModalPub] = useState(null);

  // const categories = [
  //   { value: "all", label: "All Publications" },
  //   { value: "policy-brief", label: "Policy Briefs" },
  //   { value: "research-paper", label: "Research Papers" },
  //   { value: "working-paper", label: "Working Papers" },
  //   { value: "report", label: "Reports" },
  //   { value: "commentary", label: "Commentary" },
  // ];

  // const publications = [
  //   {
  //     id: 1,
  //     title: "Policy Innovation and Digital Transformation",
  //     authors: ["Dr. Arjun Patel", "Ms. Priya Singh"],
  //     date: "December 2024",
  //     category: "policy-brief",
  //     description:
  //       "All focus areas are influenced by digital transformation and require examination of how technology is reshaping cultural policy landscapes. This includes analyzing the impact of digitalization on cultural participation, investigating new models of cultural content distribution, and developing policy frameworks for the digital cultural economy.",
  //     pages: 24,
  //     downloads: 1250,
  //     views: 3400,
  //     tags: ["Digital Policy", "Technology", "Infrastructure"],
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Sustainable Development Integration",
  //     authors: ["Prof. Meera Sharma", "Research Team"],
  //     date: "November 2024",
  //     category: "research-paper",
  //     description:
  //       "Cultural policy increasingly intersects with sustainable development goals, requiring analysis of how culture contributes to broader development objectives. Research examines culture's role in social cohesion, economic development, and environmental sustainability, creating integrated approaches to policy development.",
  //     pages: 32,
  //     downloads: 980,
  //     views: 2200,
  //     tags: ["Sustainability", "Economic Policy", "Climate Policy"],
  //     featured: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Governance and Institutional Frameworks",
  //     authors: ["Dr. Rajesh Kumar", "Urban Policy Team"],
  //     date: "October 2024",
  //     category: "report",
  //     description:
  //       "Effective cultural policy requires robust institutional arrangements and governance mechanisms. Research analyzes institutional effectiveness, examines coordination challenges between different levels of government, and develops strategies for improving cultural policy governance.",
  //     pages: 28,
  //     downloads: 800,
  //     views: 1900,
  //     tags: ["Governance", "Administration", "Urban Policy"],
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Implementation Considerations",
  //     authors: ["Dr. Rajesh Kumar", "Policy Team"],
  //     date: "September 2024",
  //     category: "working-paper",
  //     description:
  //       "These focus areas should be approached through interdisciplinary research methodologies that combine quantitative and qualitative approaches, comparative policy analysis, and stakeholder engagement strategies. The think tank should prioritize evidence-based policy recommendations, maintain independence in research activities, and engage meaningfully with diverse stakeholders including policymakers, cultural practitioners, and community representatives.",
  //     pages: 35,
  //     downloads: 720,
  //     views: 1700,
  //     tags: ["Policy", "Stakeholders", "Research"],
  //     featured: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Selection and Prioritisation of Focus Areas in Cultural Policy",
  //     authors: ["Prof. Meera Sharma", "Cultural Policy Team"],
  //     date: "August 2024",
  //     category: "policy-brief",
  //     description:
  //       "The selection and prioritisation of specific focus areas should reflect national and regional contexts, current policy challenges, and available resources while maintaining sufficient breadth to address the complex, interconnected nature of contemporary cultural policy issues.",
  //     pages: 18,
  //     downloads: 640,
  //     views: 1500,
  //     tags: ["Cultural Policy", "Governance", "Policy Reform"],
  //     featured: false,
  //   },
  // ];

  // const filteredPublications = publications.filter((pub) => {
  //   const matchesSearch =
  //     pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     pub.authors.some((author) =>
  //       author.toLowerCase().includes(searchTerm.toLowerCase())
  //     ) ||
  //     pub.description.toLowerCase().includes(searchTerm.toLowerCase());

  //   const matchesCategory =
  //     selectedCategory === "all" || pub.category === selectedCategory;

  //   return matchesSearch && matchesCategory;
  // });

  // const featuredPublications = publications.filter((pub) => pub.featured);

  // return (
  //   <div className="bg-white">
  //     {/* Hero Section */}
  //     {/* <section className="bg-[#1e293c] text-white py-16">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="text-center">
  //           <h1 className="text-4xl md:text-5xl font-bold mb-6">
  //             Publications
  //           </h1>
  //           <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
  //             Access our comprehensive collection of research papers, policy
  //             briefs, and analytical reports on India's most pressing policy
  //             challenges.
  //           </p>
  //         </div>
  //       </div>
  //     </section> */}

  //     {/* Featured Publications */}
  //     <section className="py-16 bg-gray-50">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
  //           Featured Publications
  //         </h2>

  //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  //           {featuredPublications.map((pub) => (
  //             <div
  //               key={pub.id}
  //               className="bg-white rounded-lg shadow-md overflow-hidden"
  //             >
  //               <div className="p-6">
  //                 <div className="flex items-center justify-between mb-3">
  //                   <span
  //                     className={`px-3 py-1 text-xs font-semibold rounded-full ${
  //                       pub.category === "policy-brief"
  //                         ? "bg-blue-100 text-blue-800"
  //                         : pub.category === "research-paper"
  //                         ? "bg-green-100 text-green-800"
  //                         : "bg-purple-100 text-purple-800"
  //                     }`}
  //                   >
  //                     {
  //                       categories.find((cat) => cat.value === pub.category)
  //                         ?.label
  //                     }
  //                   </span>
  //                   <span className="text-gray-500 text-sm">{pub.date}</span>
  //                 </div>

  //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
  //                   {pub.title}
  //                 </h3>
  //                 <p className="text-gray-600 text-sm mb-3">
  //                   By {pub.authors.join(", ")}
  //                 </p>
  //                 <p className="text-gray-700 mb-4 leading-relaxed">
  //                   {pub.description.slice(0, 150)}
  //                   {pub.description.length > 150 && "..."}
  //                 </p>

  //                 <div className="flex flex-wrap gap-2 mb-4">
  //                   {pub.tags.map((tag, index) => (
  //                     <span
  //                       key={index}
  //                       className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
  //                     >
  //                       {tag}
  //                     </span>
  //                   ))}
  //                 </div>

  //                 {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
  //                   <span className="flex items-center">
  //                     <Eye className="mr-1" size={14} />
  //                     {pub.views.toLocaleString()} views
  //                   </span>
  //                   <span>{pub.pages} pages</span>
  //                 </div> */}

  //                 <div className="flex gap-3">
  //                   <button
  //                     onClick={() => setModalPub(pub)}
  //                     className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
  //                   >
  //                     <Eye className="mr-2" size={16} />
  //                     Read More
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* Search and Filter */}
  //     <section className="py-8 bg-white border-b border-gray-200">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex flex-col md:flex-row gap-4">
  //           <div className="flex-1 relative">
  //             <Search
  //               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
  //               size={20}
  //             />
  //             <input
  //               type="text"
  //               placeholder="Search publications..."
  //               value={searchTerm}
  //               onChange={(e) => setSearchTerm(e.target.value)}
  //               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //             />
  //           </div>
  //           <select
  //             value={selectedCategory}
  //             onChange={(e) => setSelectedCategory(e.target.value)}
  //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //           >
  //             {categories.map((category) => (
  //               <option key={category.value} value={category.value}>
  //                 {category.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //     </section>

  //     {/* All Publications */}
  //     <section className="py-16">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center justify-between mb-8">
  //           <h2 className="text-2xl font-bold text-gray-900">
  //             All Publications ({filteredPublications.length})
  //           </h2>
  //           <div className="text-sm text-gray-600">
  //             Showing {filteredPublications.length} of {publications.length}{" "}
  //             publications
  //           </div>
  //         </div>

  //         <div className="space-y-6">
  //           {filteredPublications.map((pub) => (
  //             <div
  //               key={pub.id}
  //               className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
  //             >
  //               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
  //                 <div className="flex-1">
  //                   <div className="flex items-center gap-3 mb-3">
  //                     <span
  //                       className={`px-3 py-1 text-xs font-semibold rounded-full ${
  //                         pub.category === "policy-brief"
  //                           ? "bg-blue-100 text-blue-800"
  //                           : pub.category === "research-paper"
  //                           ? "bg-green-100 text-green-800"
  //                           : pub.category === "working-paper"
  //                           ? "bg-yellow-100 text-yellow-800"
  //                           : pub.category === "report"
  //                           ? "bg-purple-100 text-purple-800"
  //                           : "bg-gray-100 text-gray-800"
  //                       }`}
  //                     >
  //                       {
  //                         categories.find((cat) => cat.value === pub.category)
  //                           ?.label
  //                       }
  //                     </span>
  //                     <span className="text-gray-500 text-sm">{pub.date}</span>
  //                   </div>

  //                   <h3 className="text-xl font-bold text-gray-900 mb-2">
  //                     {pub.title}
  //                   </h3>
  //                   <p className="text-gray-600 text-sm mb-3">
  //                     By {pub.authors.join(", ")}
  //                   </p>
  //                   <p className="text-gray-700 mb-4 leading-relaxed">
  //                     {pub.description.slice(0, 150)}
  //                     {pub.description.length > 150 && "..."}
  //                   </p>

  //                   <div className="flex flex-wrap gap-2 mb-4">
  //                     {pub.tags.map((tag, index) => (
  //                       <span
  //                         key={index}
  //                         className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center"
  //                       >
  //                         <Tag className="mr-1" size={12} />
  //                         {tag}
  //                       </span>
  //                     ))}
  //                   </div>

  //                   {/* <div className="flex items-center gap-6 text-sm text-gray-500">
  //                     <span className="flex items-center">
  //                       <Eye className="mr-1" size={14} />
  //                       {pub.views.toLocaleString()} views
  //                     </span>
  //                     <span>{pub.pages} pages</span>
  //                   </div> */}
  //                 </div>

  //                 <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-2">
  //                   <button
  //                     onClick={() => setModalPub(pub)}
  //                     className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
  //                   >
  //                     <Eye className="mr-2" size={16} />
  //                     Read More
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         {filteredPublications.length === 0 && (
  //           <div className="text-center py-12">
  //             <p className="text-gray-500 text-lg">
  //               No publications found matching your search criteria.
  //             </p>
  //           </div>
  //         )}
  //       </div>
  //     </section>

  //     {/* Newsletter Signup */}
  //     {/* <section className="py-16 bg-blue-50">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="text-center max-w-2xl mx-auto">
  //           <h2 className="text-3xl font-bold text-gray-900 mb-4">
  //             Stay Updated
  //           </h2>
  //           <p className="text-lg text-gray-600 mb-8">
  //             Subscribe to our newsletter to get notified when we publish new
  //             research and policy analysis.
  //           </p>
  //           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
  //             <input
  //               type="email"
  //               placeholder="Enter your email"
  //               className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //             />
  //             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
  //               Subscribe
  //               <ArrowRight className="ml-2" size={16} />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </section> */}

  //     {/* Modal */}
  //     {modalPub && (
  //       <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
  //         <div className="bg-white max-w-2xl w-full p-6 rounded-lg relative shadow-lg">
  //           <button
  //             className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
  //             onClick={() => setModalPub(null)}
  //           >
  //             <X size={20} />
  //           </button>
  //           <h3 className="text-2xl font-bold mb-3">{modalPub.title}</h3>
  //           <p className="text-sm text-gray-500 mb-2">
  //             By {modalPub.authors.join(", ")}
  //           </p>
  //           <p className="text-gray-700 leading-relaxed">
  //             {modalPub.description}
  //           </p>
  //           <div className="mt-4 flex flex-wrap gap-2">
  //             {modalPub.tags.map((tag, idx) => (
  //               <span
  //                 key={idx}
  //                 className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
  //               >
  //                 {tag}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
return (
  <div className="bg-white">
    <img
      src="/Publication.png"
      alt="Decorative banner"
      className="w-full max-w-8xl h-[400px] object-cover"
    />
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
            Publications
          </h2>
        </div>

        {/* Existing Publication Card */}
        <div className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-blue-100 text-blue-800">
                    Latest Publication
                  </span>
                </div>
                <h3 className="text-2xl font-bold newpaper-body mb-4">
                  Policy Analysis of SAMRUDHI (Agriculture Policy)
                </h3>
                <h5 className="pb-3">by Shri Subrat Tripathy</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center newpaper-body">
                    <Calendar className="mr-2 flex-shrink-0" size={16} />
                    <span>2020</span>
                  </div>
                  <div className="flex items-center newpaper-body">
                    <MapPin className="mr-2 flex-shrink-0" size={16} />
                    <span>Odisha</span>
                  </div>
                </div>
                <a
                  href="/Assignment_Submission_Subrat Tripathy _Guest Series 2_AMPPP2021[1].pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="mr-2" size={16} />
                  View Full Report
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* New Publication Card 1 */}
        <div className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-purple-100 text-purple-800">
                    Governance & Culture
                  </span>
                </div>
                <h3 className="text-2xl font-bold newpaper-body mb-4">
                  Cultural Intelligence and Inclusive Governance
                </h3>
                <h5 className="pb-3">
                  by Rana Prithviraj Singh & Suryaprakash Kar
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center newpaper-body">
                    <Calendar className="mr-2 flex-shrink-0" size={16} />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center newpaper-body">
                    <MapPin className="mr-2 flex-shrink-0" size={16} />
                    <span>India</span>
                  </div>
                </div>
                <a
                  href="/CQ_CB_ Governance_ABSTRACT (1).pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="mr-2" size={16} />
                  View Full Report
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* New Publication Card 2 */}
        <div className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-purple-100 text-purple-800">
                    Governance & Culture
                  </span>
                </div>
                <h3 className="text-2xl font-bold newpaper-body mb-4">
                  Culture as the Soul of Public Policy
                </h3>
                <h5 className="pb-3">
                  by Prof. Rana Prithviraj Singh
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center newpaper-body">
                    <Calendar className="mr-2 flex-shrink-0" size={16} />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center newpaper-body">
                    <MapPin className="mr-2 flex-shrink-0" size={16} />
                    <span>India</span>
                  </div>
                </div>
                <a
                  href="/Culture as the Soul of Public Policy.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="mr-2" size={16} />
                  View Full Report
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* New Publication Card 3 */}
        <div className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-green-100 text-green-800">
                    Environmental Policy
                  </span>
                </div>
                <h3 className="text-2xl font-bold newpaper-body mb-4">
                  A Pluralistic, Culturally-Rooted Environmental Governance
                  Model Integrating Indian Knowledge Systems and Scientific
                  Evidence through MCDA
                </h3>
                <h5 className="pb-3">by Saiyami Bhardwaj & Abhishek Bharti</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center newpaper-body">
                    <Calendar className="mr-2 flex-shrink-0" size={16} />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center newpaper-body">
                    <MapPin className="mr-2 flex-shrink-0" size={16} />
                    <span>India</span>
                  </div>
                </div>
                <a
                  href="/Draft of IKS Conference Version 2.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="mr-2" size={16} />
                  View Full Report
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-teal-50 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-green-100 text-green-800">
                    Environmental Policy
                  </span>
                </div>
                <h3 className="text-2xl font-bold newpaper-body mb-4">
                  Water Management -Swaraj Internatonal Conference
                </h3>
                <h5 className="pb-3">By Subrat Tripathy</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center newpaper-body">
                    <Calendar className="mr-2 flex-shrink-0" size={16} />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center newpaper-body">
                    <MapPin className="mr-2 flex-shrink-0" size={16} />
                    <span>India</span>
                  </div>
                </div>
                <a
                  href="/Water Management -Swaraj Internatonal Conference   -Subrat Tripathy Final Prez 1[1].pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="mr-2" size={16} />
                  View Full Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

};

export default Publications;
