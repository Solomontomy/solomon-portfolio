import React from 'react';
import profileImg from "../assets/profile1.jpg";
import { motion } from 'framer-motion';
import { Linkedin } from "lucide-react";
import { Mail, Phone, Github } from 'lucide-react';

// Hero section with gradient name, animated fade-in, social icons
export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid gap-6 md:grid-cols-2 items-center">
      <div>
        <p className="text-sm uppercase tracking-wider text-sky-400">Hello, I'm</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Solomon Tomy
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Software Engineer — Java & ERP specialist. Backend development, reporting (JasperReports),
          PostgreSQL optimizations, and web integrations. Based in Dubai, UAE.
        </p>
        {/* Social / contact links with icons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:solomontomy2446@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-md"><Mail size={16} /> Email</a>
          <a href="tel:+9710526548011" className="flex items-center gap-2 px-4 py-2 border rounded-md"><Phone size={16} /> Call</a>
          <a href="https://github.com/solomontomy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border rounded-md"><Github size={16} /> GitHub</a>
          {/*<a href="#" className="flex items-center gap-2 px-4 py-2 border rounded-md"><Linkedin size={16}/> LinkedIn</a>*/}
          <a
            href="https://www.linkedin.com/in/solomon-tomy-a4a024210"  // 🔗 your real LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-sky-500 hover:text-white transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <div className="mt-4 text-sm text-slate-400">
          <div>solomontomy2446@gmail.com | +971 0526548011</div>
          <div>Location: UAE, Dubai</div>
        </div>
      </div>
      {/* Placeholder for avatar/photo */}
      {/*<div className="flex items-center justify-center">
        <div className="w-56 h-56 bg-gradient-to-tr from-sky-500/30 to-indigo-500/30 rounded-full flex items-center justify-center">
          <span className="text-slate-300">Avatar</span>
        </div>
      </div>*/}
      {/* Profile photo */}
      <div className="flex items-center justify-center">
        <img
          src={profileImg}
          className="w-56 h-56 object-cover rounded-full border-4 border-sky-500 shadow-lg"
        />
      </div>
    </motion.div>
  );
}