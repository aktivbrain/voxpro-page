'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 bg-voxpro-navy/80 backdrop-blur-md border-b border-white/5"
      />
      <nav className="container mx-auto relative">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Voxpro Logo"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <span className="text-2xl font-bold gradient-text">
              Voxpro
            </span>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg text-voxpro-gray hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy font-semibold hover:opacity-90 transition-opacity hover-scale"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            type="button"
            className="md:hidden p-2 text-voxpro-gray hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden glass-panel mx-4 mt-2 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-voxpro-gray hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#pricing"
                  className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy font-semibold text-center hover:opacity-90 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 