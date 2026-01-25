import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import Circles from '../components/Circles';
import ParticlesContainer from '../components/ParticlesContainer';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally integrate EmailJS or a backend
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="h-full min-h-screen bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-y-auto overflow-x-hidden">

            {/* Background Image / Decoration */}
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-circleStar bg-cover bg-no-repeat bg-center z-0 opacity-20 mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticlesContainer />
            </div>
            <Circles />

            {/* Background Glows */}
            <div className='absolute top-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none'></div>
            <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none'></div>

            <div className="container mx-auto h-full text-center xl:text-left flex items-center justify-center relative z-10 px-4">
                <div className="flex flex-col w-full max-w-[1100px]">

                    {/* Heading Section */}
                    <div className='mb-16 px-4'>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl xl:text-6xl font-extrabold mb-4 leading-tight italic"
                        >
                            Get In <span className="text-accent underline decoration-white/10 underline-offset-8 not-italic tracking-tight">Touch.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className='text-white/50 max-w-[700px] mx-auto xl:mx-0 text-lg font-light'
                        >
                            Feel free to contact me for projects, internships, or collaborations.
                        </motion.p>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-stretch">

                        {/* Contact Form (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex-1 w-full"
                        >
                            <div className="bg-white/5 p-8 xl:p-10 rounded-[32px] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                                <AnimatePresence mode='wait'>
                                    {!isSubmitted ? (
                                        <motion.form
                                            key="contact-form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="flex flex-col gap-6"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="flex flex-col md:flex-row gap-6">
                                                <input required type="text" placeholder="Your Name" className="flex-1 bg-white/5 border border-white/10 h-14 rounded-2xl px-6 focus:border-accent outline-none transition-all placeholder:text-white/30 text-white font-medium" />
                                                <input required type="email" placeholder="Your Email" className="flex-1 bg-white/5 border border-white/10 h-14 rounded-2xl px-6 focus:border-accent outline-none transition-all placeholder:text-white/30 text-white font-medium" />
                                            </div>
                                            <textarea required placeholder="Write your message here..." className="w-full bg-white/5 border border-white/10 h-48 rounded-[24px] p-6 focus:border-accent outline-none transition-all placeholder:text-white/30 text-white font-medium resize-none"></textarea>

                                            <button type="submit" className="btn rounded-full bg-accent border border-accent hover:bg-transparent hover:text-accent font-extrabold uppercase tracking-[3px] py-4 px-12 transition-all duration-500 shadow-[0_10px_30px_rgba(241,48,36,0.3)] hover:shadow-none flex items-center justify-center gap-x-3 w-full sm:max-w-max group mt-4">
                                                Send Message
                                                <BsArrowRight className='text-2xl transition-transform duration-500 group-hover:translate-x-3' />
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success-message"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center py-10 text-center"
                                        >
                                            <FaCheckCircle className="text-accent text-7xl mb-6 animate-bounce" />
                                            <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                            <p className="text-white/60 leading-relaxed max-w-[400px]">
                                                Thank you for reaching out! <br />
                                                I will get back to you as soon as possible.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Contact Info (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="w-full xl:max-w-[400px] flex flex-col gap-y-10"
                        >
                            {/* Detailed Info */}
                            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 rounded-[40px] backdrop-blur-2xl shadow-2xl space-y-10">

                                <div className="space-y-8">
                                    <div className="flex items-start gap-x-6">
                                        <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-2xl shadow-lg border border-accent/10">
                                            <FaEnvelope />
                                        </div>
                                        <div className='text-left'>
                                            <p className="text-white/30 text-[10px] uppercase tracking-[3px] font-bold mb-2">Email</p>
                                            <p className="text-white font-bold text-lg break-all">ravinderyadav092007@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-6">
                                        <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-2xl shadow-lg border border-accent/10">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className='text-left'>
                                            <p className="text-white/30 text-[10px] uppercase tracking-[3px] font-bold mb-2">Phone</p>
                                            <p className="text-white font-bold text-lg">+91 8949477114</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-6">
                                        <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-2xl shadow-lg border border-accent/10">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className='text-left'>
                                            <p className="text-white/30 text-[10px] uppercase tracking-[3px] font-bold mb-2">Location</p>
                                            <p className="text-white font-bold text-lg">Mundawar, Alwar, Rajasthan</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-10 border-t border-white/5 space-y-6">
                                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-[2px]">Connect with me on social platforms</p>
                                    <div className="flex gap-x-5">
                                        {[
                                            { icon: <FaGithub />, link: 'https://github.com/ravinder-yad', color: '#ffffff' },
                                            { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ravinder-yadav-809090321/', color: '#0077b5' },
                                            { icon: <FaWhatsapp />, link: 'https://wa.me/8949477114', color: '#25d366' }
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl hover:bg-accent hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/40"
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
