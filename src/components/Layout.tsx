import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsTicker from './NewsTicker';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import WelcomePopup from './WelcomePopup';
import NewsletterPopup from './NewsletterPopup';
import CookieBanner from './CookieBanner';
import SkipToContent from './SkipToContent';
import SearchModal from './SearchModal';
import Breadcrumbs from './Breadcrumbs';
import AccessibilityMenu from './AccessibilityMenu';
import { FaWhatsapp } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-950">
      <SkipToContent />
      <ScrollProgress />
      <NewsTicker />
      <Header />
      <Breadcrumbs />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />

      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors print-hidden"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      <BackToTop />
      <SearchModal />
      <AccessibilityMenu />
      <WelcomePopup />
      <NewsletterPopup />
      <CookieBanner />
    </div>
  );
};

export default Layout;
