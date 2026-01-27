import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';

// Initial Static Data
const initialProjectData = [
    {
        title: 'TIPS-G Alwar',
        description: 'Developed a responsive educational institute website for TIPS-G Alwar. The website includes structured pages for institute information, courses, and user-friendly navigation. Focused on clean UI design, responsiveness, and performance optimization.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        link: 'https://tips-g-alwar-frontend-n3wn.vercel.app/',
        github: '#',
        image: 'https://picsum.photos/seed/education/800/600',
        category: 'Education'
    },
    {
        title: 'My Music',
        description: 'Built a music web application that allows users to explore and play music in an interactive interface. Implemented responsive design and smooth UI interactions to improve user experience.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        link: 'https://my-music-kohl.vercel.app/',
        github: '#',
        image: 'https://picsum.photos/seed/music/800/600',
        category: 'Entertainment'
    },
    {
        title: 'CineCharge',
        description: 'Created a movie-related web application with a modern layout and dynamic content presentation. Focused on frontend structure, responsiveness, and clean component-based UI.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        link: 'https://cinecharge.vercel.app/',
        github: '#',
        image: 'https://picsum.photos/seed/movies/800/600',
        category: 'Entertainment'
    },
    {
        title: 'Rapido App (UI Clone)',
        description: 'Developed a frontend UI clone inspired by the Rapido application. The project focuses on layout structure, styling, and responsive design. Improved skills in UI alignment and component-based development.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        link: 'https://rapido-app-ten.vercel.app/',
        github: '#',
        image: 'https://picsum.photos/seed/rapido/800/600',
        category: 'Logistics'
    },
    {
        title: 'Electricity Billing Website',
        description: 'Built a simple electricity billing related web interface focused on clean design and usability. Practiced form handling, layout design, and responsiveness.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://electricity-phi.vercel.app/',
        github: '#',
        image: 'https://picsum.photos/seed/electricity/800/600',
        category: 'Services'
    },
    {
        title: 'Mokshika Water Purifier',
        description: 'Designed and developed a business website for a water purifier company. The website highlights services, product information, and contact details. Focused on professional UI, mobile responsiveness, and clear content layout.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        link: 'https://mokshika-water-purify-d946.vercel.app/',
        github: '#',
        image: 'https://picsum.photos/seed/water/800/600',
        category: 'Business'
    },
];

const Projects = () => {
    const [projectData, setProjectData] = useState(initialProjectData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/projects");
                if (response.ok) {
                    const result = await response.json();
                    if (Array.isArray(result) && result.length > 0) {
                        setProjectData(result);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch projects data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-full min-h-screen bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden">

            {/* Background Image / Decoration */}
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            {/* Background Glow */}
            <div className='absolute top-40 right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none'></div>

            <div className="container mx-auto px-4 relative z-10 pt-10">

                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className='bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-accent font-bold mb-4 uppercase tracking-[2px] text-xs inline-block'
                    >
                        Success Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl xl:text-6xl font-extrabold mb-4"
                    >
                        My <span className="text-accent underline decoration-white/10 underline-offset-8">Projects.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className='text-white/50 max-w-[650px] mx-auto text-lg font-light'
                    >
                        A showcase of my recent full stack and frontend projects.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 rounded-[32px] border border-white/10 overflow-hidden shadow-2xl group hover:border-accent/30 transition-all duration-500"
                        >
                            {/* Card Media (Screenshot Placeholder) */}
                            <div className='relative h-[220px] overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-4'>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-xl hover:bg-accent hover:text-white transition-all duration-300'
                                    >
                                        <HiExternalLink />
                                    </a>
                                </div>
                                <div className='absolute top-4 left-4'>
                                    <span className='bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg'>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className='p-6'>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-white/50 text-xs mb-6 leading-relaxed line-clamp-4 h-[72px]">
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className='text-[10px] bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20 font-bold uppercase tracking-[1px]'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-x-2 text-white font-bold text-xs uppercase tracking-[2px] transition-all group/link hover:text-accent'
                                >
                                    Live Demo
                                    <BsArrowRight className='text-lg transition-transform group-hover/link:translate-x-2' />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
