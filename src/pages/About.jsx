import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';
import { aboutData } from '../data';

const About = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();


    // Helper to safely get the current section
    const currentSection = aboutData[index];

    return (
        <div className="h-full bg-primary/30 text-center xl:text-left relative overflow-y-auto overflow-x-hidden pt-20 pb-20 xl:pt-20 xl:pb-32">


            {/* Background Effects */}
            <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="absolute inset-0 bg-circleStar bg-cover bg-center opacity-20 mix-blend-color-dodge pointer-events-none"></div>
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            <div className="container mx-auto h-auto min-h-full flex flex-col xl:flex-row gap-x-6 xl:gap-x-12 relative z-10 xl:items-center px-4 md:px-10 lg:px-20 xl:px-0 pb-0 xl:pb-0">

                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center px-4 mb-4 xl:mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight pt-4 xl:pt-0"
                    >
                        Turning ideas into <br />
                        <span className="text-accent underline decoration-white/10 underline-offset-8">
                            real-world digital solutions
                        </span>.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-10 text-white/80 leading-relaxed text-base md:text-lg space-y-4 xl:space-y-6"
                    >
                        <p>
                            I’m <span className="text-white font-bold border-b-2 border-accent/30">Ravinder Kumar</span>, a passionate Full Stack Web Developer who enjoys building clean, scalable, and user-focused web applications that solve real-world problems.
                        </p>
                        <p>
                            I focus on bridging intuitive frontend experiences with robust backend systems to deliver reliable, high-performing, and user-friendly digital products.
                        </p>
                    </motion.div>

                    {/* Projects Counter */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="hidden xl:flex justify-center xl:justify-start"
                    >
                        <div
                            onClick={() => navigate('/projects')}
                            className="relative bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-all group max-w-[220px] shadow-2xl shadow-accent/5"
                        >
                            <div className="text-4xl xl:text-5xl font-extrabold text-accent mb-2 group-hover:scale-110 transition-transform duration-500">
                                10+
                            </div>
                            <div className="text-sm uppercase tracking-widest font-bold text-white/90">
                                Projects Completed
                            </div>
                            <div className="absolute top-3 right-3 text-white/20 group-hover:text-accent transition-all text-xs border border-white/10 px-2 py-0.5 rounded-full">
                                View
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Tabs Section */}
                <div className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px]">
                    <div className="flex flex-wrap justify-center xl:justify-start gap-2 md:gap-4 mb-6 xl:mb-8 bg-white/10 p-2 rounded-[20px] md:rounded-full border border-white/20 backdrop-blur-xl mx-auto xl:mx-0 w-max max-w-full">
                        {aboutData.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                onClick={() => setIndex(itemIndex)}
                                className={`${index === itemIndex
                                    ? 'bg-accent text-white shadow-lg shadow-accent/40 scale-105'
                                    : 'text-white/60 hover:text-white hover:bg-white/10'
                                    } cursor-pointer capitalize text-sm md:text-base xl:text-lg px-4 md:px-6 py-2 rounded-full transition-all duration-300 font-bold whitespace-nowrap border border-transparent ${index !== itemIndex ? 'hover:border-white/10' : ''}`}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    <div className="py-6 px-4 xl:py-10 xl:px-8 flex flex-col gap-y-4 xl:gap-y-6 bg-white/10 rounded-[24px] xl:rounded-[32px] border border-white/20 backdrop-blur-2xl shadow-2xl relative min-h-0 xl:min-h-[450px]">
                        <div className="mb-4 xl:mb-8 border-l-4 border-accent pl-4 xl:pl-6">
                            <h3 className="text-2xl xl:text-3xl font-extrabold text-white mb-1 xl:mb-2">
                                {currentSection.heading}
                            </h3>
                            {currentSection.subheading && (
                                <p className="text-white/50 text-sm xl:text-base italic line-clamp-2 xl:line-clamp-none">
                                    {currentSection.subheading}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-y-6 xl:gap-y-8 h-auto xl:h-[300px] overflow-visible xl:overflow-y-auto pr-0 xl:pr-4">
                            {currentSection.info.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="flex justify-between items-center mb-2 xl:mb-3">
                                        <div className="font-bold text-lg xl:text-xl text-white">{item.title}</div>
                                        {item.stage && (
                                            <div className="text-xs xl:text-sm text-accent font-bold bg-accent/10 px-2 xl:px-3 py-1 rounded-lg border border-accent/20">
                                                {item.stage}
                                            </div>
                                        )}
                                    </div>

                                    {item.desc && (
                                        <p className="text-white/60 leading-relaxed mb-4 xl:mb-6 text-sm xl:text-base">
                                            {item.desc}
                                        </p>
                                    )}

                                    {item.icons && (
                                        <div className="flex gap-x-6 xl:gap-x-8 flex-wrap gap-y-4">
                                            {item.icons.map((iconData, iconIndex) => (
                                                <div key={iconIndex} className="group relative flex flex-col items-center">
                                                    <div className="text-3xl xl:text-4xl text-white/80 hover:text-accent hover:scale-125 transition-all duration-500 cursor-pointer">
                                                        {iconData.Icon && <iconData.Icon />}
                                                    </div>
                                                    <div className="mt-2 text-[10px] xl:hidden text-white/60">
                                                        {iconData.name}
                                                    </div>
                                                    <div className="hidden xl:block absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-accent text-white text-xs font-bold px-3 py-1 rounded-lg whitespace-nowrap">
                                                        {iconData.name}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Added spacer to push content above navbar on mobile */}
            <div className="h-40 xl:hidden"></div>
        </div >
    );
};

export default About;
