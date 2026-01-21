import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SmokeyCursor } from './lightswind';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';

// Homepage component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Certifications />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <SmokeyCursor 
            enabled={true}
            preset="neon"
            colorful={true}
          />
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;