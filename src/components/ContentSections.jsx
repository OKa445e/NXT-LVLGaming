import { useState } from 'react'
import { ArrowUpRight, CarFront, Gamepad2, Mail, MessageCircle, Monitor, Send, Sparkles, UsersRound } from 'lucide-react'
import { emailEnquiryLink, experiences, gamingZones, siteDetails, whatsappLink } from '../site'
import { iconMap, Reveal } from './shared'

function ZoneCard({ zone, index }) {
  const Icon = iconMap[zone.icon] || Gamepad2
  return (
    <Reveal delay={index * 0.07} className={`zone-card zone-${zone.accent}`}>
      <div className="zone-card-top"><span className="zone-number">{zone.number} / 05</span><span className="zone-icon"><Icon size={23} strokeWidth={1.8} /></span></div>
      <p className="eyebrow">{zone.subtitle}</p><h3>{zone.title}</h3><p className="zone-description">{zone.description}</p>
      <div className="zone-tags">{zone.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <a className="zone-link" href="#booking" aria-label={`Enquire about ${zone.title}`}>ENQUIRE <ArrowUpRight size={16} /></a><span className="card-corner" />
    </Reveal>
  )
}

function BookingForm() {
  const [name, setName] = useState('')
  const [game, setGame] = useState('PS5 / PS4 Gaming')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const message = `Hi NEXT LVL! I would like to enquire about a gaming session.\nName: ${name || 'Not provided'}\nGaming zone: ${game}\nPreferred date: ${date || 'Flexible'}\nPlayers: ${guests}\nPlease share availability and pricing.`
    setSubmitted(true)
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span className="eyebrow">PLAYER REGISTRATION</span><h3>LET'S GET YOU <span>IN THE GAME.</span></h3><p>Send a quick enquiry. We'll continue the conversation on WhatsApp.</p></div>
      <label><span>YOUR NAME</span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" autoComplete="name" /></label>
      <div className="form-row">
        <label><span>CHOOSE YOUR ZONE</span><select value={game} onChange={(event) => setGame(event.target.value)}><option>PS5 Gaming</option><option>PS4 Gaming</option><option>Racing Simulator</option><option>Multiplayer Gaming</option></select></label>
        <label><span>PLAYERS</span><select value={guests} onChange={(event) => setGuests(event.target.value)}>{['1', '2', '3', '4', '5', '6+'].map((value) => <option key={value}>{value}</option>)}</select></label>
      </div>
      <label><span>PREFERRED DATE <small>(OPTIONAL)</small></span><input type="date" value={date} onChange={(event) => setDate(event.target.value)} min={new Date().toISOString().split('T')[0]} /></label>
      <button className="button button-primary button-full" type="submit">{submitted ? 'OPEN WHATSAPP AGAIN' : 'SEND BOOKING ENQUIRY'} <Send size={16} /></button>
      <p className="form-note"><MessageCircle size={13} /> This opens WhatsApp with your enquiry pre-filled. No online payment is taken.</p>
    </form>
  )
}

function ZonesSection() {
  return (
    <section className="zones-section section-pad" id="zones">
      <div className="section-heading two-col-heading">
        <Reveal><p className="eyebrow"><span className="eyebrow-line" /> CHOOSE YOUR PLAYSTYLE</p><h2>FIVE ZONES.<br /><span>INFINITE</span> WAYS TO PLAY.</h2></Reveal>
        <Reveal delay={0.12} className="heading-side-note"><p>From console showdowns to high-speed laps, find your mode and own the moment.</p><span className="side-note-index">[ 001 — 005 ]</span></Reveal>
      </div>
      <div className="zones-grid">{gamingZones.map((zone, index) => <ZoneCard key={zone.number} zone={zone} index={index} />)}</div>
    </section>
  )
}

