import { Link } from "react-router-dom";
import { Map, ChevronRight } from "lucide-react";

const STRUCTURE = [
  {
    title: "About",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Focus Areas", href: "/focus-areas" },
      { name: "Awards & Recognitions", href: "/awards" },
    ],
  },
  {
    title: "Content",
    links: [
      { name: "Publications", href: "/publications" },
      { name: "Events", href: "/events" },
      { name: "Media", href: "/media" },
      { name: "Podcast", href: "/podcast" },
      { name: "Annual Reports", href: "/annual-report" },
    ],
  },
  {
    title: "Engage",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Work With Us", href: "/work-with-us" },
      { name: "Volunteer", href: "/volunteer" },
      { name: "Speaker Request", href: "/speaker-request" },
      { name: "Research Collaboration", href: "/collaborate" },
      { name: "Bookmarks", href: "/bookmarks" },
      { name: "FAQ", href: "/faq" },
      { name: "Press Kit", href: "/press-kit" },
    ],
  },
  {
    title: "Policies",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Use", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Code of Conduct", href: "/code-of-conduct" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "Diversity & Inclusion", href: "/diversity" },
      { name: "Open Data", href: "/open-data" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Map className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Site Map
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            All pages on sangamcentre.org, organised for easy navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STRUCTURE.map((section) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold text-[#1e3a8a] dark:text-teal-200 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 uppercase tracking-wide text-sm">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 text-sm group"
                    >
                      <ChevronRight size={14} className="text-teal-500 mr-1 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Machine-readable sitemap:{" "}
          <a href="/sitemap.xml" className="text-teal-600 dark:text-teal-300 hover:underline">
            /sitemap.xml
          </a>{" "}
          · RSS:{" "}
          <a href="/rss.xml" className="text-teal-600 dark:text-teal-300 hover:underline">
            /rss.xml
          </a>
        </div>
      </div>
    </div>
  );
}
