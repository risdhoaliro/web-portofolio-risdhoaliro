import React from 'react';
import { motion } from 'framer-motion';

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  speed?: number;
  colors?: string[];
}

const AuroraText: React.FC<AuroraTextProps> = ({
  children,
  className = '',
  size = 'lg',
  speed = 8,
  colors = [
    '#3b82f6', // blue-500
    '#8b5cf6', // violet-500
    '#06b6d4', // cyan-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#ef4444', // red-500
    '#ec4899', // pink-500
    '#8b5cf6'  // violet-500
  ]
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  };

  // Membuat gradient string dari array colors
  const createGradient = (colorArray: string[]) => {
    const gradientStops = colorArray.map((color, index) => {
      const percentage = (index / (colorArray.length - 1)) * 100;
      return `${color} ${percentage}%`;
    }).join(', ');
    
    return `linear-gradient(90deg, ${gradientStops})`;
  };

  return (
    <motion.span
      className={`
        inline-block font-bold relative
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        background: createGradient(colors),
        backgroundSize: '300% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  );
};

export default AuroraText; 