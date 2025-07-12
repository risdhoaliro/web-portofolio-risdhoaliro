import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  animated?: boolean;
  showValue?: boolean;
  className?: string;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  height = 8,
  color = 'bg-blue-600',
  backgroundColor = 'bg-gray-200',
  animated = true,
  showValue = false,
  className = '',
  label
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          {showValue && (
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div
        className={`w-full ${backgroundColor} rounded-full overflow-hidden`}
        style={{ height: `${height}px` }}
      >
        <motion.div
          className={`h-full ${color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: animated ? 1.5 : 0,
            ease: "easeOut"
          }}
        >
          {/* Shimmer effect */}
          {animated && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar; 