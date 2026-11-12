import { ArrowUpRight, Gamepad2, MessageCircle } from 'lucide-react'
import { navItems, siteDetails, whatsappLink } from '../site'

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand-block"><a className="brand-lockup" href="#home"><span className="brand-mark"><Gamepad2 size={25} /></span><span className="brand-words"><strong>NEXT<span>LVL</span></strong><small>GAMING CAFE & ESPORTS</small></span></a><p>Play. Compete. Level up.<br />Your next favourite gaming spot starts here.</p></div>
          <div className="footer-column"><span className="footer-label">EXPLORE</span>{navItems.slice(1, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer-column"><span className="footer-label">CONNECT WITH US</span><a href={siteDetails.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href={`mailto:${siteDetails.email}`}>{siteDetails.email}</a><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp us</a><a href={`tel:+91${siteDetails.primaryPhone}`}>+91 {siteDetails.primaryPhone}</a><a href={`tel:+91${siteDetails.secondaryPhone}`}>+91 {siteDetails.secondaryPhone}</a>{siteDetails.address && <span className="footer-address">{siteDetails.address}</span>}{siteDetails.mapsUrl && <a href={siteDetails.mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13} /></a>}</div>
          <div className="footer-cta-block"><span className="footer-label">READY PLAYER ONE?</span><a href="#booking" className="footer-cta">LET'S PLAY <ArrowUpRight size={16} /></a><span className="footer-coordinates">NO PAUSE. ALL PLAY.</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} NEXT LVL GAMING CAFE. ALL RIGHTS RESERVED.</span><span>BUILT FOR THE LOVE OF PLAY <span className="footer-heart">✳</span></span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with NEXT LVL on WhatsApp"><MessageCircle size={21} /><span>LET'S CHAT</span></a>
    </>
  )
}