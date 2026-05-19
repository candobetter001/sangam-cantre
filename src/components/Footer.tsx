import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="text-white border-t-2 bg-teal-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Social */}
          <div className="col-span-1">
            <h3 className="newspaper-heading text-lg text-teal-800 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/company/sangam-centre/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-teal-900 hover:text-teal-600 transition-colors p-2 hover:bg-teal-100 rounded">
                <FaLinkedin size={28} />
              </a>
              <a href="https://www.instagram.com/sangam_centre" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-teal-900 hover:text-teal-600 transition-colors p-2 hover:bg-teal-100 rounded">
                <FaInstagram size={28} />
              </a>
              <a href="https://t.me/sangamcentre" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-teal-900 hover:text-teal-600 transition-colors p-2 hover:bg-teal-100 rounded">
                <FaTelegram size={28} />
              </a>
              <a href="https://chat.whatsapp.com/sangamcentre" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Community" className="text-teal-900 hover:text-teal-600 transition-colors p-2 hover:bg-teal-100 rounded">
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="newspaper-heading text-lg text-teal-800 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-teal-700 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:divya.r@sangamcentre.org" className="text-teal-800 text-sm hover:text-teal-600 break-words">divya.r@sangamcentre.org</a>
                  <a href="mailto:suryaprakash@sangamcentre.org" className="text-teal-800 text-sm hover:text-teal-600 break-words">suryaprakash@sangamcentre.org</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="newspaper-heading text-lg text-teal-800 mb-4 uppercase tracking-wide border-b border-teal-300 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "/about" },
                { name: "Publications", href: "/publications" },
                { name: "Events", href: "/events" },
                { name: "Awards", href: "/awards" },
                { name: "Podcast", href: "/podcast" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-teal-800 text-sm hover:text-teal-600 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-300 mt-8 pt-6 text-center">
          <p className="text-teal-700 text-sm">© 2025 Sangam Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
