import React from 'react';
import { motion } from 'framer-motion';

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Image/Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                <span className="text-8xl transform group-hover:scale-110 transition-transform duration-700">🚀</span>
              </div>
              
              {/* Floating stat card */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 z-10"
              >
                <p className="text-4xl font-black text-blue-600 mb-1">3+</p>
                <p className="text-slate-500 font-medium">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Building digital <br/>products, brands, <br/>and <span className="text-blue-600">experience</span>.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-500 mb-10 font-poppins leading-relaxed"
            >
              Passionate Full Stack Developer focused on building scalable and visually appealing web applications. I bridge the gap between design and engineering to create perfect user experiences.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Experience", desc: "Startups & Agencies" },
                { title: "Projects", desc: "40+ Completed" },
                { title: "Technologies", desc: "MERN & Next.js" },
                { title: "Certifications", desc: "AWS & React" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-shadow duration-300"
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
