import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const HUMANIZE: Record<string, string> = {
  about: "About",
  team: "Team",
  "focus-areas": "Focus Areas",
  events: "Events",
  publications: "Publications",
  media: "Media",
  "work-with-us": "Work With Us",
  contact: "Contact",
  awards: "Awards",
  podcast: "Podcast",
  "annual-report": "Annual Report",
  faq: "FAQ",
  "press-kit": "Press Kit",
  bookmarks: "Bookmarks",
  sitemap: "Sitemap",
  privacy: "Privacy",
  terms: "Terms",
  cookies: "Cookies",
  "code-of-conduct": "Code of Conduct",
  accessibility: "Accessibility",
  diversity: "Diversity",
  "open-data": "Open Data",
  volunteer: "Volunteer",
  "speaker-request": "Speaker Request",
  collaborate: "Collaborate",
};

export default function Breadcrumbs() {
  const location = useLocation();
  if (location.pathname === "/") return null;
  const parts = location.pathname.split("/").filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 print-hidden">
      <ol className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-1 text-xs">
        <li>
          <Link to="/" className="flex items-center text-gray-500 hover:text-teal-600 dark:text-gray-400">
            <Home size={12} />
          </Link>
        </li>
        {parts.map((part, i) => {
          const href = "/" + parts.slice(0, i + 1).join("/");
          const isLast = i === parts.length - 1;
          const label = HUMANIZE[part] || part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          return (
            <li key={href} className="flex items-center gap-1">
              <ChevronRight size={11} className="text-gray-300" />
              {isLast ? (
                <span className="text-gray-900 dark:text-gray-200 font-medium">{label}</span>
              ) : (
                <Link to={href} className="text-gray-500 hover:text-teal-600 dark:text-gray-400">{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
