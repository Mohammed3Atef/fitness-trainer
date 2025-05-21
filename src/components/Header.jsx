'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-500">Coach Anas</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/programs" className="hover:text-orange-500 transition">Programs</Link>
          <Link href="/testimonials" className="hover:text-orange-500 transition">Testimonials</Link>
          <Link href="/gallery" className="hover:text-orange-500 transition">Gallery</Link>
          <Link href="/booking" className="hover:text-orange-500 transition">Book Now</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t">
          <div className="flex flex-col px-4 py-2">
            <Link href="/" className="py-2 hover:text-orange-500 transition">Home</Link>
            <Link href="/about" className="py-2 hover:text-orange-500 transition">About</Link>
            <Link href="/programs" className="py-2 hover:text-orange-500 transition">Programs</Link>
            <Link href="/testimonials" className="py-2 hover:text-orange-500 transition">Testimonials</Link>
            <Link href="/gallery" className="py-2 hover:text-orange-500 transition">Gallery</Link>
            <Link href="/booking" className="py-2 hover:text-orange-500 transition">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
} 