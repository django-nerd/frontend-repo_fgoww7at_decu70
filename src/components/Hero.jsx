import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-20 overflow-hidden">
      {/* Neon gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[80rem] -translate-x-1/2 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-violet-600/25 via-fuchsia-500/15 to-sky-500/25 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-700 dark:from-violet-300 via-sky-600 dark:via-sky-200 to-zinc-800 dark:to-white text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(167,139,250,0.25)]"
          >
            Your Name
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-lg text-zinc-700 dark:text-zinc-300 max-w-xl"
          >
            Minimal, futuristic developer portfolio. Building elegant interfaces and immersive web experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="relative inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-sky-600 text-white px-5 py-3 text-sm font-semibold shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:brightness-110 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)] transition">
              Contact Me
            </a>
          </motion.div>
        </div>
        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* subtle overlay gradients that won't block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 dark:from-[#0b0f1a]/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
