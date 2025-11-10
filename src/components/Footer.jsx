export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Built with React, Tailwind, and a splash of 3D.</p>
      </div>
    </footer>
  );
}
