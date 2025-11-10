import { motion } from 'framer-motion';
import { Calendar, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Nebula Labs',
    period: '2022 — Present',
    points: [
      'Led design system development with accessibility and theme tokens.',
      'Built real‑time dashboards and interactive 3D product tours.',
    ],
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Quantum Works',
    period: '2019 — 2022',
    points: [
      'Shipped high‑performance APIs and responsive web apps.',
      'Introduced CI/CD and testing best practices across teams.',
    ],
  },
];

const tech = [
  'React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion', 'Node.js', 'FastAPI', 'MongoDB', 'GraphQL', 'Docker'
];

const projects = [
  {
    title: 'Hologrid UI Kit',
    description: 'A glassmorphism design system with neon accents and dark/light modes.',
    tags: ['React', 'Tailwind', 'Radix'],
    link: '#',
    thumb: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="%236c2bd9"/><stop offset="1" stop-color="%230ea5e9"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/></svg>'
  },
  {
    title: 'Realtime Ops Panel',
    description: 'Telemetry, alerts, and live charts with buttery motion and perf.',
    tags: ['FastAPI', 'WebSockets', 'Framer'],
    link: '#',
    thumb: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="100%" height="100%" fill="%230b1020"/><circle cx="200" cy="200" r="120" fill="%236c2bd9"/><circle cx="420" cy="240" r="100" fill="%230ea5e9"/></svg>'
  },
  {
    title: '3D Product Story',
    description: 'Interactive Spline scenes embedded into a narrative landing page.',
    tags: ['Spline', 'React', 'WebGL'],
    link: '#',
    thumb: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><radialGradient id="r" cx="50%" cy="50%" r="70%"><stop stop-color="%23a78bfa"/><stop offset="1" stop-color="%23254" stop-opacity="0"/></radialGradient></defs><rect width="100%" height="100%" fill="%231a1033"/><rect width="100%" height="100%" fill="url(%23r)"/></svg>'
  },
];

export default function Sections() {
  return (
    <div className="relative z-10">
      {/* About */}
      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr] items-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 dark:border-white/10 bg-white/10 dark:bg-white/10 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="aspect-[4/3] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-sky-500/20" />
            </div>
            <div>
              <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                About Me
              </motion.h2>
              <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:0.05}} viewport={{once:true}} className="mt-4 text-zinc-700 dark:text-zinc-300 max-w-2xl">
                I craft minimal, immersive web experiences that blend performance with delightful interaction. My focus is clean architecture, elegant visuals, and accessible interfaces.
              </motion.p>
              <div className="mt-6 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Calendar className="h-4 w-4" /> <span>Available for freelance & collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp) => (
              <div key={exp.role} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{exp.role} • {exp.company}</h3>
                  <span className="text-xs text-violet-500 dark:text-violet-400">{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tech.map((t) => (
              <div key={t} className="group rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-3 text-center text-sm font-medium text-zinc-800 dark:text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_15px_rgba(167,139,250,0.35)] hover:border-violet-400/60 transition">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">Projects</h2>
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
                className="group rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] transition"
              >
                <div className="aspect-video w-full bg-black/20">
                  <img src={p.thumb} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-violet-400 group-hover:text-sky-300" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-zinc-800 dark:text-zinc-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Contact</h2>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">Have a project or opportunity? Let’s connect.</p>
              <div className="mt-4 flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Mail className="h-5 w-5 text-violet-400" /> <a href="mailto:you@example.com" className="hover:text-sky-300">you@example.com</a>
              </div>
              <div className="mt-2 flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Github className="h-5 w-5 text-violet-400" /> <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-sky-300">GitHub</a>
              </div>
              <div className="mt-2 flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Linkedin className="h-5 w-5 text-violet-400" /> <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-300">LinkedIn</a>
              </div>
            </div>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! I\'ll get back to you soon.')}} className="lg:col-span-2 grid gap-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50" placeholder="jane@mail.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">Message</label>
                <textarea required rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="What are we building together?" />
              </div>
              <div className="flex items-center justify-end">
                <button type="submit" className="relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-sky-600 text-white px-5 py-3 text-sm font-semibold shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:brightness-110 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
