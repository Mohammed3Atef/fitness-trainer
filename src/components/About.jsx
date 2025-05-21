'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  { 
    name: "NASM CPT", 
    icon: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=200&q=80",
    description: "National Academy of Sports Medicine Certified Personal Trainer"
  },
  { 
    name: "ACE Certified", 
    icon: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80",
    description: "American Council on Exercise Certified Professional"
  },
  { 
    name: "Strength & Conditioning", 
    icon: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=200&q=80",
    description: "National Strength and Conditioning Association Certified"
  },
  {
    name: "CrossFit L2",
    icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80",
    description: "CrossFit Level 2 Trainer"
  }
];

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10" id="about">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-shrink-0">
        <Image 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" 
          alt="Coach Anas Omran" 
          width={400} 
          height={400} 
          className="rounded-2xl shadow-xl object-cover aspect-square"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-1">
        <h2 className="text-4xl font-bold mb-4">About Coach Anas Omran</h2>
        <p className="mb-6 text-lg leading-relaxed">
          With over a decade of experience in personal training and fitness coaching, I've helped hundreds of clients transform their lives through personalized fitness programs. My journey in fitness began when I discovered my passion for helping others achieve their health and wellness goals.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          I specialize in strength training, weight loss, and athletic performance enhancement. My approach combines scientific training methods with personalized attention to ensure each client reaches their full potential. Whether you're a beginner or an experienced athlete, I'll create a program tailored to your specific needs and goals.
        </p>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Personalized training programs based on your goals</li>
            <li>Nutrition guidance and meal planning</li>
            <li>Progress tracking and regular assessments</li>
            <li>24/7 support and motivation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map(cert => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="relative w-16 h-16 mb-3">
                  <Image 
                    src={cert.icon} 
                    alt={cert.name} 
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-orange-500">{cert.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 