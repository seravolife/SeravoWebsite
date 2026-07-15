import { Link } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi';
import { COMPANY, NAV_LINKS } from '@/constants';

import logo from '@/assets/images/logo.webp';

const socialIcons = [
  { Icon: FaLinkedinIn, href: COMPANY.socialLinks.linkedin, label: 'LinkedIn' },
  { Icon: FaInstagram, href: COMPANY.socialLinks.instagram, label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-10 pb-6 px-4 md:px-8 border-t border-primary/20" role="contentinfo">
      <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 overflow-hidden flex items-center justify-center bg-white rounded-xl shadow-sm">
              <img src={logo} alt="Seravo" className="absolute w-[115%] h-[115%] max-w-none object-fill" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black font-heading tracking-tight text-white uppercase">Seravo</span>
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-gray-400 mt-1">Life Sciences</span>
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed pr-4">
            Leading manufacturer of research-driven nutraceuticals, clinical nutrition, and pharmaceutical products. Committed to advancing healthcare.
          </p>
          <div className="space-y-3">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
              <HiOutlinePhone className="w-5 h-5 text-primary" />
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
              <HiOutlineMail className="w-5 h-5 text-primary" />
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4 lg:ml-8">
          <h3 className="text-sm text-white font-semibold uppercase tracking-wider">Company</h3>
          <ul className="space-y-2.5 text-sm text-white font-normal">
            <li><Link to="/about" className="hover:text-primary transition-all">About Us</Link></li>
            <li><Link to="/research" className="hover:text-primary transition-all">Research & Quality</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-all">Our Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-all">Contact Us</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <h3 className="text-sm text-white font-semibold uppercase tracking-wider">Partners</h3>
          <ul className="space-y-2.5 text-sm text-white font-normal">
            <li><Link to="/healthcare-professionals" className="hover:text-primary transition-all">Healthcare Professionals</Link></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className="space-y-4">
          <h3 className="text-sm text-white font-semibold uppercase tracking-wider">Social Media</h3>
          <ul className="flex flex-wrap gap-4">
            {socialIcons.map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="mt-10 mb-6 border-white/10" />

      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} {COMPANY.name}. All rights reserved. 
          <span className="block sm:inline sm:ml-2">| Designed by: Yash Khandale</span>
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
