import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-semibold text-white">
            Tell us about your project
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-slate-300/85">
            We typically reply within one business day. Let’s build something remarkable.
          </motion.p>
        </div>

        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="mx-auto mt-10 max-w-2xl grid grid-cols-1 gap-4">
          <input required placeholder="Your name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          <input type="email" required placeholder="Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          <input placeholder="Company or brand" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          <textarea required rows={5} placeholder="Tell us what you need" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 text-slate-900 font-semibold px-6 py-3 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.9)] hover:shadow-[0_10px_50px_-10px_rgba(59,130,246,1)] transition-shadow">
            Send Inquiry
          </button>
        </motion.form>

        <p className="mt-6 text-center text-slate-400/80 text-sm">Prefer email? hello@committa.studio</p>
      </div>
    </section>
  )
}
