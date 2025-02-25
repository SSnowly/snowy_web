"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNav() {
  const pathname = usePathname();
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-4 gap-1 p-1">
        {pages.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className={`flex flex-col items-center justify-center p-2 rounded-lg text-sm ${
              pathname === page.path 
                ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
} 