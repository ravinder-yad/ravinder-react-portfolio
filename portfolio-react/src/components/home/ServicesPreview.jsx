import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Frontend Development",
    desc: "React + Tailwind websites.",
    icon: "💻"
  },
  {
    title: "Backend APIs",
    desc: "Node.js + Express APIs.",
    icon: "⚙️"
  },
  {
    title: "Responsive Design",
    desc: "Mobile-first UI.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    desc: "Modern interfaces.",
    icon: "✨"
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            My <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-poppins"
          >
            Comprehensive digital solutions tailored for modern businesses and startups.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-poppins">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
