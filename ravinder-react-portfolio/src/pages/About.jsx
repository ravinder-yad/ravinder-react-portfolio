import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { HiFire } from 'react-icons/hi2';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';

// Icon Mapping
const iconMap = {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm,
    SiMongodb, SiExpress, SiPostman, VscCode, HiFire
};

// Initial Data
const initialAboutData = [
    {
        title: 'skills',
        heading: 'Skills & Technologies',
        subheading: 'Technologies and tools I use to build modern, scalable, and reliable web applications.',
        info: [
            {
                title: 'Frontend Development',
                desc: 'I create clean, responsive, and interactive user interfaces with a strong focus on performance, accessibility, and user experience.',
                icons: [
                    { Icon: FaHtml5, name: 'HTML5' },
                    { Icon: FaCss3, name: 'CSS3' },
                    { Icon: FaBootstrap, name: 'Bootstrap' },
                    { Icon: FaJs, name: 'JavaScript' },
                    { Icon: FaReact, name: 'React.js' },
                ],
            },
            {
                title: 'Backend Development',
                desc: 'I build secure and scalable backend systems, handling APIs, databases, and server-side logic efficiently.',
                icons: [
                    { Icon: FaNodeJs, name: 'Node.js' },
                    { Icon: SiExpress, name: 'Express.js' },
                    { Icon: SiMongodb, name: 'MongoDB' },
                    { Icon: HiFire, name: 'RESTful APIs' },
                ],
            },
            {
                title: 'Tools & Workflow',
                desc: 'I use modern tools and best practices to write clean code, collaborate effectively, and maintain efficient development workflows.',
                icons: [
                    { Icon: FaGithub, name: 'Git & GitHub' },
                    { Icon: SiPostman, name: 'Postman' },
                    { Icon: VscCode, name: 'VS Code' },
                    { Icon: FaNpm, name: 'npm' },
                ],
            }
        ],
    },
    {
        title: 'experience',
        heading: 'Experience & Learning Journey',
        info: [
            {
                title: 'Frontend Developer (Learning & Practice)',
                stage: '2024 – Present',
                desc: 'Actively building real-world projects using HTML, CSS, JavaScript, and React to strengthen frontend architecture, UI/UX skills, and performance optimization.'
            },
            {
                title: 'Web Developer (Project-Based)',
                stage: '2025 – Present',
                desc: 'Working on small to medium-scale web projects with a focus on responsive design, clean code, performance, and practical problem-solving.'
            },
        ],
    },
    {
        title: 'credentials',
        heading: 'Education & Training',
        info: [
            {
                title: 'Bachelor of Computer Applications (BCA)',
                stage: '2024 – 2027',
                desc: 'Focused on computer science fundamentals, programming concepts, and application development.'
            },
            {
                title: 'Full Stack Development Training',
                stage: '2026',
                desc: 'Hands-on training in MERN stack development with an emphasis on real-world projects and modern web practices.'
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);
    const [aboutData, setAboutData] = useState(initialAboutData);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/about");
                if (response.ok) {
                    const result = await response.json();
                    if (result && result.sections && Array.isArray(result.sections)) {
                        // Transform the fetched data to map icon strings to components
                        const transformedData = result.sections.map(section => ({
                            ...section,
                            info: section.info.map(item => ({
                                ...item,
                                icons: item.icons ? item.icons.map(iconObj => ({
                                    ...iconObj,
                                    Icon: iconMap[iconObj.icon] || FaHtml5 // Fallback to HTML5 icon if not found
                                })) : undefined
                            }))
                        }));
                        setAboutData(transformedData);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch about data:", error);
            }
        };

        fetchData();
    }, []);

    // Helper to safely get the current section
    const currentSection = aboutData[index] || aboutData[0];

    return (
        <div className="h-full min-h-screen bg-primary/30 text-center xl:text-left relative overflow-y-auto overflow-x-hidden pt-8 md:pt-16 xl:pt-20 pb-40 xl:pb-32">


            {/* Background Effects */}
            <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="absolute inset-0 bg-circleStar bg-cover bg-center opacity-20 mix-blend-color-dodge pointer-events-none"></div>
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            <div className="container mx-auto h-full flex flex-col lg:flex-row gap-x-6 xl:gap-x-12 relative z-10 lg:items-center px-4 md:px-10 lg:px-20 xl:px-0">

                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center px-4 mb-10 lg:mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight"
                    >
                        Turning ideas into <br />
                        <span className="text-accent underline decoration-white/10 underline-offset-8">
                            real-world digital solutionsQ
                        </span>.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-[500px] mx-auto xl:mx-0 mb-10 text-white/80 leading-relaxed text-base md:text-lg space-y-6"
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
                        className="flex justify-center xl:justify-start"
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
                <div className="flex flex-col w-full lg:max-w-[48%] xl:max-w-[45%]">
                    <div className="flex flex-wrap justify-center xl:justify-start gap-2 md:gap-4 mb-8 bg-black/40 p-2 rounded-[20px] md:rounded-full border border-white/5 backdrop-blur-xl mx-auto xl:mx-0 w-max max-w-full">
                        {aboutData.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                onClick={() => setIndex(itemIndex)}
                                className={`${index === itemIndex
                                    ? 'bg-accent text-white shadow-[0_0_20px_rgba(241,48,36,0.3)]'
                                    : 'text-white/60 hover:text-white'
                                    } cursor-pointer capitalize text-sm md:text-base xl:text-lg px-6 py-2 rounded-full transition-all duration-500 font-bold whitespace-nowrap`}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    <div className="py-8 xl:py-10 flex flex-col gap-y-6 bg-gradient-to-br from-white/10 to-transparent p-8 rounded-[32px] border border-white/10 backdrop-blur-2xl min-h-[450px] shadow-2xl relative">
                        <div className="mb-8 border-l-4 border-accent pl-6">
                            <h3 className="text-3xl font-extrabold text-white mb-2">
                                {currentSection.heading}
                            </h3>
                            {currentSection.subheading && (
                                <p className="text-white/50 text-base italic">
                                    {currentSection.subheading}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-y-8 h-[300px] overflow-y-auto pr-4">
                            {currentSection.info.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="font-bold text-xl text-white">{item.title}</div>
                                        {item.stage && (
                                            <div className="text-sm text-accent font-bold bg-accent/10 px-3 py-1 rounded-lg border border-accent/20 hidden md:block">
                                                {item.stage}
                                            </div>
                                        )}
                                    </div>

                                    {item.desc && (
                                        <p className="text-white/60 leading-relaxed mb-6">
                                            {item.desc}
                                        </p>
                                    )}

                                    {item.icons && (
                                        <div className="flex gap-x-8 flex-wrap">
                                            {item.icons.map((iconData, iconIndex) => (
                                                <div key={iconIndex} className="group relative">
                                                    <div className="text-4xl text-white/80 hover:text-accent hover:scale-125 transition-all duration-500 cursor-pointer">
                                                        {iconData.Icon && <iconData.Icon />}
                                                    </div>
                                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-accent text-white text-xs font-bold px-3 py-1 rounded-lg whitespace-nowrap">
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
        </div>
    );
};

export default About;
