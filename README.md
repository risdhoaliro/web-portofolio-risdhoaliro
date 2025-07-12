# Portfolio Website dengan Lightswind Framework

Portfolio website modern menggunakan **Lightswind** - custom UI framework yang dioptimalkan untuk portfolio dan website personal.

## 🚀 Teknologi yang Digunakan

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **TailwindCSS** - Base Styling
- **Framer Motion** - Advanced Animations
- **Lightswind** - Custom UI Framework
- **Lucide React** - Modern Icons

## ✨ Lightswind Framework

Lightswind adalah custom UI framework yang telah saya implementasikan khusus untuk kebutuhan portfolio website modern. Framework ini menyediakan komponen-komponen yang sudah dioptimalkan dengan animasi smooth dan interaksi yang menarik.

## 📥 How to Import

Framework ini mendukung **path alias "@"** untuk import yang lebih clean dan sesuai konvensi modern:

```tsx
// Menggunakan path alias @ (Recommended)
import SmokeyCursor from "@/components/ui/smokey-cursor"
import { AuroraText } from "@/lightswind"

// Atau menggunakan relative path
import { SmokeyCursor } from '../lightswind';
```

### 📦 Komponen Lightswind

#### 1. **SmokeyCursor**
```tsx
import SmokeyCursor from "@/components/ui/smokey-cursor"

<SmokeyCursor 
  enabled={true}
  preset="neon"
  colorful={true}
  // Optional custom parameters
  particleCount={18}
  particleSize={20}
  intensity={1.3}
  fadeSpeed={0.93}
  densityDissipation={3.2}
  velocityDissipation={2.5}
  splatRadius={0.18}
  splatForce={7000}
  curl={4.5}
/>
```

**Features:**
- 🎨 **6 Built-in Presets**: Default, Water, Fire, Smoke, Neon, Galaxy
- 🌈 **Smart Color System** dengan palette yang disesuaikan per preset
- 🌓 **Theme-adaptive colors** - otomatis adjust brightness berdasarkan background
- ⚡ **Advanced Physics Simulation** dengan velocity dissipation dan density control
- 🎯 **Splat Radius Control** untuk mengatur area efek dan responsiveness
- 💫 **Enhanced Particle System** dengan life cycle dan realistic gravity
- 🎮 **Customizable Parameters** untuk fine-tuning setiap aspek efek
- 🔧 **Curl Effects** untuk vortex-like particle movement
- 📱 **Performance Optimized** dengan smart particle culling
- 🎛️ **Full TypeScript Support** dengan IntelliSense lengkap

**Preset Options:**
- `default`: Rainbow colors dengan balanced physics
- `water`: Blue tones dengan flowing, gentle movement  
- `fire`: Red-orange dengan energetic, fast particles
- `smoke`: Grayscale dengan slow, dispersing movement
- `neon`: Purple-pink dengan glowing, vibrant effects
- `galaxy`: Cosmic colors dengan intense, swirling particles

**Advanced Parameters:**
- `densityDissipation`: Kecepatan hilangnya particle (1-5)
- `velocityDissipation`: Reduksi kecepatan particle (0.5-4)  
- `splatRadius`: Area efek mouse movement (0.1-0.5)
- `splatForce`: Kekuatan dorongan particle (1000-10000)
- `curl`: Intensitas vortex effect (0-10)

#### 2. **AuroraText**
```tsx
import { AuroraText } from "@/lightswind"

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
  Beautiful Aurora Text
</AuroraText>
```

**Features:**
- Smooth gradient animation mengikuti warna aurora
- Customizable speed dan color palette
- Multiple size options (sm, md, lg, xl, 2xl, 3xl, 4xl)
- TypeScript support
- Performance optimized dengan linear animation

#### 3. **DynamicNavigation**
```tsx
import { DynamicNavigation } from "@/lightswind"

<DynamicNavigation
  links={navLinks}
  theme="auto"
  glowIntensity={3}
  showLabelsOnMobile={false}
  onLinkClick={handleLinkClick}
  activeLink={activeLink}
  enableRipple={true}
/>
```

**Features:**
- Smooth scroll navigation
- Auto theme detection untuk balance light/dark mode
- Glow effects dengan intensitas yang bisa diatur
- Ripple animation
- Responsive design
- Theme support (light/dark/auto)

#### 4. **AnimatedCard**
```tsx
import { AnimatedCard } from "@/lightswind"

<AnimatedCard
  delay={0.2}
  direction="up"
  hover={true}
  scale={true}
  glow={true}
  rotate={true}
>
  {/* Content */}
</AnimatedCard>
```

**Features:**
- Multiple animation directions (up, down, left, right)
- Intersection Observer untuk trigger animasi
- Hover effects dengan scale dan rotation
- Glow effects on hover
- Customizable delay

#### 5. **GlowButton**
```tsx
import { GlowButton } from "@/lightswind"

<GlowButton
  variant="primary"
  size="lg"
  pulse={true}
  icon={<Download size={20} />}
  href="/resume.pdf"
  download
>
  Download CV
</GlowButton>
```

**Features:**
- Multiple variants (primary, secondary, outline, ghost)
- Size options (sm, md, lg)
- Pulse animation
- Glow effects
- Support untuk link dan button
- Icon integration

#### 6. **SkillCard**
```tsx
import { SkillCard } from "@/lightswind"

<SkillCard
  title="Test Automation"
  icon={<Code className="w-8 h-8 text-blue-600" />}
  skills={["Robot Framework", "Selenium", "Playwright"]}
  gradient={true}
  index={0}
/>
```

**Features:**
- Staggered animations
- Interactive skill items
- Progress indicators on hover
- Gradient backgrounds
- Icon animations

