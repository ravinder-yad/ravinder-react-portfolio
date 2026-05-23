import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { motion } from 'framer-motion';

// Home Page Placeholder (White Theme)
const Home = () => (
  <div className="min-h-[200vh] bg-gradient-to-br from-white via-sky-50 to-blue-50 relative overflow-hidden">
    {/* Floating background shapes */}
    <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

    <div className="container mx-auto px-6 pt-32 relative z-10 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ravindra</span><br/>
          Full Stack Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed"
        >
          Building modern digital experiences that are clean, minimal, and highly polished.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            View Projects
          </button>
          <button className="border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 bg-white px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-md">
            Download Resume
          </button>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 mt-20 md:mt-0 flex justify-center">
        {/* Placeholder for 3D/Glass Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[350px] h-[450px] bg-white/70 backdrop-blur-xl rounded-[40px] border border-white shadow-[0_20px_60px_rgba(37,99,235,0.1)] flex items-center justify-center p-8"
        >
          <div className="text-slate-400 text-center">
            <span className="text-6xl block mb-4">✨</span>
            <p className="font-medium">3D Illustration / Graphic Area</p>
          </div>
          {/* Decorative small cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">R</div>
            <div>
              <p className="text-sm font-bold text-slate-800">React Developer</p>
              <p className="text-xs text-slate-500">3+ Years Exp</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);

const About = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">About Page</div>;
const Services = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">Services Page</div>;
const Skills = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">Skills Page</div>;
const Projects = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">Projects Page</div>;
const Resume = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">Resume Page</div>;
const Certificates = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">Certificates Page</div>;
const Contact = () => <div className="h-screen flex items-center justify-center text-4xl font-bold bg-white text-slate-800">Contact Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
