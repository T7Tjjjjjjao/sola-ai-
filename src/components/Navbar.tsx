'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAppStore } from '@/store/appStore';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme } = useAppStore();

  const navItems = [
    { href: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/library', label: language === 'ar' ? 'المكتبة' : 'Library' },
    { href: '/dashboard', label: language === 'ar' ? 'لوحة التحكم' : 'Dashboard' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ✨ Sola AI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
