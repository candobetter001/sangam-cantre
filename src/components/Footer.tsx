import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white border-t-2 bg-teal-50 dark:bg-gray-900 print-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="newspaper-heading text-lg text-teal-800 dark:text-teal-200 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Follow Us</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <a href="https://www.linkedin.com/company/sangam-centre/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-teal-900 dark:text-teal-200 hover:text-teal-600 p-2 hover:bg-teal-100 dark:hover:bg-teal-900 rounded">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/sangam_centre" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-teal-900 dark:text-teal-200 hover:text-teal-600 p-2 hover:bg-teal-100 dark:hover:bg-teal-900 rounded">
                <FaInstagram size={24} />
              </a>
              <a href="https://t.me/sangamcentre" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-teal-900 dark:text-teal-200 hover:text-teal-600 p-2 hover:bg-teal-100 dark:hover:bg-teal-900 rounded">
                <FaTelegram size={24} />
              </a>
              <a href="https://chat.whatsapp.com/sangamcentre" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Community" className="text-teal-900 dark:text-teal-200 hover:text-teal-600 p-2 hover:bg-teal-100 dark:hover:bg-teal-900 rounded">
                <FaWhatsapp size={24} />
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Mail size={14} className="text-teal-700 dark:text-teal-300 mt-0.5 shrink-0" />
              <div>
                <a href="mailto:divya.r@sangamcentre.org" className="text-teal-800 dark:text-teal-200 hover:text-teal-600 block">divya.r@sangamcentre.org</a>
                <a href="mailto:suryaprakash@sangamcentre.org" className="text-teal-800 dark:text-teal-200 hover:text-teal-600 block">suryaprakash@sangamcentre.org</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="newspaper-heading text-lg text-teal-800 dark:text-teal-200 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Focus Areas", href: "/focus-areas" },
                { name: "Publications", href: "/publications" },
                { name: "Events", href: "/events" },
                { name: "Awards", href: "/awards" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-teal-800 dark:text-teal-200 hover:text-teal-600">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="newspaper-heading text-lg text-teal-800 dark:text-teal-200 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Engage</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Contact", href: "/contact" },
                { name: "Volunteer", href: "/volunteer" },
                { name: "Speaker Request", href: "/speaker-request" },
                { name: "Collaborate", href: "/collaborate" },
                { name: "FAQ", href: "/faq" },
                { name: "Press Kit", href: "/press-kit" },
                { name: "Annual Report", href: "/annual-report" },
                { name: "Bookmarks", href: "/bookmarks" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-teal-800 dark:text-teal-200 hover:text-teal-600">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="newspaper-heading text-lg text-teal-800 dark:text-teal-200 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Policies</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Use", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Code of Conduct", href: "/code-of-conduct" },
                { name: "Accessibility", href: "/accessibility" },
                { name: "Diversity & Inclusion", href: "/diversity" },
                { name: "Open Data", href: "/open-data" },
                { name: "Sitemap", href: "/sitemap" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-teal-800 dark:text-teal-200 hover:text-teal-600">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-300 dark:border-teal-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-teal-700 dark:text-teal-300">© 2025 Sangam Centre. All rights reserved.</p>
          <p className="text-teal-700 dark:text-teal-300 text-xs">
            Press <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 border border-teal-300 dark:border-teal-700 rounded text-xs">⌘K</kbd> or <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 border border-teal-300 dark:border-teal-700 rounded text-xs">/</kbd> to search
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
