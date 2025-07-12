import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface DynamicNavigationProps {
  links: NavLink[];
  theme?: 'light' | 'dark' | 'auto';
  glowIntensity?: number;
  showLabelsOnMobile?: boolean;
  onLinkClick?: (id: string) => void;
  activeLink?: string;
  enableRipple?: boolean;
}

const DynamicNavigation: React.FC<DynamicNavigationProps> = ({
  links,
  theme = 'auto',
  glowIntensity = 2,
  showLabelsOnMobile = true,
  onLinkClick,
  activeLink,
  enableRipple = false
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Auto theme mengikuti system theme dengan warna yang lebih balanced
  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-800 shadow-lg border border-gray-200';
      case 'dark':
        return 'bg-gray-800 text-white shadow-lg border border-gray-700';
      case 'auto':
      default:
        return 'bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm';
    }
  };

  const getHoverClasses = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-50';
      case 'dark':
        return 'hover:bg-gray-700';
      case 'auto':
      default:
        return 'hover:bg-gray-100/80 dark:hover:bg-gray-700/80';
    }
  };

  const isActiveLink = (link: NavLink) => {
    // Check if it's a route-based link (/articles, etc)
    if (link.href.startsWith('/')) {
      return location.pathname === link.href;
    }
    // Check if it's a section-based link (#about, #contact, etc)
    else if (location.pathname === '/' && activeLink) {
      return activeLink === link.id;
    }
    return false;
  };

  const handleClick = (link: NavLink) => {
    if (onLinkClick) {
      onLinkClick(link.id);
    }
    
    // Handle route-based navigation (/articles, etc)
    if (link.href.startsWith('/')) {
      navigate(link.href);
    }
    // Handle section-based navigation (#about, #contact, etc)
    else {
      // If we're not on homepage, navigate to homepage first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`flex items-center space-x-1 p-2 rounded-full transition-all duration-300 ${getThemeClasses()}`}>
      {links.map((link, index) => (
        <motion.button
          key={link.id}
          onClick={() => handleClick(link)}
          className={`
            relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
            ${isActiveLink(link)
              ? 'bg-blue-600 text-white shadow-lg' 
              : `${getHoverClasses()}`
            }
            ${showLabelsOnMobile ? '' : 'md:space-x-2 space-x-0'}
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Glow effect */}
          {isActiveLink(link) && glowIntensity > 0 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-md"
              style={{ filter: `blur(${glowIntensity * 2}px)` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Ripple effect */}
          {enableRipple && isActiveLink(link) && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-300 opacity-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}

          {link.icon && (
            <span className="relative z-10">{link.icon}</span>
          )}
          
          <span className={`
            relative z-10 font-medium text-sm
            ${showLabelsOnMobile ? '' : 'hidden md:inline'}
          `}>
            {link.label}
          </span>
        </motion.button>
      ))}
    </nav>
  );
};

export default DynamicNavigation; 