import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiMagnifyingGlassCircle } from 'react-icons/hi2';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';
import { certificatesData } from '../data';

const Certificates = () => {


    return (
        <div className="h-full min-h-screen bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden">

            {/* Background Image / Decoration */}
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            <div className="container mx-auto px-4 relative z-10">

                {/* Heading */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className='bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-accent font-bold mb-4 uppercase tracking-[2px] text-xs inline-block'
                    >
                        Credentials
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl xl:text-6xl font-extrabold mb-4"
                    >
                        My <span className="text-accent underline decoration-white/10 underline-offset-8">Certifications.</span>
                    </motion.h2>
                    <p className="text-white/50 text-lg font-light max-w-[600px] mx-auto">
                        Verified skills from CodeChef and other platforms.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
                    {certificatesData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-md group hover:border-accent/30 transition-all duration-500 relative overflow-hidden flex flex-col"
                        >
                            {/* Certificate Image Placeholder / Media */}
                            <div className='relative h-[240px] overflow-hidden bg-[#1e1e2e]'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100'
                                />
                                <div className='absolute inset-0 bg-accent/10 mix-blend-overlay'></div>
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary text-2xl'>
                                        <HiMagnifyingGlassCircle />
                                    </div>
                                </div>
                            </div>

                            <div className='p-8 flex flex-col flex-1 text-left'>
                                <div className='flex justify-between items-start mb-4'>
                                    <span className='text-accent font-bold text-[10px] uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20'>
                                        {item.date}
                                    </span>
                                    <HiAcademicCap className='text-white/20 text-2xl group-hover:text-accent transition-colors' />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-6">{item.issuer}</p>

                                <div className='mt-auto pt-4 border-t border-white/5 flex flex-col gap-y-1'>
                                    <span className='text-[10px] text-white/20 font-bold uppercase tracking-widest'>Credential ID: {item.credential}</span>
                                    <span className='text-[10px] text-accent/60 font-medium italic'>Verified by Official {item.issuer} Board</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className='mt-20 text-center border-t border-white/5 pt-10'
                >
                    <p className='text-white/30 italic font-light'>Actual certificate documents available upon request.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Certificates;
