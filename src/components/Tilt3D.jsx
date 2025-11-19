import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// 3D Tilt wrapper for hover interactions
// Usage: <Tilt3D><div>...</div></Tilt3D>
export default function Tilt3D({ children, className = '', intensity = 10, glare = true }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(y, [0, 1], [intensity, -intensity])
  const ry = useTransform(x, [0, 1], [-intensity, intensity])

  const srx = useSpring(rx, { stiffness: 200, damping: 20, mass: 0.5 })
  const sry = useSpring(ry, { stiffness: 200, damping: 20, mass: 0.5 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className={`group ${className}`}
    >
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <div className="relative will-change-transform" style={{ transform: 'translateZ(0)' }}>
          {children}
        </div>
        {glare && (
          <motion.div
            style={{
              opacity: useTransform(x, [0, 0.5, 1], [0, 0.25, 0]),
              x: useTransform(x, [0, 1], ['-20%', '20%']),
              y: useTransform(y, [0, 1], ['-20%', '20%'])
            }}
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(closest-side,rgba(255,255,255,0.15),transparent)] mix-blend-overlay"
          />
        )}
      </motion.div>
    </motion.div>
  )
}
