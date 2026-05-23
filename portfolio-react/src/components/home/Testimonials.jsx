import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Professional and modern developer with excellent UI skills. Delivered exactly what we envisioned.",
    name: "Alex Johnson",
    role: "Product Manager, TechStart",
    avatar: "AJ"
  },
  {
    quote: "A true frontend engineer. The attention to detail and smooth animations elevated our brand completely.",
    name: "Sarah Williams",
    role: "CEO, DesignHub",
    avatar: "SW"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f8fafc] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Client <span className="text-blue-600">Testimonials</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative"
            >
              <div className="text-blue-200 text-6xl absolute top-6 right-8 font-serif leading-none">"</div>
              <p className="text-lg text-slate-600 font-poppins leading-relaxed mb-8 relative z-10 italic">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{test.name}</h4>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
