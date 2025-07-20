'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-lg border-b-2 border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">MAISON MAE</span>
                <span className="text-sm text-gray-600 -mt-1">FLORICULTURE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Accueil
              </Link>
              <Link href="/galerie" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Galerie
              </Link>
              <Link href="/a-propos" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50 border-t border-orange-200">
              <Link href="/" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Accueil
              </Link>
              <Link href="/galerie" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Galerie
              </Link>
              <Link href="/a-propos" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 