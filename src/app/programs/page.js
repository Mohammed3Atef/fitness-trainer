'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const programs = [
    {
        title: "Weight Loss Program",
        description: "Personalized plans to help you shed pounds and feel great.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        features: ["Customized meal plans", "Regular progress tracking", "24/7 support", "Workout routines"]
    },
    {
        title: "Muscle Building",
        description: "Build lean muscle and boost your strength.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        features: ["Strength training", "Nutrition guidance", "Recovery protocols", "Progress monitoring"]
    },
    {
        title: "Strength & Conditioning",
        description: "Enhance your athletic performance.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        features: ["Sport-specific training", "Agility drills", "Endurance building", "Performance testing"]
    },
    {
        title: "Online Coaching",
        description: "Train with Anas from anywhere in the world.",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
        features: ["Virtual sessions", "App-based tracking", "Video consultations", "Remote support"]
    }
];

export default function ProgramsPage() {
    return (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="pt-16">
                <section className="w-full py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Choose the perfect program to achieve your fitness goals. Each program is tailored to your specific needs and objectives.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {programs.map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="relative h-64">
                                        <Image
                                            src={program.image}
                                            alt={program.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>
                                        <ul className="space-y-2">
                                            {program.features.map((feature) => (
                                                <li key={feature} className="flex items-center">
                                                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href="/booking"
                                            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 