import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function Header({ isVisible, theme, toggleTheme }) {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={false}
      animate={isVisible ? 'visible' : 'hidden'}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 },
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-5xl mx-auto mt-4 px-4">
        <nav className="flex items-center justify-between p-2 bg-background/50 backdrop-blur-lg border border-border rounded-full shadow-lg">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-bold text-lg text-foreground ml-4">
            Sohan A.
          </a>
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 mr-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hidden md:flex" 
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
