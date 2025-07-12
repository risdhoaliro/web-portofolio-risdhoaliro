import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Database, 
  Zap, 
  Settings, 
  Users,
  TestTube,
  Bug,
  Activity
} from 'lucide-react';
import { SkillCard, AnimatedCard, AuroraText } from '../lightswind';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Test Automation",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: [
        "Robot Framework",
        "Selenium WebDriver", 
        "Katalon Studio",
        "Playwright",
        "UIPath",
        "Cypress"
      ]
    },
    {
      title: "API & Performance Testing",
      icon: <Zap className="w-8 h-8 text-green-600" />,
      skills: [
        "Postman",
        "K6 Performance Testing",
        "Swagger",
        "REST API Testing",
        "GraphQL Testing",
        "Load Testing"
      ]
    },
    {
      title: "Security Testing",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      skills: [
        "Burpsuite",
        "OWASP Testing",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Scanning",
        "Bug Bounty"
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      skills: [
        "SQL Query Testing",
        "Database Validation",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Data Migration Testing"
      ]
    },
    {
      title: "CI/CD & DevOps",
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      skills: [
        "Jenkins",
        "GitLab CI/CD",
        "Docker",
        "Kubernetes",
        "Pipeline Automation",
        "Test Orchestration"
      ]
    },
    {
      title: "Monitoring & Reporting",
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      skills: [
        "Grafana",
        "Portainer",
        "Test Reporting",
        "Metrics Analysis",
        "Dashboard Creation",
        "Performance Monitoring"
      ]
    },
    {
      title: "Testing Methodologies",
      icon: <TestTube className="w-8 h-8 text-teal-600" />,
      skills: [
        "Functional Testing",
        "Smoke Testing",
        "Sanity Testing",
        "Regression Testing",
        "Compatibility Testing",
        "Exploratory Testing"
      ]
    },
    {
      title: "Project Management",
      icon: <Users className="w-8 h-8 text-pink-600" />,
      skills: [
        "Agile/Scrum",
        "JIRA",
        "Test Planning",
        "Team Leadership",
        "Sprint Management",
        "Stakeholder Communication"
      ]
    }
  ];

  const certifications = [
    "ISTQB Foundation Level",
    "Agile Testing Certification", 
    "Security Testing Professional",
    "Robot Framework Certified"
  ];

  const achievements = [
    {
      icon: <Bug className="w-8 h-8" />,
      title: "99.5% Success Rate",
      description: "Improved automation test success rate from 50% to 99.5%–100%",
      color: "bg-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Expert",
      description: "Specialized in K6 performance testing with Grafana monitoring",
      color: "bg-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Led QA initiatives across multiple fintech and insurtech projects",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
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
              speed={7}
              colors={[
                '#3b82f6', // blue-500
                '#8b5cf6', // violet-500
                '#06b6d4', // cyan-500
                '#f59e0b', // amber-500
                '#ef4444', // red-500
                '#8b5cf6'  // violet-500
              ]}
            >
              Technical Skills
            </AuroraText>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive expertise across testing frameworks, automation tools, and quality assurance methodologies
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              gradient={true}
              index={index}
            />
          ))}
        </div>

        {/* Key Achievements */}
        <AnimatedCard
          direction="up"
          hover={true}
          scale={true}
          glow={true}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-16"
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Achievements
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <motion.div
                  className={`${achievement.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ 
                    scale: 1.25, 
                    rotate: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>

        {/* Certifications */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & Training
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;