#### 7. **ContactForm**
```tsx
import { ContactForm } from "@/lightswind"

<ContactForm onSubmit={handleFormSubmit} />
```

**Features:**
- Animated form inputs
- Validation states
- Loading animations
- Icon integration
- Responsive design

#### 8. **FloatingButton**
```tsx
import { FloatingButton } from "@/lightswind"

<FloatingButton
  position="bottom-right"
  color="bg-blue-600"
  pulse={true}
  tooltip="Scroll to top"
  onClick={scrollToTop}
>
  <ArrowUp size={24} />
</FloatingButton>
```

**Features:**
- Fixed positioning options
- Pulse animations
- Tooltip support
- Multiple sizes
- Customizable colors

#### 9. **ProgressBar**
```tsx
import { ProgressBar } from "@/lightswind"

<ProgressBar
  value={85}
  label="React.js"
  animated={true}
  showValue={true}
  color="bg-blue-600"
/>
```

**Features:**
- Animated progress
- Shimmer effects
- Custom colors
- Value display
- Label support

#### 10. **ParallaxSection**
```tsx
import { ParallaxSection } from "@/lightswind"

<ParallaxSection speed={0.5} direction="up" opacity={true}>
  {/* Content dengan efek parallax */}
</ParallaxSection>
```

**Features:**
- Scroll-based animations
- Configurable speed dan direction
- Opacity transitions
- Smooth performance

## 🎨 Design Features

### Advanced Physics Smokey Cursor
- 🎨 **6 Built-in Presets** untuk berbagai mood dan tema
- ⚡ **Advanced Physics Simulation** dengan realistic velocity & density dissipation
- 🎯 **Smart Splat System** yang responsive terhadap kecepatan mouse movement
- 💫 **Enhanced Particle Lifecycle** dengan gravity, expansion, dan fade effects
- 🌓 **Theme-adaptive colors** yang otomatis menyesuaikan brightness
- 🔧 **Curl Effects** untuk vortex-like movement yang natural
- 📱 **Performance optimized** dengan smart particle culling dan requestAnimationFrame
- 🎮 **Fully customizable** dengan 10+ parameter untuk fine-tuning
- **Preset Gallery**:
  - 🌊 **Water**: Flowing blue tones dengan gentle movement
  - 🔥 **Fire**: Energetic red-orange dengan fast particles
  - 💨 **Smoke**: Slow grayscale dispersing effect
  - 💜 **Neon**: Vibrant purple-pink glowing trails  
  - 🌌 **Galaxy**: Cosmic swirling dengan intense colors
  - 🌈 **Default**: Balanced rainbow dengan smooth transitions

### Aurora Text Animation
- **Smooth gradient animation** dengan efek aurora yang menawan
- **Customizable color palette** untuk sesuaikan dengan brand
- **Linear animation** yang optimized untuk performance
- **Multiple size options** dari small hingga 4xl

### Animasi & Transisi
- **Framer Motion** untuk animasi yang smooth dan performant
- **Intersection Observer** untuk trigger animasi saat scroll
- **Staggered animations** untuk efek bertahap yang menarik
- **Micro-interactions** pada setiap elemen interaktif

### Responsive Design
- Mobile-first approach
- Adaptive layout untuk semua ukuran layar
- Touch-friendly interactions
- Optimized performance pada mobile

### Dark Mode Support
- Automatic theme detection
- Smooth transitions antar tema
- Consistent color palette
- Accessible contrast ratios

### Performance Optimizations
- **Tree shaking** untuk bundle size yang minimal
- **Lazy loading** untuk komponen
- **Optimized animations** dengan GPU acceleration
- **Efficient re-renders** dengan React best practices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── lightswind/           # Custom UI Framework
│   ├── index.ts         # Export semua komponen
│   ├── SmokeyCursor.tsx # Interactive smokey cursor effect
│   ├── AuroraText.tsx   # Aurora gradient text animation
│   ├── DynamicNavigation.tsx
│   ├── AnimatedCard.tsx
│   ├── GlowButton.tsx
│   ├── SkillCard.tsx
│   ├── ContactForm.tsx
│   ├── FloatingButton.tsx
│   ├── ProgressBar.tsx
│   └── ParallaxSection.tsx
├── components/          # Page components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── contexts/           # React contexts
└── App.tsx            # Main app component
```

## 🎯 Key Advantages Lightswind

1. **Modular & Reusable** - Setiap komponen bisa digunakan secara independen
2. **TypeScript Support** - Full type safety dan IntelliSense
3. **Performance Optimized** - Menggunakan best practices untuk performa
4. **Customizable** - Setiap komponen memiliki props untuk customization
5. **Accessible** - Mengikuti standar accessibility (WCAG)
6. **Modern Animations** - Menggunakan Framer Motion untuk animasi advanced
7. **Responsive by Default** - Mobile-first design approach
8. **Aurora Effects** - Beautiful gradient animations untuk text yang menawan
9. **Advanced Cursor Physics** - 6 preset effects dengan fluid simulation parameters
10. **Preset System** - Ready-to-use configurations: Water, Fire, Smoke, Neon, Galaxy effects
11. **Interactive Experience** - Immersive user experience dengan micro-interactions yang smooth

## 🌟 Live Demo

Project ini sudah running dan bisa diakses di `http://localhost:5173` setelah menjalankan `npm run dev`.

## 🤝 Contributing

Lightswind framework dikembangkan khusus untuk portfolio ini, namun bisa diadaptasi untuk project lain. Feel free to extend dan customize sesuai kebutuhan!

## ⚙️ Path Alias Configuration

Project ini telah dikonfigurasi dengan **path alias "@"** untuk import yang lebih clean:

### Vite Configuration
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### TypeScript Configuration
```json
// tsconfig.app.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

**Dibuat dengan ❤️ menggunakan Lightswind Framework** 