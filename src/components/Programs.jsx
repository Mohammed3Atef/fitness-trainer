'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  { 
    title: "Weight Loss", 
    desc: "Personalized plans to help you shed pounds and feel great.", 
    icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80" 
  },
  { 
    title: "Muscle Building", 
    desc: "Build lean muscle and boost your strength.", 
    icon: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=200&q=80" 
  },
  { 
    title: "Strength & Conditioning", 
    desc: "Enhance your athletic performance.", 
    icon: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=200&q=80" 
  },
  { 
    title: "Online Coaching", 
    desc: "Train with Anas from anywhere in the world.", 
    icon: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=200&q=80" 
  },
];

export default function Programs() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-4" id="programs">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((prog, i) => (
            <motion.div 
              key={prog.title} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: i * 0.1 }} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
            >
              <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                <Image 
                  src={prog.icon} 
                  alt={prog.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">{prog.title}</h3>
              <p className="text-center text-gray-700 dark:text-gray-200">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 