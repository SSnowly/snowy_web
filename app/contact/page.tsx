'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTACT_LINKS = [
  {
    platform: 'Email',
    handle: 'visionhyronic@gmail.com',
    icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
    responseTime: 'Typically within 24 hours'
  },
  {
    platform: 'Discord',
    handle: 'snowylol_',
    icon: 'M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8 19.91a12.89 12.89 0 0 0 2.24.23 16.6 16.6 0 0 0 5.07-2.59 17.22 17.22 0 0 0-3-11.59 16 16 0 0 0-4.13-1.3zM8.02 15.34',
    responseTime: 'Typically within a few hours'
  },
  {
    platform: 'GitHub',
    handle: 'SSnowly',
    link: 'https://github.com/SSnowly',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    responseTime: 'Typically within 48 hours'
  }
];

export default function Contact() {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-full"
    >
      <div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        {showCopied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-8 right-0 px-4 py-2 bg-gray-700/10 rounded-lg text-sm text-gray-600 dark:text-gray-400"
          >
            Copied to clipboard!
          </motion.div>
        )}
        
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          Here&apos;s how you can reach me
        </motion.p>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4 w-full"
        >
          {CONTACT_LINKS.map((link) => (
            <div
              key={link.platform}
              className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300 cursor-pointer w-full flex justify-between items-center"
              onClick={() => {
                if (link.platform === 'GitHub') {
                  window.open(link.link, '_blank');
                } else {
                  copyToClipboard(link.handle);
                }
              }}
            >
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={link.icon} />
                </svg>
                <div className="text-left">
                  <h2 className="text-xl font-semibold">{link.platform}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{link.handle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                {link.responseTime}
              </p>
            </div>
          ))}
        </motion.div>
        <div className="p-6 border border-gray-700/20 rounded-xl w-full backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300 opacity-0 cursor-default">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You are not supposed to be here, you should not try to read this thing right here, I&apos;m obviously not here to make the page wider.
            </p>
        </div>

      </div>
    </motion.div>
  );
} 