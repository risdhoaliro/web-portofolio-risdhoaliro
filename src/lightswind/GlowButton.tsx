import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glowColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
  download?: boolean;
  pulse?: boolean;
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glowColor,
  onClick,
  disabled = false,
  className = '',
  icon,
  href,
  download,
  pulse = false
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/50',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 shadow-gray-500/50',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-500/30',
    ghost: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-blue-500/20'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const defaultGlowColors = {
    primary: 'shadow-blue-500/50',
    secondary: 'shadow-gray-500/50',
    outline: 'shadow-blue-500/30',
    ghost: 'shadow-blue-500/20'
  };

  const glowClass = glowColor || defaultGlowColors[variant];

  const buttonContent = (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex items-center justify-center space-x-2 font-semibold rounded-lg
        transition-all duration-300 transform
        hover:scale-105 hover:shadow-2xl hover:-translate-y-1
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
        ${variants[variant]}
        ${sizes[size]}
        ${glowClass}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      animate={pulse ? {
        scale: [1, 1.02, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : {}}
    >
      {/* Glow effect background */}
      <motion.div
        className={`absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md ${glowClass}`}
        whileHover={{ scale: 1.2 }}
      />
      
      {/* Button content */}
      <div className="relative z-10 flex items-center space-x-2">
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={`
          inline-flex items-center justify-center space-x-2 font-semibold rounded-lg
          transition-all duration-300 transform
          hover:scale-105 hover:shadow-2xl hover:-translate-y-1
          ${variants[variant]}
          ${sizes[size]}
          ${glowClass}
          ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={pulse ? {
          scale: [1, 1.02, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
      >
        {/* Glow effect background */}
        <motion.div
          className={`absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md ${glowClass}`}
          whileHover={{ scale: 1.2 }}
        />
        
        {/* Link content */}
        <div className="relative z-10 flex items-center space-x-2">
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </div>
      </motion.a>
    );
  }

  return buttonContent;
};

export default GlowButton; 