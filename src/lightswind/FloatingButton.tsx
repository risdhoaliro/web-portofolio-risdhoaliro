import React from 'react';
import { motion } from 'framer-motion';

interface FloatingButtonProps {
  children: React.ReactNode;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onClick?: () => void;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  tooltip?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  position = 'bottom-right',
  onClick,
  color = 'bg-blue-600',
  size = 'md',
  pulse = false,
  tooltip
}) => {
  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const sizes = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-base',
    lg: 'w-20 h-20 text-lg'
  };

  return (
    <motion.button
      className={`
        fixed z-50 ${positions[position]} ${sizes[size]} ${color}
        text-white rounded-full shadow-2xl flex items-center justify-center
        hover:scale-110 transition-all duration-300
        group
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      animate={pulse ? {
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 20px rgba(59, 130, 246, 0.3)",
          "0 0 30px rgba(59, 130, 246, 0.5)",
          "0 0 20px rgba(59, 130, 246, 0.3)"
        ]
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      {children}
      
      {/* Tooltip */}
      {tooltip && (
        <motion.div
          className="absolute right-full mr-4 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          {tooltip}
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1/2" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default FloatingButton; 