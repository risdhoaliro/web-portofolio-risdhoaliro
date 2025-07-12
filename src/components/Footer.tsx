import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import { AuroraText, AnimatedCard } from '../lightswind';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <AnimatedCard
            direction="up"
            delay={0}
            hover={true}
            glow={true}
            className="space-y-4"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              <AuroraText 
                size="2xl"
                speed={10}
                colors={[
                  '#3b82f6', // blue-500
                  '#8b5cf6', // violet-500
                  '#06b6d4', // cyan-500
                  '#8b5cf6'  // violet-500
                ]}
              >
                Risdho Aliro Sambada
              </AuroraText>
            </motion.h3>
            <motion.p 
              className="text-gray-400 dark:text-gray-500 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Software Development Engineer in Test passionate about quality assurance 
              and test automation.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:risdhoaliro@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/risdhoaliro"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/risdhoaliro"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </AnimatedCard>

          {/* Quick Links */}
          <AnimatedCard
            direction="up"
            delay={0.1}
            hover={true}
            className="space-y-4"
          >
            <motion.h4 
              className="text-lg font-semibold mb-4 text-blue-400"
              variants={itemVariants}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={itemVariants}
            >
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 block"
                    whileHover={{ x: 10, color: "#60a5fa" }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </AnimatedCard>

          {/* Specializations */}
          <AnimatedCard
            direction="up"
            delay={0.2}
            hover={true}
            className="space-y-4"
          >
            <motion.h4 
              className="text-lg font-semibold mb-4 text-blue-400"
              variants={itemVariants}
            >
              Specializations
            </motion.h4>
            <motion.ul 
              className="space-y-3 text-gray-400 dark:text-gray-500"
              variants={itemVariants}
            >
              {[
                "Test Automation",
                "API Testing", 
                "Performance Testing",
                "Security Testing",
                "CI/CD Integration",
                "Quality Assurance"
              ].map((skill, index) => (
                <motion.li 
                  key={index}
                  className="relative"
                  whileHover={{ x: 5, color: "#9ca3af" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="absolute left-0 top-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 hover:opacity-100"
                    style={{ transform: "translateY(-50%)" }}
                    whileHover={{ opacity: 1, scale: 1.5 }}
                  />
                  <span className="pl-4">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedCard>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p 
            className="text-gray-400 dark:text-gray-500 flex items-center justify-center flex-wrap gap-1"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
            </motion.span>
            <AuroraText 
              size="sm"
              speed={12}
              colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
              className="mx-1"
            >
              Risdho Aliro Sambada
            </AuroraText>
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;