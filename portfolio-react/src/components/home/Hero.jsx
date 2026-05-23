import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100 flex items-center">
      
      {/* Animated Blur Circles */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-40 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 -right-20 w-[500px] h-[500px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white shadow-sm mb-6"
          >
            <span className="text-xl">👋</span>
            <span className="text-sm font-semibold text-slate-700">Hello, I'm Ravindra Yadav</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[70px] font-black text-slate-900 leading-tight tracking-tight mb-4"
          >
            Full Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Web Developer
            </span> <br />
            Creating Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Digital Experiences
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-slate-700 mb-6 h-[40px]"
          >
            <Typewriter
              options={{
                strings: [
                  'MERN Stack Developer',
                  'Frontend Engineer',
                  'React Developer',
                  'UI Creator'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-blue-600"
              }}
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-poppins"
          >
            I build fast, modern, responsive and user-friendly web applications with premium UI experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              View Projects
            </button>
            <button className="border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Graphic / Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[500px] md:h-[600px] items-center">
          
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} className="relative z-10 w-full max-w-[450px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[4/5] bg-white/70 backdrop-blur-2xl rounded-[40px] border border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-8 relative overflow-hidden group"
            >
              {/* Internal Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-300 to-transparent opacity-50 rounded-bl-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-300 to-transparent opacity-50 rounded-tr-[100px]"></div>
              
              <div className="text-8xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">👨‍💻</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Frontend Magic</h3>
              <p className="text-slate-500 text-center font-poppins text-sm">Crafting pixels into beautiful, functional interfaces.</p>
              
              {/* Overlay Glass Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-6 md:-left-12 bottom-24 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 w-[220px]"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">React</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Clean Code</p>
                  <p className="text-xs text-slate-500">Architecture</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 md:-right-8 top-32 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-cyan-50 text-cyan-500 rounded-full flex items-center justify-center text-xl">✨</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">UI/UX</p>
                </div>
              </motion.div>
            </motion.div>
          </Tilt>

          {/* Floating Tech Icons around the Illustration */}
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[10%] right-[80%] w-14 h-14 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center text-blue-500 text-2xl z-20">
            ⚛️
          </motion.div>
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] right-[10%] w-16 h-16 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center text-green-500 text-3xl z-20">
            Node
          </motion.div>

        </div>
      </div>
    </section>
  );
};
