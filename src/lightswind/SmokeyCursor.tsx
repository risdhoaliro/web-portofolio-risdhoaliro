import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SmokeyParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  vx: number;
  vy: number;
  color: string;
  hue: number;
}

interface SmokeyCursorProps {
  enabled?: boolean;
  particleCount?: number;
  particleSize?: number;
  trailLength?: number;
  intensity?: number;
  fadeSpeed?: number;
  colorful?: boolean;
  preset?: 'default' | 'water' | 'fire' | 'smoke' | 'neon' | 'galaxy';
  densityDissipation?: number;
  velocityDissipation?: number;
  splatRadius?: number;
  splatForce?: number;
  curl?: number;
}

type PresetConfig = {
  colors: string[];
  particleCount: number;
  particleSize: number;
  intensity: number;
  fadeSpeed: number;
  densityDissipation: number;
  velocityDissipation: number;
  splatRadius: number;
  splatForce: number;
  curl: number;
};

const SmokeyCursor: React.FC<SmokeyCursorProps> = ({
  enabled = true,
  particleCount = 15,
  particleSize = 20,
  trailLength = 10,
  intensity = 1,
  fadeSpeed = 0.95,
  colorful = true,
  preset = 'default',
  densityDissipation = 3.5,
  velocityDissipation = 2,
  splatRadius = 0.2,
  splatForce = 6000,
  curl = 3
}) => {
  const [particles, setParticles] = useState<SmokeyParticle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const particleIdRef = useRef(0);
  const animationRef = useRef<number>();
  const lastPosRef = useRef({ x: 0, y: 0 });
  const hueRef = useRef(0);

  // Preset configurations
  const presets: Record<string, PresetConfig> = {
    default: {
      colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'],
      particleCount: 12,
      particleSize: 18,
      intensity: 0.8,
      fadeSpeed: 0.96,
      densityDissipation: 3.5,
      velocityDissipation: 2,
      splatRadius: 0.2,
      splatForce: 6000,
      curl: 3
    },
    water: {
      colors: ['#0ea5e9', '#06b6d4', '#0891b2', '#0369a1', '#1e40af'],
      particleCount: 15,
      particleSize: 22,
      intensity: 1.2,
      fadeSpeed: 0.94,
      densityDissipation: 2.5,
      velocityDissipation: 1.5,
      splatRadius: 0.3,
      splatForce: 5000,
      curl: 4
    },
    fire: {
      colors: ['#dc2626', '#ea580c', '#f59e0b', '#eab308', '#ef4444'],
      particleCount: 20,
      particleSize: 16,
      intensity: 1.5,
      fadeSpeed: 0.92,
      densityDissipation: 4.5,
      velocityDissipation: 3,
      splatRadius: 0.15,
      splatForce: 8000,
      curl: 5
    },
    smoke: {
      colors: ['#6b7280', '#9ca3af', '#d1d5db', '#374151', '#4b5563'],
      particleCount: 10,
      particleSize: 25,
      intensity: 0.6,
      fadeSpeed: 0.98,
      densityDissipation: 2.0,
      velocityDissipation: 1.8,
      splatRadius: 0.25,
      splatForce: 4000,
      curl: 2
    },
    neon: {
      colors: ['#a855f7', '#8b5cf6', '#ec4899', '#f97316', '#06b6d4'],
      particleCount: 18,
      particleSize: 20,
      intensity: 1.3,
      fadeSpeed: 0.93,
      densityDissipation: 3.2,
      velocityDissipation: 2.5,
      splatRadius: 0.18,
      splatForce: 7000,
      curl: 4.5
    },
    galaxy: {
      colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'],
      particleCount: 25,
      particleSize: 14,
      intensity: 2.0,
      fadeSpeed: 0.90,
      densityDissipation: 5.0,
      velocityDissipation: 3.5,
      splatRadius: 0.12,
      splatForce: 9000,
      curl: 6
    }
  };

  // Get current preset configuration
  const currentPreset = presets[preset] || presets.default;

  // Use preset values if not overridden by props
  const effectiveConfig = useMemo(() => ({
    particleCount: particleCount || currentPreset.particleCount,
    particleSize: particleSize || currentPreset.particleSize,
    intensity: intensity || currentPreset.intensity,
    fadeSpeed: fadeSpeed || currentPreset.fadeSpeed,
    densityDissipation: densityDissipation || currentPreset.densityDissipation,
    velocityDissipation: velocityDissipation || currentPreset.velocityDissipation,
    splatRadius: splatRadius || currentPreset.splatRadius,
    splatForce: splatForce || currentPreset.splatForce,
    curl: curl || currentPreset.curl
  }), [
    particleCount, particleSize, intensity, fadeSpeed, densityDissipation,
    velocityDissipation, splatRadius, splatForce, curl, currentPreset
  ]);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Generate colors based on preset
    const getRandomColor = () => {
      if (!colorful) {
        // Fallback to theme colors if not colorful
        return isDarkMode 
          ? 'rgba(59, 130, 246, 0.4)' 
          : 'rgba(75, 85, 99, 0.6)';
      }

      const presetColors = currentPreset.colors;
      
      // Enhanced color variation based on preset
      const enhancedColors = isDarkMode ? 
        presetColors.map(color => `${color}80`) : // Add transparency for dark mode
        presetColors.map(color => `${color}CC`);  // Add transparency for light mode

      // Cycle through colors smoothly with curl effect
      hueRef.current = (hueRef.current + effectiveConfig.curl) % (enhancedColors.length * 10);
      const colorIndex = Math.floor(hueRef.current / 10);
      return enhancedColors[colorIndex] || enhancedColors[0];
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      
      // Enhanced movement detection with splat radius
      const distance = Math.sqrt(
        Math.pow(newPos.x - lastPosRef.current.x, 2) + 
        Math.pow(newPos.y - lastPosRef.current.y, 2)
      );
      
      const movementThreshold = effectiveConfig.splatRadius * 100;
      setIsMoving(distance > movementThreshold);
      lastPosRef.current = newPos;

      // Add new particles when moving with enhanced physics
      if (distance > movementThreshold) {
        const newParticles: SmokeyParticle[] = [];
        const baseCount = Math.min(
          effectiveConfig.particleCount, 
          Math.floor(distance / (effectiveConfig.splatRadius * 10))
        );
        
        for (let i = 0; i < baseCount * effectiveConfig.intensity; i++) {
          const particleColor = getRandomColor();
          const spread = effectiveConfig.splatRadius * 100;
          const forceMultiplier = effectiveConfig.splatForce / 6000;
          
          newParticles.push({
            id: particleIdRef.current++,
            x: newPos.x + (Math.random() - 0.5) * spread,
            y: newPos.y + (Math.random() - 0.5) * spread,
            size: Math.random() * effectiveConfig.particleSize + 5,
            opacity: Math.random() * 0.8 + 0.2,
            life: 1,
            vx: (Math.random() - 0.5) * 4 * forceMultiplier,
            vy: (Math.random() - 0.5) * 4 * forceMultiplier - 0.5,
            color: particleColor,
            hue: hueRef.current
          });
        }

        setParticles(prev => [...prev, ...newParticles].slice(-trailLength * 15));
      }
    };

    // Enhanced animation loop with physics
    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => {
            // Apply velocity dissipation
            const newVx = particle.vx * (1 - effectiveConfig.velocityDissipation / 100);
            const newVy = particle.vy * (1 - effectiveConfig.velocityDissipation / 100);
            
            return {
              ...particle,
              x: particle.x + newVx,
              y: particle.y + newVy,
              vx: newVx,
              vy: newVy + 0.02, // Enhanced gravity
              opacity: particle.opacity * effectiveConfig.fadeSpeed,
              life: particle.life * (1 - effectiveConfig.densityDissipation / 100),
              size: particle.size * 1.01, // Slight expansion
            };
          })
          .filter(particle => particle.opacity > 0.01 && particle.life > 0.01)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enabled, effectiveConfig, trailLength, colorful, isDarkMode, currentPreset]);

  // Theme-adaptive cursor colors based on preset
  const getThemeColors = () => {
    const baseColor = currentPreset.colors[0];
    
    if (isDarkMode) {
      return {
        cursorColor: `${baseColor}60`,
        cursorBorder: baseColor,
        glowColor: `${baseColor}30`,
        blendMode: 'screen' as const
      };
    } else {
      return {
        cursorColor: `${baseColor}80`,
        cursorBorder: baseColor,
        glowColor: `${baseColor}40`,
        blendMode: 'multiply' as const
      };
    }
  };

  const themeColors = getThemeColors();

  if (!enabled) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: themeColors.blendMode }}
    >
      {/* Enhanced cursor dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full border-2"
        style={{
          left: mousePos.x - 6,
          top: mousePos.y - 6,
          background: themeColors.cursorColor,
          borderColor: themeColors.cursorBorder,
          boxShadow: isMoving 
            ? `0 0 ${effectiveConfig.splatRadius * 100}px ${themeColors.cursorColor}` 
            : `0 0 10px ${themeColors.cursorColor}`
        }}
        animate={{
          scale: isMoving ? [1, 1.5, 1] : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />

      {/* Enhanced particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            opacity: particle.opacity,
            filter: `blur(${Math.max(1, particle.size / 15)}px)`,
            transform: `scale(${particle.life})`
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: particle.life,
            opacity: particle.opacity 
          }}
          transition={{ 
            duration: 0.2,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Enhanced trailing glow effect */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: mousePos.x - (effectiveConfig.splatRadius * 50),
          top: mousePos.y - (effectiveConfig.splatRadius * 50),
          width: effectiveConfig.splatRadius * 100,
          height: effectiveConfig.splatRadius * 100,
          background: `radial-gradient(circle, ${themeColors.glowColor} 0%, transparent 70%)`,
          filter: 'blur(8px)'
        }}
        animate={{
          scale: isMoving ? [1, 1.8, 1] : 1,
          opacity: isMoving ? [0.6, 1, 0.6] : 0.2
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: isMoving ? Infinity : 0
        }}
      />
    </div>
  );
};

export default SmokeyCursor; 