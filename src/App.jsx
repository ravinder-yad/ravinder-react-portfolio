import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import ParticlesContainer from './components/ParticlesContainer';
import Circles from './components/Circles';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds spin

    return () => clearTimeout(timer);
  }, []);

  //kkiop

  return (
    <Router>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-hidden h-screen">
            {/* Global Background Particles Animation */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
              <ParticlesContainer />
            </div>

            {/* Global Background Image (Full Visibility) */}
            <div className="absolute inset-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-100 mix-blend-color-dodge translate-z-0 pointer-events-none"></div>

            {/* Global Background Circles Decoration */}
            <Circles />

            <Navbar />

            <Layout>
              <div className="relative z-10 h-full">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </Layout>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
