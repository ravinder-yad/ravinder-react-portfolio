import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A comprehensive dashboard for managing products, orders, and users with real-time analytics.",
    tags: ["React", "Tailwind CSS", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "SaaS Landing Page",
    desc: "A highly converting, animated landing page for a modern software as a service company.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  }
];

export const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
            >
              Featured <span className="text-blue-600">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg font-poppins"
            >
              Some of my recent work that showcases my technical skills and design focus.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group">
              View All Projects 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group rounded-[32px] bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full aspect-video overflow-hidden relative bg-slate-100">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-500 font-poppins mb-8 flex-1">{project.desc}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <button className="flex-1 bg-slate-900 hover:bg-blue-600 text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                    <OpenInNewRoundedIcon fontSize="small" /> Live Demo
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-slate-300 hover:border-slate-800 text-slate-600 hover:text-slate-900 rounded-full transition-colors">
                    <GitHubIcon />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
