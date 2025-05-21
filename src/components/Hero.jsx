'use client';
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const bookingRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center px-4 py-24 bg-gradient-to-br from-orange-500/80 to-blue-600/80 dark:from-orange-700/80 dark:to-blue-900/80 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Get Fit with Coach Anas Omran</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">Personalized gym training to transform your life</p>
        <button onClick={() => scrollTo(bookingRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-300 text-lg">Book Your Session</button>
      </motion.div>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1500&q=80)' }} />
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        <button onClick={() => scrollTo(bookingRef)} className="text-white/90 hover:text-orange-200 transition">Book</button>
      </nav>
    </section>
  );
} 