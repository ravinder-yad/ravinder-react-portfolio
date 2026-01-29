import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiComputerDesktop, HiCodeBracketSquare, HiDevicePhoneMobile, HiServer } from "react-icons/hi2";
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';

// Icon Map
const iconMap = {
    HiComputerDesktop,
    HiCodeBracketSquare, 
    HiDevicePhoneMobile,
    HiServer
};

const Services = () => {
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/services");
                if (response.ok) {
                    const result = await response.json();
                    if (Array.isArray(result)) {
                        setServiceData(result);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch services data:", error);
            }
        };

        fetchData();
    }, []);

    if (!serviceData) {
        return (
            <div className="h-full bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden flex items-center justify-center">
                {/* Background Image / Decoration */}
                <div className='absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                    <ParticlesContainer />
                </div>
                <Circles />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="z-10 text-accent text-2xl font-bold animate-pulse"
                >
                    Loading...
                </motion.div>
            </div>
        );
    }

    return (
        <div className="h-full bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden">


            {/* Background Image / Decoration */}
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
                <div className="flex flex-col xl:flex-row gap-x-8 items-center">
                    {/* text */}
                    <div className="text-center lg:text-left xl:w-[30vw] flex flex-col mb-12 xl:mb-0 justify-center items-center lg:items-start">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-4xl xl:text-5xl leading-tight font-bold mb-4"
                        >
                            My Services <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="max-w-[400px] mx-auto lg:mx-0 text-white/60 leading-relaxed"
                        >
                            I offer a range of web development services to help bring ideas to life, from clean and responsive websites to complete, scalable web applications.
                        </motion.p>
                    </div>

                    {/* grid */}
                    <div className="w-full lg:max-w-[90%] xl:max-w-[65%]">
                        <div className="grid md:grid-cols-2 gap-6">
                            {serviceData.map((item, index) => {
                                const IconComponent = iconMap[item.icon] || HiComputerDesktop;

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        key={index}
                                        className="bg-[rgba(65,47,123,0.15)] rounded-lg p-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.3)] transition-all duration-300 border border-white/5 hover:border-accent/50 relative overflow-hidden"
                                    >
                                        <div className="flex justify-between items-start mb-4 relative z-10">
                                            <div className="text-4xl text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                                                <IconComponent />
                                            </div>
                                            <div className="text-2xl text-white/50 group-hover:text-white group-hover:-rotate-45 transition-all duration-300">
                                                →
                                            </div>
                                        </div>

                                        <div className='relative z-10'>
                                            <div className="mb-2 text-xl font-bold text-white group-hover:text-accent transition-colors">
                                                {item.title}
                                            </div>
                                            <p className="leading-relaxed text-white/60 text-sm group-hover:text-white/90 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Hover Gradient Effect */}
                                        <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
