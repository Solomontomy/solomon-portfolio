
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Main App component
export default function App() {
  const [active, setActive] = useState('home');

  // Scroll spy effect: update active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home','about','skills','experience','projects','education','contact'];
      const scrollPos = window.scrollY + 200;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/70 backdrop-blur-md z-30">
        <div className="container flex items-center justify-between py-4">
          <a href="#home" className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          </a>
          <nav className="space-x-4 hidden md:block">
            {['about','skills','experience','projects','contact'].map(id=>(
              <a key={id} href={`#${id}`} className={active===id ? 'text-sky-400 underline' : 'hover:underline'}>
                {id.charAt(0).toUpperCase()+id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-24">
        <section id="home" className="min-h-[60vh] flex items-center"><div className="container"><Hero /></div></section>
        <section id="about" className="py-16"><div className="container bg-slate-900/40 rounded-2xl p-8"><About /></div></section>
        <section id="skills" className="py-16"><div className="container"><Skills /></div></section>
        <section id="experience" className="py-16"><div className="container"><Experience /></div></section>
        <section id="projects" className="py-16"><div className="container"><Projects /></div></section>
        <section id="education" className="py-16"><div className="container bg-slate-900/30 rounded-2xl p-8"><Education /></div></section>
        <section id="contact" className="py-16"><div className="container"><Contact /></div></section>
      </main>
    </div>
  );
}
