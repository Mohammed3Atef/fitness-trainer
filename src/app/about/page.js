'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
                            <h1 className="text-5xl font-bold mb-6">About Coach Anas Osman</h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                With over a decade of experience in personal training and fitness coaching, I&apos;ve helped hundreds of clients transform their lives through personalized fitness programs.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                                        alt="Coach Anas Osman"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                                <p className="text-lg leading-relaxed">
                                    My journey in fitness began when I discovered my passion for helping others achieve their health and wellness goals. I specialize in strength training, weight loss, and athletic performance enhancement.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    My approach combines scientific training methods with personalized attention to ensure each client reaches their full potential. Whether you&apos;re a beginner or an experienced athlete, I&apos;ll create a program tailored to your specific needs and goals.
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    10+ years of professional training experience with hundreds of successful client transformations.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold mb-4">Expertise</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Specialized in strength training, weight loss, and athletic performance enhancement.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold mb-4">Approach</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Personalized programs tailored to individual goals, with ongoing support and motivation.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
                            <a
                                href="/booking"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-colors duration-300 text-lg"
                            >
                                Book Your First Session
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 