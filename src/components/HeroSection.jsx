import { useMemo } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight, ArrowUpRight, CarFront, Gamepad2, Monitor, Sparkles, UsersRound } from 'lucide-react'

function Particles() {
  const dots = useMemo(() => Array.from({ length: 34 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 11) % 100}%`,
    top: `${(index * 61 + 7) % 100}%`,
    delay: `${(index % 9) * -0.7}s`,
    duration: `${5 + (index % 5)}s`,
    size: index % 7 === 0 ? 4 : 2,
  })), [])
  return (
    <div className="particle-field" aria-hidden="true">
      {dots.map((dot) => <span key={dot.id} className="particle" style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size, animationDelay: dot.delay, animationDuration: dot.duration }} />)}
      <span className="grid-haze" />
    </div>
  )
}

function ControllerArt() {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div className="controller-stage" animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 1.4, 0, -1.2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="controller-orbit orbit-one" />
      <div className="controller-orbit orbit-two" />
      <div className="controller-glow" />
      <svg className="controller-svg" viewBox="0 0 680 420" role="img" aria-label="Neon gaming controller illustration">
        <defs>
          <linearGradient id="controllerBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#173b70" /><stop offset="0.48" stopColor="#0d1a3b" /><stop offset="1" stopColor="#24154f" /></linearGradient>
          <linearGradient id="controllerEdge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#42efff" /><stop offset="0.53" stopColor="#538bff" /><stop offset="1" stopColor="#c16cff" /></linearGradient>
          <linearGradient id="controllerPanel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#101f48" /><stop offset="1" stopColor="#090d25" /></linearGradient>
          <filter id="neonBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <ellipse cx="340" cy="355" rx="230" ry="22" fill="#00dfff" opacity=".13" />
        <path d="M150 142 C177 92 224 70 278 84 L402 84 C456 70 503 92 530 142 L596 265 C614 302 588 344 546 343 C512 342 482 320 459 292 L423 257 L257 257 L221 292 C198 320 168 342 134 343 C92 344 66 302 84 265 Z" fill="url(#controllerBody)" stroke="url(#controllerEdge)" strokeWidth="7" filter="url(#neonBlur)" />
        <path d="M165 151 C191 111 231 95 278 106 L402 106 C449 95 489 111 515 151 L566 257 C580 287 559 321 532 320 C506 319 481 297 455 265 L430 235 L250 235 L225 265 C199 297 174 319 148 320 C121 321 100 287 114 257 Z" fill="url(#controllerPanel)" stroke="#4cdffb" strokeOpacity=".4" strokeWidth="2" />
        <path d="M252 111 Q340 82 428 111 L455 150 Q340 179 225 150 Z" fill="#102550" stroke="#6b9dff" strokeOpacity=".5" strokeWidth="2" />
        <rect x="280" y="116" width="120" height="35" rx="16" fill="#091329" stroke="#36e5ff" strokeOpacity=".8" strokeWidth="2" />
        <path d="M340 120 V145 M327 132 H353" stroke="#35eaff" strokeWidth="3" strokeLinecap="round" opacity=".9" />
        <circle cx="213" cy="228" r="47" fill="#0b1632" stroke="#49e6ff" strokeWidth="5" /><circle cx="213" cy="228" r="30" fill="#172d57" stroke="#397bc7" strokeWidth="3" /><circle cx="213" cy="228" r="13" fill="#091329" stroke="#5df3ff" strokeWidth="2" />
        <circle cx="467" cy="228" r="47" fill="#0b1632" stroke="#b578ff" strokeWidth="5" /><circle cx="467" cy="228" r="30" fill="#20214c" stroke="#8058d9" strokeWidth="3" /><circle cx="467" cy="228" r="13" fill="#091329" stroke="#c48bff" strokeWidth="2" />
        <g stroke="#52eaff" strokeWidth="7" strokeLinecap="round"><path d="M144 213 V255 M123 234 H165" /></g>
        <g fill="#c58bff" stroke="#f0c8ff" strokeWidth="2"><circle cx="527" cy="200" r="12" /><circle cx="557" cy="230" r="12" /><circle cx="497" cy="230" r="12" /><circle cx="527" cy="260" r="12" /></g>
        <g fill="#071126" stroke="#6defff" strokeWidth="2"><circle cx="276" cy="194" r="10" /><circle cx="404" cy="194" r="10" /></g>
        <path d="M296 282 Q340 302 384 282" fill="none" stroke="#4f95ff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
        <path d="M120 285 Q146 306 174 288 M506 288 Q534 306 560 285" fill="none" stroke="#d08cff" strokeWidth="2" opacity=".6" />
      </svg>
      <div className="float-chip chip-left"><span className="chip-dot" /> PLAYER 01 <b>READY</b></div>
      <div className="float-chip chip-right"><Sparkles size={13} /> NEXT LEVEL <b>UNLOCKED</b></div>
    </motion.div>
  )
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 130])

  return (
    <section className="hero-section" id="home">
      <Particles />
      <div className="hero-scanline" />
      <div className="hero-shell">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}><span className="live-pulse" /> YOUR NEW PLAYER TWO SPOT</motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>GAMING CAFE <i /> ESPORTS <i /> COMMUNITY</motion.p>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>NEXT<br /><span className="glitch-word" data-text="LVL">LVL</span></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72, duration: 0.8 }}>Play. Compete. Level up. More than a game, it's your arena. Grab a controller, bring your squad and make every session count.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.86 }}><a className="button button-primary" href="#booking">BOOK YOUR SESSION <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#zones"><span className="play-icon">▶</span> EXPLORE THE ZONES</a></motion.div>
          <motion.div className="hero-proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}><div className="proof-icons"><Gamepad2 /><Monitor /><CarFront /><UsersRound /></div><span><b>ONE PLACE.</b> FIVE WAYS TO PLAY.</span></motion.div>
        </div>
        <motion.div className="hero-art-wrap" style={reduceMotion ? undefined : { y: heroY }}><div className="hero-art-label label-top"><span>SYS.ONLINE</span><b>01</b></div><ControllerArt /><div className="hero-art-label label-bottom"><span>READY PLAYER?</span><b>PRESS START <ArrowRight size={13} /></b></div><div className="hero-crosshair crosshair-one" /><div className="hero-crosshair crosshair-two" /></motion.div>
      </div>
      <div className="hero-bottom-line"><span>SCROLL TO ENTER THE ARENA</span><ArrowDown size={15} /><span className="line-grow" /><span>EST. FOR THE LOVE OF PLAY</span></div>
    </section>
  )
}