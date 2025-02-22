'use client';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import { useState } from 'react';

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: 'A minimal, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com/yourusername/portfolio',
    preview: 'https://your-portfolio.com'
  },
  {
    title: 'Csalo.pro Bio site',
    description: 'A customizable bio link platform built with Next.js, featuring a full-stack architecture for dynamic content management and user profiles.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'none',
    preview: 'https://csalo.pro'
  },
  {
    title: 'FiveM Tools Website',
    description: 'A utility website for FiveM server management built with plain HTML, CSS, and JavaScript, containing various tools for server administration.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'none',
    preview: 'https://project7.store'
  },
  // Add more projects here
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-full"
    >
      <Particles count={50} />
      <div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          Here are some of the projects I&apos;ve worked on.
        </motion.p>

        <div className="flex gap-2 justify-center md:justify-start">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-gray-900 dark:bg-gray-100' : 'bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            key={PROJECTS[activeIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{PROJECTS[activeIndex].title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{PROJECTS[activeIndex].description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {PROJECTS[activeIndex].tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-700/10 rounded-full text-sm text-gray-600 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={PROJECTS[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300"
              >
                View Source →
              </a>
              <a
                href={PROJECTS[activeIndex].preview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300"
              >
                Live Preview →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}