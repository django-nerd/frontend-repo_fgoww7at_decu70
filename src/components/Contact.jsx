import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you soon.');
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Let’s work together</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">Have a project in mind or just want to say hi? Drop a message and I\'ll reply shortly.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Name</label>
            <input required type="text" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Email</label>
            <input required type="email" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 text-sm font-semibold shadow hover:opacity-90">
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
