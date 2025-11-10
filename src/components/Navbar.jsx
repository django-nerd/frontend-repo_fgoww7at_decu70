import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin } from 'lucide-react';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function Navbar({ onToggleTheme }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    onToggleTheme?.(theme);
  }, [theme, onToggleTheme]);

  return (
    <header className="fixed top-4 left-0 right-0 z-30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_40px_rgba(59,130,246,0.15)]">
          <a href="#hero" className="ml-3 inline-flex items-center gap-2">
            <span className="h-7 w-7 rounded-xl bg-gradient-to-tr from-violet-600 to-sky-500 shadow-[0_0_20px_rgba(167,139,250,0.35)]" />
            <span className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">Portfolio</span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm">
            {[
              { href: '#about', label: 'About' },
              { href: '#experience', label: 'Experience' },
              { href: '#tech', label: 'Tech' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1 pr-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-white/10 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="ml-1 mr-1 p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-white/10 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
