'use client';
import { motion } from 'framer-motion';

const ICONS = [
  { name: 'React', path: 'react.svg' },
  { name: 'Next.js', path: 'nextjs.svg' },
  { name: 'TypeScript', path: 'typescript.svg' },
  { name: 'Tailwind CSS', path: 'tailwindcss.svg' },
  { name: 'Node.js', path: 'nodejs.svg' },
  { name: 'Figma', path: 'figma.svg' }
]

const DESCRIPTION = [
  { name: 'React', description: 'JavaScript library', link: 'https://reactjs.org' },
  { name: 'Next.js', description: 'React framework for SSR', link: 'https://nextjs.org' },
  { name: 'TypeScript', description: 'Typesafe JavaScript', link: 'https://typescriptlang.org' },
  { name: 'Tailwind CSS', description: 'CSS Framework', link: 'https://tailwindcss.com' },
  { name: 'Node.js', description: 'Server-side runtime', link: 'https://nodejs.org' },
  { name: 'Figma', description: 'Design tool', link: 'https://figma.com' },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-full"
    >
      <div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold"
        >
          Hi, I'm Snowy!
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          I'm a self taught full-stack developer. I love creating websites and applications for the better of the internet.
        </motion.p>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-start gap-3 mt-6"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (0.1 * index), duration: 0.5 }}
              onClick={() => {
                window.open(DESCRIPTION.find(s => s.name === skill)?.link, '_blank')
              }}
              className="px-4 py-3 bg-gray-100 border-gray-700/20 backdrop-blur-sm border bg-opacity-0 rounded-xl text-sm font-medium flex items-center gap-4 hover:border-gray-700/50 transition-colors duration-300 cursor-pointer group max-w-[300px]"
            >
              <div className="flex items-center justify-center bg-gray-700/20 w-10 h-10 rounded-lg">
                <img className={`w-4 h-4 group-hover:w-6 group-hover:h-6 transition-all duration-300 ${skill === 'Figma' ? 'w-6 h-6 group-hover:w-8 group-hover:h-8' : ''}`} src={`/assets/${ICONS.find(icon => icon.name === skill)?.path}`} alt={skill} width={20} height={20} />
              </div>
              <div className="text-left">
                <div className="text-white text-sm">{skill}</div>
                <div className="text-xs text-gray-400 break-words w-[200px]">{DESCRIPTION.find(s => s.name === skill)?.description || ''}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
