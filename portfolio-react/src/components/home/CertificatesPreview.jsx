import React from 'react';
import { motion } from 'framer-motion';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const certificates = [
  { title: "React Native Specialist", issuer: "Meta", year: "2023" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024" },
  { title: "Full Stack Development", issuer: "Udemy", year: "2023" }
];

export const CertificatesPreview = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            My <span className="text-blue-600">Certificates</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-poppins"
          >
            Continuous learning and validation of my technical expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f8fafc] p-8 rounded-[32px] border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                🎓
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 pr-8">{cert.title}</h3>
              <div className="flex items-center justify-between mt-6">
                <span className="text-slate-500 font-medium">{cert.issuer}</span>
                <span className="text-slate-400 text-sm">{cert.year}</span>
              </div>
              
              <div className="absolute top-8 right-8 text-slate-300 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <OpenInNewRoundedIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
