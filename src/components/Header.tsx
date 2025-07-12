import { useState } from 'react';
import { DynamicNavigation } from '../lightswind';
import { Menu, X, Github, Mail, Linkedin, BookOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');

  const navLinks = [
    { id: 'about', label: 'About', href: '#about', icon: <Menu className="size-5" /> },
    { id: 'experience', label: 'Experience', href: '#experience', icon: <Github className="size-5" /> },
    { id: 'skills', label: 'Skills', href: '#skills', icon: <Mail className="size-5" /> },
    { id: 'article', label: 'Article', href: '/articles', icon: <BookOpen className="size-5" /> },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Linkedin className="size-5" /> },
  ];

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Desktop Layout - 3 Column Grid */}
          <div className="hidden md:grid grid-cols-3 items-center w-full">
            {/* Left spacer */}
            <div></div>
            
            {/* Center Navigation */}
            <div className="flex justify-center">
              <DynamicNavigation
                links={navLinks}
                theme="auto"
                glowIntensity={3}
                showLabelsOnMobile={false}
                onLinkClick={handleLinkClick}
                activeLink={activeLink}
                enableRipple={true}
              />
            </div>
            
            {/* Right Social Links */}
            <div className="flex items-center justify-end space-x-4">
              <ThemeToggle />
              <a
                href="mailto:risdhoaliro@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/risdhoaliro"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/risdhoaliro"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile: Theme Toggle (Left) and Menu Button (Right) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <ThemeToggle />
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/30 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-b-lg">
            <div className="flex justify-center mb-4">
              <DynamicNavigation
                links={navLinks}
                theme="auto"
                glowIntensity={2}
                showLabelsOnMobile={true}
                onLinkClick={handleLinkClick}
                activeLink={activeLink}
                enableRipple={true}
              />
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
              <a
                href="mailto:risdhoaliro@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/risdhoaliro"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/risdhoaliro"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;