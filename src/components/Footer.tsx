import { Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const footerImages: Record<string, string> = {
    "/": "/Great Himalayan National Park Conservation Area.jpg",
    "/about": "/Ayodhya Ram Mandir.jpg",
    "/focus-areas": "/Ghoomar_Rajasthan.jpg",
    "/publications": "/Hill Forts of Rajasthan.jpg",
    "/events": "/Somnath-Temple.jpg",
    "/work-with-us": "/Ganga Aarti at Rishikesh.jpg",
  };

  // Default image if no match
  const currentImage =
    footerImages[location.pathname] || "/default-footer.jpeg";

  return (
    <footer className="text-white border-t-2 bg-teal-50">
      <div className="h-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            {/* <div className="mb-6"></div> */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-teal-900 hover:text-white transition-colors p-2 hover:bg-teal-600 rounded"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/sangam-centre/"
                className="text-teal-900 hover:text-white transition-colors p-2 hover:bg-teal-600 rounded"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/sangam_centre?igsh=ajVzbjJ2a2hyd3Z0"
                className="text-teal-900 hover:text-white transition-colors p-2 hover:bg-teal-600 rounded"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <p className="text-teal-200 text-sm newspaper-body mt-20 md:mb-0">
              © 2024 Sangam Centre. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="newspaper-heading text-lg text-white mb-4 uppercase tracking-wide border-b border-teal-500 pb-2">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-teal-900 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <span className="text-teal-100 text-sm newspaper-body break-words">
                    divya.r@sangamcentre.org
                  </span>
                  <span className="text-teal-100 text-sm newspaper-body break-words">
                    suryaprakash@sangamcentre.org
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-500 mt-10 max-w-7xl">
          {/* <img
            src={currentImage}
            alt="Decorative banner"
            className="w-full  h-[300px] object-cover "
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
