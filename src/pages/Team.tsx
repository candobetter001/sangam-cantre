import { Mail, Linkedin, ExternalLink } from "lucide-react";

interface Member {
  name: string;
  role: string;
  bio: string;
  affiliations?: string;
  interests?: string[];
  email?: string;
  linkedin?: string;
  image?: string;
}

const FOUNDING_TEAM: Member[] = [
  {
    name: "Prof. Rana Prithviraj Singh",
    role: "Founding Member & Senior Advisor",
    bio: "Distinguished scholar on culture, governance, and public policy. Long-standing contributor to research on the role of culture in shaping inclusive governance.",
    interests: ["Culture & Policy", "Inclusive Governance", "Indian Knowledge Systems"],
    image: "/Prithviraj.png",
  },
  {
    name: "Shri Subrat Tripathy",
    role: "Public Policy Head",
    bio: "Public policy practitioner with experience across institutional research and conferences on water management, governance, and rural development.",
    interests: ["Water Policy", "Rural Development", "Public Administration"],
    email: "suryaprakash@sangamcentre.org",
  },
  {
    name: "Divya Rathore",
    role: "Consultant, Delhi Head",
    bio: "Leads Delhi operations, partnerships, and outreach. Background in cultural studies and policy analysis.",
    interests: ["Cultural Diplomacy", "Policy Communication"],
    email: "divya.r@sangamcentre.org",
    image: "/Divya_1.png",
  },
  {
    name: "Suryaprakash",
    role: "Operations & Research",
    bio: "Coordinates research operations, publications, and digital presence. Co-author on inclusive governance research.",
    interests: ["Research Operations", "Digital Heritage", "Cultural Intelligence"],
    email: "suryaprakash@sangamcentre.org",
  },
];

const RESEARCH_TEAM: Member[] = [
  {
    name: "Abhishek Bharti",
    role: "Research Affiliate, Doctoral Researcher (Delhi University)",
    bio: "Doctoral researcher with publications on water management in modern cities and pluralistic environmental governance. Affiliated with Sangam Centre on environmental policy research.",
    interests: ["Environmental Policy", "Water Management", "Urban Governance"],
    image: "/Abhishek_1.png",
  },
  {
    name: "Ankita",
    role: "Research Associate",
    bio: "Contributes to research projects on culture, policy, and community engagement.",
    image: "/Ankita_1.png",
  },
  {
    name: "Saiyami",
    role: "Research Associate",
    bio: "Co-author on environmental governance research. Focuses on pluralistic, culturally-rooted policy models.",
    interests: ["Environmental Governance", "Cultural Policy"],
  },
  {
    name: "Gurpreet",
    role: "Research Associate",
    bio: "Contributes to research and outreach initiatives.",
    image: "/Gurpreet 1.jpg",
  },
  {
    name: "Puneet",
    role: "Research Associate",
    bio: "Research support and analysis.",
    image: "/Puneet_1.png",
  },
  {
    name: "Rajiv",
    role: "Research Associate",
    bio: "Research support and analysis.",
    image: "/Rajiv_1.png",
  },
  {
    name: "Nisha",
    role: "Research Associate",
    bio: "Research support and analysis.",
    image: "/Nisha.jpg",
  },
  {
    name: "Ashish",
    role: "Research Associate",
    bio: "Research support and analysis.",
    image: "/Ashish_1.png",
  },
];

function TeamCard({ m }: { m: Member }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      {m.image && (
        <img
          src={m.image}
          alt={m.name}
          loading="lazy"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-gray-100 dark:bg-gray-700"
        />
      )}
      <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-1">
        {m.name}
      </h3>
      <p className="text-sm text-teal-600 dark:text-teal-300 text-center mb-3">{m.role}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{m.bio}</p>
      {m.interests && (
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          {m.interests.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-900 text-teal-700 dark:text-teal-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-center gap-3 text-gray-400">
        {m.email && (
          <a href={`mailto:${m.email}`} aria-label="Email" className="hover:text-teal-600">
            <Mail size={16} />
          </a>
        )}
        {m.linkedin && (
          <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-600">
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-3">
            Our Team
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Researchers, advisors, and operators working at the confluence of
            culture and public policy.
          </p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-[#1e3a8a] dark:text-teal-200 mb-6 uppercase tracking-wide">
          Founding Team & Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FOUNDING_TEAM.map((m) => <TeamCard key={m.name} m={m} />)}
        </div>

        <h2 className="text-2xl font-serif font-semibold text-[#1e3a8a] dark:text-teal-200 mb-6 uppercase tracking-wide">
          Research Associates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_TEAM.map((m) => <TeamCard key={m.name} m={m} />)}
        </div>

        <div className="mt-12 bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-2">
            Join the Team
          </h3>
          <p className="text-teal-700 dark:text-teal-300 text-sm mb-4">
            We're always open to working with new researchers, writers, and operators.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="/work-with-us" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm font-medium">
              Open Positions
            </a>
            <a href="/volunteer" className="px-4 py-2 bg-white dark:bg-gray-800 border border-teal-600 text-teal-700 dark:text-teal-200 rounded-md text-sm font-medium">
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
