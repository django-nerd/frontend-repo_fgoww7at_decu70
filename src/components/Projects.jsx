import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Showcase',
    description: 'A playful yet performant 3D experience built with Spline and WebGL.',
    tags: ['Spline', 'Three', 'React'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    description: 'Accessible UI kit with tokens, components, and theming primitives.',
    tags: ['Design Tokens', 'Radix', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Metrics, charts, and alerts with smooth motion and dark mode support.',
    tags: ['FastAPI', 'WebSockets', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Selected work</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">A few recent projects that highlight craft, performance, and attention to detail.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-shadow"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 mb-4" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
