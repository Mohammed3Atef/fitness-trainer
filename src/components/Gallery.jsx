'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    title: "Strength Training",
    description: "Intense strength training session"
  },
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    title: "Cardio Workout",
    description: "High-intensity cardio training"
  },
  {
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80",
    title: "Personal Training",
    description: "One-on-one coaching session"
  },
  {
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
    title: "Group Training",
    description: "Dynamic group workout"
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    title: "Recovery Session",
    description: "Post-workout recovery"
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    title: "Nutrition Planning",
    description: "Meal prep and planning"
  },
  {
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    title: "Progress Tracking",
    description: "Measuring success"
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    title: "Team Building",
    description: "Group fitness activities"
  }
];

export default function Gallery() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900" id="gallery">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Take a look at some of our training sessions and transformations. Each image tells a story of dedication, hard work, and achievement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: i * 0.1 }} 
              className="overflow-hidden rounded-xl shadow-lg group"
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
      </div>
    </section>
  );
} 