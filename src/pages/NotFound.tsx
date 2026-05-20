import { Link, useLocation } from "react-router-dom";
import { Home, Search, Mail, AlertCircle } from "lucide-react";
import { useEffect } from "react";

const POPULAR_LINKS = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 — Missing route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-50 dark:bg-teal-900 mb-6">
          <AlertCircle size={40} className="text-teal-600 dark:text-teal-300" />
        </div>

        <h1 className="text-7xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
          404
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
          We couldn't find the page you're looking for.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Requested: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-xs">{location.pathname}</code>
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium transition-colors"
          >
            <Home size={16} /> Go Home
          </Link>
          <Link
            to="/sitemap"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Search size={16} /> View Sitemap
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail size={16} /> Report Issue
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            Popular Pages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {POPULAR_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-teal-600 dark:text-teal-300 hover:underline text-sm py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
