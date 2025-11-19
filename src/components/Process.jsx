import { motion } from 'framer-motion'
import { Compass, PencilRuler, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    desc: 'We align on goals, audience, and outcomes to set the foundation for success.'
  },
  {
    icon: PencilRuler,
    title: 'Design',
    desc: 'Concepts, moodboards, and high-fidelity designs with motion prototypes.'
  },
  {
    icon: Code2,
    title: 'Build',
    desc: 'Production-grade frontend with scalable components and 3D integration.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Perf optimizations, analytics, and training for a smooth handoff.'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-semibold text-white">
            Our process
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-slate-300/85">
            A refined method from strategy to ship designed for speed and quality.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 flex items-center justify-center text-slate-900 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
                {<s.icon size={20} />}
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
