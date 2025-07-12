import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Target, Users } from 'lucide-react';
import { AnimatedCard, AuroraText } from '../lightswind';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const highlights = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Security Testing",
      description: "Expert in security testing using Burpsuite and penetration testing methodologies"
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Test Automation",
      description: "Proficient in Robot Framework, Selenium, Katalon Studio, and Playwright"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Performance Testing",
      description: "Experienced in K6 performance testing with Grafana monitoring"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Leadership",
      description: "SDET Lead with experience in Agile/Scrum methodologies"
    }
  ];

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AuroraText 
              size="4xl" 
              speed={6}
              colors={[
                '#3b82f6', // blue-500
                '#8b5cf6', // violet-500
                '#06b6d4', // cyan-500
                '#10b981', // emerald-500
                '#8b5cf6'  // violet-500
              ]}
            >
              About Me
            </AuroraText>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              variants={paragraphVariants}
            >
              Passionate Quality Assurance Professional
            </motion.h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <motion.p variants={paragraphVariants}>
                As a Software Development Engineer in Test with over 4 years of experience, 
                I specialize in creating robust automated testing solutions that ensure 
                product quality and reliability.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                My expertise spans across fintech and insurtech industries, where I've 
                worked with renowned companies like PT Altech Omega Andalan, PT Adira 
                Dinamika Multi Finance, and PT BRI Insurance.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                I'm passionate about continuous growth in quality assurance and automation 
                testing, with a focus on becoming a senior specialist in Software Testing 
                while contributing to innovative testing practices.
              </motion.p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                direction="up"
                hover={true}
                scale={true}
                glow={true}
                rotate={true}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600"
              >
                <motion.div
                  className="mb-4 transform transition-transform duration-300"
                  whileHover={{ scale: 1.25, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;