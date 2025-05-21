'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
    {
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        title: "Strength Training",
        description: "Intense strength training session"
    },
    {
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        title: "Cardio Workout",
        description: "High-intensity cardio training"
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        title: "Personal Training",
        description: "One-on-one coaching session"
    },
    {
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
        title: "Group Training",
        description: "Dynamic group workout"
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        title: "Recovery Session",
        description: "Post-workout recovery"
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        title: "Nutrition Planning",
        description: "Meal prep and planning"
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        title: "Progress Tracking",
        description: "Measuring success"
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        title: "Team Building",
        description: "Group fitness activities"
    }
];

export default function GalleryPage() {
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
                            <h1 className="text-5xl font-bold mb-6">Training Gallery</h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Take a look at our training sessions and see the energy, dedication, and results that happen every day.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {gallery.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg"
                                >
                                    <div className="relative aspect-square">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                                <p className="text-sm text-gray-200">{item.description}</p>
                                            </div>
                                        </div>
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
                            <h2 className="text-3xl font-bold mb-8">Ready to Join the Journey?</h2>
                            <a
                                href="/booking"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-colors duration-300 text-lg"
                            >
                                Book Your Session
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 