function PricingSection() {
  const options = [
    { no: '01', title: 'FLEX PLAY', subtitle: 'PLAY YOUR WAY', text: 'Choose your preferred gaming zone and ask about hourly sessions.', icon: Gamepad2, tone: 'cyan' },
    { no: '02', title: 'SQUAD TIME', subtitle: 'BRING YOUR CREW', text: 'Planning a multiplayer hangout? Check group slots and availability.', icon: UsersRound, tone: 'purple' },
    { no: '03', title: 'RACE MODE', subtitle: 'TAKE THE WHEEL', text: 'Ask about racing simulator sessions and the best time to visit.', icon: CarFront, tone: 'pink' },
  ]
  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="pricing-layout">
        <Reveal className="pricing-heading"><p className="eyebrow"><span className="eyebrow-line" /> PICK YOUR SESSION</p><h2>MORE PLAY.<br /><span>NO GUESSWORK.</span></h2><p>Tell us how you want to play and we'll share the latest rates and slot availability. Pricing can be updated here once the café confirms its packages.</p><a className="button button-primary" href={whatsappLink('Hi NEXT LVL! Please share your current gaming rates and available packages.')} target="_blank" rel="noreferrer">ASK FOR PRICING <ArrowUpRight size={16} /></a></Reveal>
        <div className="pricing-options">{options.map((item, index) => { const Icon = item.icon; return <Reveal key={item.no} delay={index * 0.08} className={`pricing-option pricing-${item.tone}`}><div className="pricing-option-top"><span>{item.no} / SESSION</span><Icon size={22} /></div><p>{item.subtitle}</p><h3>{item.title}</h3><span className="pricing-option-text">{item.text}</span><a href={whatsappLink(`Hi NEXT LVL! Please share rates and availability for ${item.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">CHECK RATES <ArrowUpRight size={14} /></a></Reveal> })}</div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="experience-backdrop" />
      <div className="experience-layout">
        <div className="experience-visual-column"><Reveal className="experience-visual-card"><div className="visual-topline"><span>THE NEXT LVL EXPERIENCE</span><span>FIG. 001</span></div><div className="visual-screen"><div className="screen-grid" /><div className="screen-ring ring-a" /><div className="screen-ring ring-b" /><div className="screen-center"><Gamepad2 size={56} strokeWidth={1.2} /><span>PRESS START</span></div><div className="screen-coordinates">28° 36' / PLAYER MODE</div><div className="screen-status"><span /> SYSTEM READY</div></div><div className="visual-footer"><span>PLAY TOGETHER. STAY AWHILE.</span><Sparkles size={17} /></div></Reveal><Reveal delay={0.12} className="experience-stamp"><span className="stamp-star">✳</span><span>GOOD TIMES<br />HIGH SCORES</span><span className="stamp-small">NEXT LVL / GG</span></Reveal></div>
        <div className="experience-copy"><Reveal><p className="eyebrow"><span className="eyebrow-line" /> NOT JUST ANOTHER GAME</p><h2>YOUR SQUAD.<br />YOUR <span>ARENA.</span><br />YOUR RULES.</h2><p className="experience-intro">Whether you're chasing a new high score or just looking for a place to hang out, NEXT LVL brings the good energy and the games together.</p></Reveal><div className="experience-list">{experiences.map((item, index) => { const Icon = iconMap[item.icon]; return <Reveal key={item.title} delay={index * 0.1} className="experience-item"><span className="experience-item-icon"><Icon size={20} /></span><span><b>{item.title}</b><small>{item.text}</small></span><span className="item-arrow"><ArrowUpRight size={17} /></span></Reveal> })}</div></div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="banner-section section-pad" id="gallery">
      <Reveal className="banner-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> THE SIGN THAT STARTED IT</p><h2>WELCOME TO <span>NEXT LVL.</span></h2></div><p>Big screen energy. Bigger game-day memories.</p></Reveal>
      <Reveal delay={0.1} className="banner-frame"><img src="/nextlvl-banner.png" alt="NEXT LVL Gaming Cafe and Esports original signboard showing PS5, PC gaming, racing simulator, multiplayer gaming and snacks" /><div className="banner-frame-glow" /></Reveal>
      <div className="mini-gallery"><div className="mini-gallery-card mini-gallery-console"><span>01 / CONSOLE ZONE</span><Gamepad2 size={43} /><b>PRESS<br />START</b></div><div className="mini-gallery-card mini-gallery-pc"><span>02 / PC GAMING</span><Monitor size={43} /><b>LOCK IN.<br />LEVEL UP.</b></div><div className="mini-gallery-card mini-gallery-race"><span>03 / RACING SIM</span><CarFront size={43} /><b>OWN<br />THE TRACK.</b></div></div>
      <div className="banner-caption"><span>THE HOME OF PLAY, COMPETITION & GOOD COMPANY</span><span>PLAY. COMPETE. LEVEL UP. <ArrowUpRight size={14} /></span></div>
    </section>
  )
}

function BookingSection() {
  return (
    <section className="booking-section section-pad" id="booking">
      <div className="booking-bg-grid" />
      <div className="booking-copy"><Reveal><p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT MATCH STARTS HERE</p><h2>DON'T JUST<br /><span>WATCH.</span><br />PLAY.</h2><p className="booking-intro">Got a game in mind? Planning a squad session? Drop us a message and check the latest slot availability and pricing.</p><div className="booking-contact-line"><span className="contact-pulse"><MessageCircle size={17} /></span><span>FASTEST WAY TO REACH US</span></div><a className="big-whatsapp-link" href={whatsappLink('Hi NEXT LVL! I would like to enquire about gaming slot availability and pricing.')} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <ArrowUpRight size={19} /></a><a className="big-email-link" href={emailEnquiryLink()} target="_blank" rel="noreferrer"><Mail size={17} /> EMAIL AN ENQUIRY <ArrowUpRight size={17} /></a></Reveal>
        <Reveal delay={0.12} className="contact-numbers"><div><span>CALL / WHATSAPP</span><a href={`tel:+91${siteDetails.primaryPhone}`}>+91 {siteDetails.primaryPhone}</a></div><div><span>ALTERNATE NUMBER</span><a href={`tel:+91${siteDetails.secondaryPhone}`}>+91 {siteDetails.secondaryPhone}</a></div></Reveal>
      </div>
      <Reveal delay={0.1} className="booking-form-wrap"><BookingForm /></Reveal>
    </section>
  )
}

export default function ContentSections() {
  return <><div className="ticker-wrap" aria-label="Gaming experiences"><div className="ticker-track">{Array.from({ length: 2 }).map((_, loop) => <div className="ticker-group" key={loop}>{['PS5 GAMING','PS4 GAMING', 'PC GAMING', 'RACING SIMULATOR', 'MULTIPLAYER'].map((item) => <span key={`${loop}-${item}`}>{item}<b>✳</b></span>)}</div>)}</div></div><ZonesSection /><PricingSection /><ExperienceSection /><GallerySection /><BookingSection /><section className="closing-strip"><div className="closing-wordmark">NEXT<span>LVL</span></div><p>GOOD GAME. GREAT COMPANY. SEE YOU IN THE ARENA.</p><a href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a></section></>
}