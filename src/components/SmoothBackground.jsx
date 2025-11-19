import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

// Ambient, slow-moving gradient orbs for a smoother, premium feel
export default function SmoothBackground() {
  const controls = useAnimationControls()

  useEffect(() => {
    async function loop() {
      while (true) {
        await controls.start({ x: 40, y: -20, transition: { duration: 12, ease: 'easeInOut' } })
        await controls.start({ x: -10, y: 10, transition: { duration: 14, ease: 'easeInOut' } })
        await controls.start({ x: 0, y: 0, transition: { duration: 16, ease: 'easeInOut' } })
      }
    }
    loop()
  }, [controls])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={controls}
        className="absolute -top-24 left-1/2 h-[38rem] w-[68rem] -translate-x-1/2 rounded-[999px] blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(50% 50% at 30% 60%, rgba(34,197,94,0.12), transparent 70%), radial-gradient(40% 40% at 70% 30%, rgba(59,130,246,0.16), transparent 70%)'
        }}
      />
      <motion.div
        animate={controls}
        className="absolute bottom-[-6rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.2), transparent 60%)' }}
      />
    </div>
  )
}
