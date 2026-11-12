// Update these details when the café shares its final address, opening hours and social links.
export const siteDetails = {
  brand: 'NEXT LVL',
  primaryPhone: '9990870608',
  secondaryPhone: '7428771081',
  whatsappNumber: '919990870608', // WhatsApp CTA currently uses the first number from the banner.
  address: '',
  openingHours: '',
  mapsUrl: '',
  instagramUrl: 'https://www.instagram.com/next_lvl_gamers/',
  email: 'nextlvlgaming2026@gmail.com',
}

export const navItems = [
  ['HOME', '#home'],
  ['GAMING ZONES', '#zones'],
  ['PRICING', '#pricing'],
  ['THE EXPERIENCE', '#experience'],
  ['GALLERY', '#gallery'],
  ['CONTACT', '#contact'],
]

export function whatsappLink(message = 'Hi NEXT LVL! I would like to know more about gaming and slot availability.') {
  return `https://wa.me/${siteDetails.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function emailEnquiryLink() {
  const subject = encodeURIComponent('Gaming enquiry for NEXT LVL')
  const body = encodeURIComponent('Hi NEXT LVL,\n\nI would like to enquire about: ')
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteDetails.email)}&su=${subject}&body=${body}`
}

export const gamingZones = [
  {
    number: '01',
    title: 'PS5 & PS4',
    subtitle: 'CONSOLE ZONE',
    description: 'Pick your player, grab a controller and get straight into the action.',
    icon: 'gamepad',
    accent: 'cyan',
    tags: ['Console battles', 'Couch co-op'],
  },
  {
    number: '02',
    title: 'PC GAMING',
    subtitle: 'HIGH-PERFORMANCE PLAY',
    description: 'Lock in, squad up and take your favourite PC games to the next level.',
    icon: 'monitor',
    accent: 'purple',
    tags: ['Keyboard & mouse', 'Competitive play'],
  },
  {
    number: '03',
    title: 'RACING SIMULATOR',
    subtitle: 'DRIVER MODE',
    description: 'Take the wheel, hit the track and feel every turn from the driver seat.',
    icon: 'car',
    accent: 'pink',
    tags: ['Immersive racing', 'Time trials'],
  },
  {
    number: '04',
    title: 'MULTIPLAYER',
    subtitle: 'SQUAD UP',
    description: 'Bring your people together for friendly rivalries and full-on face-offs.',
    icon: 'users',
    accent: 'cyan',
    tags: ['Play together', 'Challenge friends'],
  },
  {
    number: '05',
    title: 'SNACKS & DRINKS',
    subtitle: 'POWER-UP BREAK',
    description: 'Take a break between rounds and recharge before your next match.',
    icon: 'cup',
    accent: 'purple',
    tags: ['Quick bites', 'Refreshments'],
  },
]

export const experiences = [
  { icon: 'trophy', title: 'BRING YOUR A-GAME', text: 'Turn a casual hangout into a proper match day.' },
  { icon: 'headphones', title: 'GET IN THE ZONE', text: 'Switch off the outside noise and lock into play.' },
  { icon: 'zap', title: 'MAKE IT A MOMENT', text: 'Big wins, close calls and stories to replay later.' },
]
