import React, { useState, useEffect } from 'react';
import ParticlesContainer from '../components/ParticlesContainer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import Circles from '../components/Circles';

const Home = () => {
    const navigate = useNavigate();

    // Default static data (fallback)
    const [homeData, setHomeData] = useState({
        hero: {
            greeting: "Hi, I’m",
            name: "Ravinder Kumar",
            subtitlePrefix: "I’m a",
            roles: [
                "Full Stack Web Developer",
                "MERN Stack Developer",
                "React.js Specialist",
                "Creative Problem Solver"
            ],
            description: "I transform complex ideas into clean, scalable, and user-friendly digital experiences using modern technologies. My focus is on building high-performance web applications using modern technologies, with strong attention to detail and a passion for continuous learning."
        },
        buttons: {
            primary: {
                text: "View My Projects",
                route: "/projects"
            },
            secondary: {
                text: "Get in Touch",
                route: "/contact"
            }
        },
        image: {
            src: "/avatar.png",
            alt: "Ravinder Kumar – Full Stack Web Developer"
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/home");
                if (response.ok) {
                    const result = await response.json();
                    if (result && result.hero) {
                        setHomeData(prevData => ({
                            ...prevData,
                            ...result,
                            hero: { ...prevData.hero, ...result.hero },
                            buttons: result.buttons ? { ...prevData.buttons, ...result.buttons } : prevData.buttons,
                            image: result.image ? { ...prevData.image, ...result.image } : prevData.image
                        }));
                    }
                }
            } catch (error) {
                console.error("Failed to fetch home data:", error);
            }
        };

        fetchData();
    }, []);

    // Construct sequence for TypeAnimation dynamically with stable reference
    const typeSequence = React.useMemo(() => {
        const sequence = [];
        if (homeData?.hero?.roles && Array.isArray(homeData.hero.roles) && homeData.hero.roles.length > 0) {
            homeData.hero.roles.forEach(role => {
                sequence.push(role);
                sequence.push(2000);
            });
        } else {
            // Fallback sequence to prevent crash if empty
            sequence.push('Developer');
            sequence.push(2000);
        }
        return sequence;
    }, [homeData?.hero?.roles]);

    return (
        <div className="bg-primary/20 h-full relative overflow-hidden">
            <Header />
            {/* Particles */}
            <div className="w-full h-full absolute right-0 bottom-0 z-0">
                <ParticlesContainer />
            </div>

            {/* Background Image */}
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge pointer-events-none"></div>
            <Circles />

            {/* Glow Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

            {/* Content */}
            <div className="w-full h-full relative z-10 flex items-center">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-y-12 h-full">

                        {/* Text Section */}
                        <div className="text-center xl:text-left flex flex-col justify-center flex-1 max-w-[800px]">

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
                            >
                                {homeData.hero.greeting} <br />
                                <span className="text-accent underline decoration-white/5 underline-offset-8">
                                    {homeData.hero.name}
                                </span>
                            </motion.h1>

                            {/* Animated Subtitle */}
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl md:text-3xl font-medium mb-8 text-white/80"
                            >
                                <span className="mr-3 italic font-light opacity-60">{homeData.hero.subtitlePrefix}</span>
                                <TypeAnimation
                                    key={(typeSequence && typeSequence.length > 0) ? typeSequence.join(',') : 'default-anim'} // Re-render if roles change
                                    sequence={typeSequence}
                                    wrapper="span"
                                    speed={50}
                                    className="text-white font-bold border-b-2 border-accent/40"
                                    repeat={Infinity}
                                />
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="max-w-xl mx-auto xl:mx-0 mb-10 text-white/60 text-lg leading-relaxed font-light"
                            >
                                {homeData.hero.description}
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
                            >
                                <button
                                    onClick={() => navigate(homeData?.buttons?.primary?.route || '/projects')}
                                    className="btn bg-accent border border-accent rounded-full py-4 px-10 text-sm font-extrabold uppercase tracking-[3px] hover:bg-transparent transition-all shadow-2xl shadow-accent/20"
                                >
                                    {homeData?.buttons?.primary?.text || 'View My Projects'}
                                </button>

                                <button
                                    onClick={() => navigate(homeData?.buttons?.secondary?.route || '/contact')}
                                    className="text-white border-b border-white hover:text-accent hover:border-accent transition-all pb-1 font-bold tracking-[2px] text-xs uppercase"
                                >
                                    {homeData?.buttons?.secondary?.text || 'Get in Touch'}
                                </button>
                            </motion.div>
                        </div>

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="hidden xl:flex flex-1 justify-end relative"
                        >
                            <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-[60px] animate-pulse"></div>
                            <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-[40px] animate-pulse delay-700"></div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-tilt"></div>

                                <div className="relative bg-black/40 border border-white/10 p-2 rounded-full overflow-hidden w-[500px] h-[500px] flex items-center justify-center backdrop-blur-xl">
                                    <img
                                        src={homeData?.image?.src || '/avatar.png'}
                                        alt={homeData?.image?.alt || 'Profile'}
                                        className="w-full h-full object-cover scale-110 translate-y-8 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
