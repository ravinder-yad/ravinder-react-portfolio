import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const techs = [
  "React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "GitHub", "Next.js"
];

export const TechStack = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Trusted Tech Stack</p>
      </div>
      
      {/* Gradient fades for the edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full flex items-center tech-swiper"
      >
        {techs.map((tech, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1)] transition-shadow duration-300 group cursor-default">
              <span className="text-lg font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                {tech}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom CSS to make Swiper linear and continuous */}
      <style dangerouslySetInnerHTML={{__html: `
        .tech-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </section>
  );
};
