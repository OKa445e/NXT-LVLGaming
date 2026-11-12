import { motion, useReducedMotion } from 'motion/react'
import {
  CarFront,
  CupSoda,
  Gamepad2,
  Headphones,
  Monitor,
  Trophy,
  UsersRound,
  Zap,
} from 'lucide-react'

export const iconMap = {
  gamepad: Gamepad2,
  monitor: Monitor,
  car: CarFront,
  users: UsersRound,
  cup: CupSoda,
  trophy: Trophy,
  headphones: Headphones,
  zap: Zap,
}

export function Reveal({ children, className = '', delay = 0, y = 34 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}