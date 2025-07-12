import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  opacity?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  opacity = false
}) => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [0, -100 * speed] : [0, 100 * speed]
  );
  
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.6]
  );

  return (
    <motion.div
      style={{ 
        y,
        opacity: opacity ? opacityTransform : 1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection; 