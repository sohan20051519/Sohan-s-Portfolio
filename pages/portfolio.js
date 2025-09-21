import React from 'react';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Certificates from '@/components/certificates';
import Contact from '@/components/Contact';

export default function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}
