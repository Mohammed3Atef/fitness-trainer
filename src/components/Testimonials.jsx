'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  { 
    name: "Sarah M.", 
    quote: "Coach Anas changed my life! I feel stronger and more confident.", 
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" 
  },
  { 
    name: "James K.", 
    quote: "The best trainer I've ever worked with. Highly recommend!", 
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" 
  },
  { 
    name: "Lina S.", 
    quote: "Personalized, motivating, and effective.", 
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80" 
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black" id="testimonials">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: i * 0.1 }} 
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col items-center"
            >
              <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                <Image 
                  src={t.img} 
                  alt={t.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="italic mb-2 text-center">"{t.quote}"</p>
              <span className="font-semibold text-orange-500">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 