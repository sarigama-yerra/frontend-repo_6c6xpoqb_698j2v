import { motion } from 'framer-motion'
import Tilt3D from './Tilt3D'

const projects = [
  {
    title: 'Futura Commerce',
    desc: 'Next-gen ecommerce UX with immersive product storytelling.',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Arclight Labs',
    desc: 'Brand site with WebGL hero and kinetic typography.',
    img: 'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1975&auto=format&fit=crop'
  },
  {
    title: 'Nimbus Cloud',
    desc: 'SaaS marketing with motion system and 3D scenes.',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2080&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-semibold text-white">
              Selected work
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-slate-300/85">
              A snapshot of recent launches blending craft, performance and interactivity.
            </motion.p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-white/15 bg-white/5 text-white font-medium px-5 py-2 backdrop-blur hover:bg-white/10 transition-colors">Work with us</a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Tilt3D key={i} className="[transform-style:preserve-3d]">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 block"
              >
                <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white font-medium text-lg">{p.title}</h3>
                  <p className="text-slate-300/85 text-sm">{p.desc}</p>
                </div>
              </motion.a>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  )
}
