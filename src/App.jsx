import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import SmoothBackground from './components/SmoothBackground'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <SmoothBackground />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Work />
        <Process />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} committa — Web design agency</p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
