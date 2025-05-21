'use client';

export default function Booking() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black" id="booking">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Book a Session</h2>
        <form className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <input type="text" placeholder="Name" className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          <input type="email" placeholder="Email" className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          <input type="text" placeholder="Your Goal" className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          <input type="date" className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300 mt-2">Book Now</button>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-center text-blue-600 dark:text-blue-400 underline mt-2">Or book via WhatsApp</a>
        </form>
      </div>
    </section>
  );
} 