'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah M.",
        role: "Weight Loss Journey",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        quote: "Coach Anas changed my life! I've lost 30 pounds and gained so much confidence. His personalized approach and constant support made all the difference.",
        results: ["Lost 30 pounds", "Improved energy levels", "Better sleep quality"]
    },
    {
        name: "James K.",
        role: "Muscle Building",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        quote: "The best trainer I've ever worked with. His knowledge of strength training and nutrition helped me achieve my muscle gain goals faster than I expected.",
        results: ["Gained 15 pounds of muscle", "Increased strength by 40%", "Better form and technique"]
    },
    {
        name: "Lina S.",
        role: "Athletic Performance",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        quote: "Personalized, motivating, and effective. Coach Anas helped me improve my athletic performance and reach new personal bests in my sport.",
        results: ["Improved sprint time", "Enhanced endurance", "Better recovery"]
    }
];

export default function TestimonialsPage() {
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
                            <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Hear from our clients who have transformed their lives through our training programs.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="relative w-16 h-16 mr-4">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                            <p className="text-orange-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                                    <div className="space-y-2">
                                        {testimonial.results.map((result) => (
                                            <div key={result} className="flex items-center">
                                                <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mt-16"
                        >
                            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Success Story?</h2>
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