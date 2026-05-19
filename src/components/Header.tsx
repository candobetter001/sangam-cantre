import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Focus Areas", href: "/focus-areas" },
    { name: "Events", href: "/events" },
    { name: "Publications", href: "/publications" },
    { name: "Media", href: "/media" },
    { name: "Work with us", href: "/work-with-us" },
    { name: "Awards", href: "/awards" },
    { name: "Podcast", href: "/podcast" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 border-b-2 border-teal-600 sticky top-0 z-50 shadow-sm">
      <div className="h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src="/text_logo.jpg" alt="Sangam Centre" className="w-24 lg:w-32 h-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex space-x-1 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 xl:px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200 hover-underline uppercase tracking-wide ${
                  isActive(item.href)
                    ? "text-navy-900 bg-teal-50 font-semibold dark:bg-teal-900/30"
                    : "text-navy-700 hover:text-navy-900 hover:bg-teal-25 dark:text-teal-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://razorpay.me/sangamcentre"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded hover:bg-teal-700 transition-colors inline-flex items-center gap-1 uppercase tracking-wide"
            >
              <Heart size={14} />
              Donate
            </a>
            <DarkModeToggle />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-navy-700 hover:text-navy-900 hover:bg-teal-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-teal-200 bg-white dark:bg-gray-900">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors uppercase tracking-wide ${
                    isActive(item.href)
                      ? "text-navy-900 bg-teal-50 font-semibold"
                      : "text-navy-700 hover:text-navy-900 hover:bg-teal-25"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://razorpay.me/sangamcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 rounded-md uppercase tracking-wide inline-flex items-center gap-1"
              >
                <Heart size={14} />
                Donate
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
