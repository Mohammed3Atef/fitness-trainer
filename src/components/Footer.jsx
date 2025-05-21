'use client';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-gray-900 dark:bg-black text-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-2.02V7.797c0-.465.308-.573.525-.573h1.465V4.998h-2.02c-2.22 0-2.72 1.667-2.72 2.72v1.28H9.5v2.5h1.255V19h2.5v-7.502h1.68l.09-2.5z" /></svg></a>
      </div>
      <div className="text-center md:text-left">
        <a href="mailto:anasomran@example.com" className="hover:underline">anasomran@example.com</a> | <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
      </div>
      <div className="text-center md:text-right text-sm">&copy; 2025 Coach Anas Omran. All rights reserved.</div>
    </footer>
  );
} 