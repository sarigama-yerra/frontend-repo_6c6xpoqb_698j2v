import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
            <span className="text-white font-semibold tracking-wide text-lg">committa</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#process">Process</NavLink>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 font-medium shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.9)] transition-shadow">
              Start a Project
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6">
          <div className="mt-2 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#process">Process</NavLink>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 font-medium shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
