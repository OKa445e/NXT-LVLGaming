import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, ChevronRight, Gamepad2, Menu, X } from 'lucide-react'
import { navItems, whatsappLink } from '../site'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="NEXT LVL home">
          <span className="brand-mark"><Gamepad2 size={25} /></span>
          <span className="brand-words"><strong>NEXT<span>LVL</span></strong><small>GAMING CAFE & ESPORTS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href={whatsappLink('Hi NEXT LVL! I would like to check gaming slot availability.')} target="_blank" rel="noreferrer">
          BOOK A SLOT <ArrowUpRight size={15} />
        </a>
        <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<ChevronRight size={16} /></a>)}
            <a className="mobile-nav-cta" href={whatsappLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>BOOK A SLOT <ArrowUpRight size={15} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}