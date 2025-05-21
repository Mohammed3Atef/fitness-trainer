'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: '',
        experience: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="pt-16">
                <section className="w-full py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-5xl font-bold mb-6">Book Your Session</h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Take the first step towards your fitness goals. Fill out the form below to schedule your training session.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Fitness Goal</label>
                                        <select
                                            name="goal"
                                            value={formData.goal}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select your goal</option>
                                            <option value="weight-loss">Weight Loss</option>
                                            <option value="muscle-gain">Muscle Gain</option>
                                            <option value="strength">Strength Training</option>
                                            <option value="endurance">Endurance</option>
                                            <option value="general-fitness">General Fitness</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Experience Level</label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select your experience</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Preferred Date</label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Preferred Time</label>
                                        <input
                                            type="time"
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Additional Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    ></textarea>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-colors duration-300"
                                    >
                                        Book Now
                                    </button>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Or book directly via{' '}
                                        <a
                                            href="https://wa.me/1234567890"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-500 hover:text-orange-600"
                                        >
                                            WhatsApp
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 