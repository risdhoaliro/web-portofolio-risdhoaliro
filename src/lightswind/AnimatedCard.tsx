import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  hover?: boolean;
  scale?: boolean;
  glow?: boolean;
  rotate?: boolean;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  direction = 'up',
  hover = true,
  scale = true,
  glow = false,
  rotate = false,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  const offset = directionOffset[direction];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
      scale: scale ? 0.9 : 1,
      rotateY: rotate ? -10 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = hover ? {
    scale: scale ? 1.02 : 1,
    y: -4,
    rotateY: rotate ? 5 : 0,
    boxShadow: glow 
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 30px rgba(59, 130, 246, 0.3)"
      : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  } : {};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={hoverVariants}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 