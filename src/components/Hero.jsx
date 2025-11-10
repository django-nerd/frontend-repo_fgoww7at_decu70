import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-[70rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-emerald-400/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Building delightful digital products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl"
          >
            I’m a product-focused developer crafting modern, accessible web experiences. Explore selected work, skills, and how to get in touch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="inline-flex items-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 text-sm font-semibold shadow hover:opacity-90">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900">
              Contact Me
            </a>
          </motion.div>
        </div>
        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-zinc-200/60 dark:ring-zinc-800/80 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
