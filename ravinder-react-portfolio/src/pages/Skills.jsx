import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { HiFire } from 'react-icons/hi2';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';

const skillsData = [
    {
        title: 'Frontend Development',
        desc: 'I build clean, responsive, and interactive user interfaces with a strong focus on usability, performance, and user experience.',
        skills: [
            { Icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
            { Icon: FaCss3, name: 'CSS3', color: '#1572b6' },
            { Icon: FaBootstrap, name: 'Bootstrap', color: '#7952b3' },
            { Icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
            { Icon: FaReact, name: 'React.js', color: '#61dafb' },
            { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' },
        ]
    },
    {
        title: 'Backend Development',
        desc: 'I develop secure and scalable backend systems that efficiently handle data, APIs, and server-side logic.',
        skills: [
            { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
            { Icon: SiExpress, name: 'Express.js', color: '#ffffff' },
            { Icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
            { Icon: HiFire, name: 'REST APIs', color: '#f13024' },
        ]
    },
    {
        title: 'Tools & Technologies',
        desc: 'I work with modern development tools to improve productivity, debug applications, and maintain clean, efficient codebases.',
        skills: [
            { Icon: FaGithub, name: 'Git & GitHub', color: '#ffffff' },
            { Icon: SiPostman, name: 'Postman', color: '#ff6c37' },
            { Icon: VscCode, name: 'VS Code', color: '#007acc' },
            { Icon: FaNpm, name: 'npm', color: '#cb3837' },
        ]
    }
];

const Skills = () => {
    return (
        <div className="h-full min-h-screen bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden">

            {/* Background Image / Decoration */}
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            {/* Background Glows */}
            <div className='absolute top-40 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none'></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl xl:text-6xl font-extrabold mb-4"
                    >
                        My Skills & <span className="text-accent underline decoration-white/10 underline-offset-8">Technologies.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-white/50 max-w-[600px] mx-auto text-lg font-light'
                    >
                        A snapshot of the technologies and tools I use to build modern, scalable web applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-0">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 rounded-[32px] backdrop-blur-xl shadow-2xl flex flex-col items-center xl:items-start group hover:border-accent/30 transition-all duration-500"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-white/50 text-sm mb-8 leading-relaxed font-light text-center xl:text-left">
                                {category.desc}
                            </p>

                            <div className="grid grid-cols-3 gap-6 w-full">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex flex-col items-center gap-y-2 group/skill">
                                        <div
                                            className="text-4xl transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                            style={{ color: skill.color }}
                                        >
                                            <skill.Icon />
                                        </div>
                                        <span className="text-[10px] text-white/40 uppercase tracking-[1px] font-bold group-hover/skill:text-white transition-all text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom learning note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='mt-16 text-center text-white/40 font-light italic'
                >
                    Continuously learning advanced backend concepts and strengthening full stack development skills.
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
