import React from 'react';
import { Hero } from '../components/home/Hero';
import { TechStack } from '../components/home/TechStack';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Stats } from '../components/home/Stats';
import { CertificatesPreview } from '../components/home/CertificatesPreview';
import { Testimonials } from '../components/home/Testimonials';
import { ContactCTA } from '../components/home/ContactCTA';
import { Footer } from '../components/common/Footer';

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TechStack />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <Stats />
      <CertificatesPreview />
      <Testimonials />
      <ContactCTA />
      <Footer /> 
    </div>
  );
};
