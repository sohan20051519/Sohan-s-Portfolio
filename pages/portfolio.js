import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

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
