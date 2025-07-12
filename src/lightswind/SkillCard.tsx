import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color?: string;
  gradient?: boolean;
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  skills,
  color = 'bg-white',
  gradient = false,
  index = 0
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: (index * 0.1) + (i * 0.05)
      }
    })
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        y: -10,
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className={`
        relative p-6 rounded-2xl border-2 shadow-lg
        transform-gpu transition-all duration-300
        hover:shadow-2xl hover:border-opacity-50
        ${gradient 
          ? 'bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900' 
          : color
        }
        dark:bg-gray-700 dark:border-gray-600
        group
      `}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        whileHover={{ scale: 1.05 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="flex items-center mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="mr-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </motion.div>

        {/* Skills */}
        <div className="space-y-3">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              custom={skillIndex}
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                x: 10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-500 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 group/skill">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/skill:text-blue-600 transition-colors duration-300">
                    {skill}
                  </span>
                  
                  {/* Skill level indicator */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>
                
                {/* Progress bar on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/skill:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          opacity: inView ? [0, 1, 1] : 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2
        }}
      />
    </motion.div>
  );
};

export default SkillCard; 