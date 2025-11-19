import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Interactive. Futuristic. Digital.
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Websites that feel alive
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="mt-6 text-lg md:text-xl text-slate-200/85">
            committa is a design-led web studio crafting immersive brands and high-performance websites with cinematic motion and 3D experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 text-slate-900 font-semibold px-6 py-3 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.9)] hover:shadow-[0_10px_50px_-10px_rgba(59,130,246,1)] transition-shadow">
              Start your project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white font-medium px-6 py-3 backdrop-blur hover:bg-white/10 transition-colors">
              See our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
