import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

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

  return (
    <Router>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-hidden h-screen">
            <Navbar />

            <Layout>
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
            </Layout>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
