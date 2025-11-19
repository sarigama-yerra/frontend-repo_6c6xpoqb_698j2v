import { motion } from 'framer-motion'
import { Sparkles, Palette, Zap, Shapes } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Brand-first experiences',
    desc: 'We craft branded systems that translate into interactive, seamless websites that people remember.'
  },
  {
    icon: Zap,
    title: 'Motion as a language',
    desc: 'Micro-interactions, fluid transitions and 3D scenes that guide attention and tell your story.'
  },
  {
    icon: Shapes,
    title: '3D & WebGL',
    desc: 'We integrate Spline and Three.js elements for immersive, performant, and accessible 3D.'
  },
  {
    icon: Palette,
    title: 'Design systems',
    desc: 'Scalable components and documentation so your product grows consistently across screens.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[50rem] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-teal-300/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-semibold text-white">
            What we do
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-slate-300/85">
            A modern web presence that blends aesthetics, performance and motion—built for conversion.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 flex items-center justify-center text-slate-900 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
                {<f.icon size={20} />}
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
