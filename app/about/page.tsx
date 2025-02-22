'use client';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';

export default function About() {
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
          About Me
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          I&apos;m a self-taught full-stack developer passionate about creating clean, efficient, and user-friendly web applications.
        </motion.p>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6"
        >
           <div className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-2">Personal Life</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a 17 year old from Hungary. I&apos;m a huge fan of CS2, Valorant and other competitive games. I love coding and learning new things.
            </p>
          </div>
          <div className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Started coding in 2019, I&apos;ve been continuously learning and improving my skills in web development. I specialize in building modern, responsive websites and applications using the latest technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 