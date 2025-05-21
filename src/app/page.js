'use client';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
