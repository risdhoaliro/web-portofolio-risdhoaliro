import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { GlowButton } from '../lightswind';

// Enhanced floating particles for Hero section
const HeroFloatingParticles = () => {
  const particles = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 4, // Larger particles for Hero (4-16px)
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 30 + 15,
    delay: Math.random() * 10,
    color: i % 6, // More color variety
  }));

  const getParticleColor = (colorIndex: number) => {
    const colors = [
      'bg-blue-500/60 dark:bg-blue-400/70', // Blue
      'bg-indigo-500/60 dark:bg-indigo-400/70', // Indigo
      'bg-cyan-500/60 dark:bg-cyan-400/70', // Cyan
      'bg-violet-500/60 dark:bg-violet-400/70', // Violet
      'bg-pink-500/60 dark:bg-pink-400/70', // Pink
      'bg-emerald-500/60 dark:bg-emerald-400/70', // Emerald
    ];
    return colors[colorIndex];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${getParticleColor(particle.color)} shadow-lg`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            filter: 'blur(1px)',
            boxShadow: '0 0 15px currentColor',
          }}
          animate={{
            x: [0, 200, -100, 250, 0],
            y: [0, -150, 100, -120, 0],
            opacity: [0.2, 0.8, 0.4, 1, 0.2],
            scale: [0.3, 1.5, 0.7, 1.8, 0.3],
            rotate: [0, 270, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Hero orbiting particles
const HeroOrbitingParticles = () => {
  const orbs = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    radius: 200 + i * 25,
    size: Math.random() * 8 + 3, // Larger orbs (3-11px)
    speed: 12 + i * 2,
    delay: i * 0.4,
    color: i % 6,
  }));

  const getOrbColor = (colorIndex: number) => {
    const colors = [
      'from-blue-400 to-blue-600',
      'from-indigo-400 to-indigo-600',
      'from-cyan-400 to-cyan-600',
      'from-violet-400 to-violet-600',
      'from-pink-400 to-pink-600',
      'from-emerald-400 to-emerald-600',
    ];
    return colors[colorIndex];
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: orb.speed,
            delay: orb.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className={`bg-gradient-to-r ${getOrbColor(orb.color)} rounded-full shadow-lg`}
            style={{
              width: orb.size,
              height: orb.size,
              marginLeft: orb.radius,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 12px currentColor',
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Hero spark particles
const HeroSparkParticles = () => {
  const sparks = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 8,
    color: i % 3,
  }));

  const getSparkColor = (colorIndex: number) => {
    const colors = [
      'bg-yellow-400/90 dark:bg-yellow-300/95',
      'bg-orange-400/90 dark:bg-orange-300/95',
      'bg-amber-400/90 dark:bg-amber-300/95',
    ];
    return colors[colorIndex];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className={`absolute rounded-full ${getSparkColor(spark.color)}`}
          style={{
            width: spark.size,
            height: spark.size,
            left: `${spark.initialX}%`,
            top: `${spark.initialY}%`,
            boxShadow: '0 0 8px currentColor',
          }}
          animate={{
            x: [0, 80, -50, 120, 0],
            y: [0, -80, 60, -70, 0],
            opacity: [0, 1, 0.6, 1, 0],
            scale: [0, 1.5, 0.8, 1.8, 0],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
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
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        type: "spring" as const,
        stiffness: 120
      }
    },
    hover: {
      scale: 1.1,
      rotate: 3,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 transition-colors duration-300 overflow-hidden">
      {/* Enhanced Hero Particles Background - Multiple Layers */}
      <HeroFloatingParticles />
      <HeroOrbitingParticles />
      <HeroSparkParticles />

      {/* Enhanced animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-50/20 to-cyan-100/30 dark:from-blue-900/20 dark:via-indigo-900/15 dark:to-cyan-900/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center transform transition-all duration-500 cursor-pointer relative"
              variants={avatarVariants}
              whileHover="hover"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-4xl font-bold text-white relative z-10">RA</span>
              
              {/* Avatar particle ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/70 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(70px)`,
                    }}
                    animate={{
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Risdho Aliro Sambada
          </motion.h1>
          
          {/* Titles */}
          <motion.div
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 space-y-2"
            variants={itemVariants}
          >
            <motion.p 
              className="font-semibold"
              animate={{
                color: ["#6b7280", "#2563eb", "#6b7280"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Software Development Engineer in Test
            </motion.p>
            <p className="text-lg">
              Penetration Tester | Bug Hunter | QA Engineer
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Over 4 years of experience in quality assurance and automation testing. 
            Proven expertise in developing automated testing strategies and enhancing 
            product quality through comprehensive testing methodologies.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <GlowButton
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              pulse={true}
            >
              Get In Touch
            </GlowButton>
            
            <GlowButton
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </GlowButton>
            
            <GlowButton
              variant="ghost"
              size="lg"
              href="/resume.pdf"
              download
              icon={<Download size={20} />}
            >
              Download CV
            </GlowButton>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.a
              href="#about"
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;