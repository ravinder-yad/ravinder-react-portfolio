import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    HiArrowDownTray,
    HiAcademicCap,
    HiBriefcase,
    HiPhone,
    HiEnvelope,
    HiMapPin,
    HiCommandLine,
    HiShieldCheck
} from 'react-icons/hi2';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';

const Resume = () => {
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/resume");
                if (response.ok) {
                    const result = await response.json();
                    if (result) {
                        setResumeData(result);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch resume data:", error);
            }
        };

        fetchData();
    }, []);

    if (!resumeData) {
        return (
            <div className="h-full min-h-screen bg-primary/30 flex items-center justify-center relative overflow-hidden">
                {/* Background Image / Decoration */}
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge pointer-events-none"></div>
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

    // Helper to safely render varied data types (strings vs objects)
    const renderSkill = (skill) => (typeof skill === 'string' ? skill : skill.name);
    const renderCert = (cert) => (typeof cert === 'string' ? cert : cert.name || cert);

    // Fallbacks to prevent crashes if nested data is missing
    const profile = resumeData.profile || {};
    const experience = resumeData.experience || [];
    const education = resumeData.education || [];
    // Handle skills array structure from API vs Object structure
    const skills = Array.isArray(resumeData.skills) && resumeData.skills.length > 0
        ? resumeData.skills[0]
        : (resumeData.skills || {});
    const certifications = resumeData.certifications || [];
    const others = resumeData.others || {};


    return (
        <div className="h-full min-h-screen bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden">

            {/* Background Image / Decoration */}
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge pointer-events-none"></div>
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            {/* Background Glows */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent text-4xl mb-6 shadow-2xl shadow-accent/20 border border-accent/20"
                    >
                        <HiBriefcase />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl xl:text-6xl font-extrabold mb-2"
                    >
                        {profile.name}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-accent text-xl xl:text-2xl font-bold tracking-[4px] uppercase mb-8"
                    >
                        {profile.title}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 mb-10"
                    >
                        <div className="flex items-center gap-x-2 text-white/60">
                            <HiEnvelope className="text-accent" /> {profile.email}
                        </div>
                        <div className="flex items-center gap-x-2 text-white/60">
                            <HiPhone className="text-accent" /> {profile.phone}
                        </div>
                        <div className="flex items-center gap-x-2 text-white/60">
                            <HiMapPin className="text-accent" /> {profile.location}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <a
                            href={profile.resumeFile || "/resume.png"}
                            download="Ravinder_Kumar_Resume.png"
                            className="btn rounded-full bg-accent border border-accent hover:bg-transparent hover:text-accent font-bold uppercase tracking-[2px] py-3.5 px-10 transition-all duration-500 shadow-xl shadow-accent/10 flex items-center gap-x-3 group"
                        >
                            Download CV
                            <HiArrowDownTray className="text-xl group-hover:animate-bounce" />
                        </a>
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Professional Summary */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white/5 p-8 rounded-[32px] border border-white/10 backdrop-blur-md"
                        >
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-x-3 text-white">
                                <span className="w-2 h-8 bg-accent rounded-full"></span>
                                Professional Summary
                            </h3>
                            <p className="text-white/70 leading-relaxed text-lg font-light italic">
                                “{profile.about}”
                            </p>
                        </motion.section>

                        {/* Experience */}
                        <section className="space-y-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-x-3 text-white px-2">
                                <span className="w-2 h-8 bg-accent rounded-full"></span>
                                Practical Experience
                            </h3>

                            <div className="space-y-6">
                                {experience.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-accent/30 transition-all"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                            <div>
                                                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                                <p className="text-white/40 text-sm uppercase tracking-widest">
                                                    {item.company}
                                                </p>
                                            </div>
                                            <span className="text-accent font-bold text-sm bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                                                {item.date}
                                            </span>
                                        </div>

                                        <ul className="space-y-3">
                                            {item.points && item.points.map((point, pIdx) => (
                                                <li
                                                    key={pIdx}
                                                    className="flex items-start gap-x-3 text-white/60 text-sm leading-relaxed"
                                                >
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-x-3 text-white px-2">
                                <span className="w-2 h-8 bg-accent rounded-full"></span>
                                Education
                            </h3>

                            {education.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="bg-white/5 p-8 rounded-[32px] border border-white/5 relative"
                                >
                                    <div className="absolute top-0 right-0 p-8 text-white/5 text-6xl">
                                        <HiAcademicCap />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-accent font-bold mb-4">
                                        {item.institution} | {item.date}
                                    </p>
                                    <p className="text-white/60 leading-relaxed italic">{item.desc}</p>
                                </motion.div>
                            ))}
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">

                        {/* Technical Skills */}
                        <motion.section
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-br from-accent/20 to-transparent p-8 rounded-[32px] border border-accent/20 backdrop-blur-xl shadow-2xl"
                        >
                            <h3 className="text-xl font-bold mb-8 text-white uppercase tracking-[2px] text-center border-b border-white/10 pb-4">
                                Technical Skills
                            </h3>

                            <div className="space-y-8">
                                {['frontend', 'backend', 'tools'].map((section) => (
                                    <div key={section}>
                                        <p className="text-accent text-xs font-bold uppercase mb-4 tracking-widest flex items-center gap-2">
                                            <HiCommandLine /> {section}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[section] && skills[section].map((s, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-white/10 text-white text-[11px] px-3 py-1.5 rounded-lg border border-white/5"
                                                >
                                                    {renderSkill(s)}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Certifications */}
                        <section className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-[2px]">
                                Certifications
                            </h3>
                            <ul className="space-y-4">
                                {certifications.map((c, i) => (
                                    <li key={i} className="flex items-center gap-x-3 text-white/60 text-sm">
                                        <HiShieldCheck className="text-accent text-lg shrink-0" />
                                        {renderCert(c)}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Strengths & Languages */}
                        <div className="space-y-6">
                            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                                <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-[2px]">
                                    Core Strengths
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {others.strengths && others.strengths.map((s, i) => (
                                        <span
                                            key={i}
                                            className="text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                                <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-[2px]">
                                    Languages
                                </h3>
                                <div className="space-y-2">
                                    {others.languages && others.languages.map((l, i) => (
                                        <p key={i} className="text-white/60 text-sm font-medium">
                                            {l}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
