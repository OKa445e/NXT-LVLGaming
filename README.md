# NEXT LVL — Gaming Cafe & Esports

A responsive cyberpunk/neon landing page inspired by the NEXT LVL signboard.

## Tech stack

- React + Vite
- Tailwind CSS v4 (Vite plugin)
- Motion for React (the current continuation of Framer Motion)
- Lucide React icons

## Run it

Requires a current Node.js release supported by Vite (Node.js 20.19+ or 22.12+).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

## What's included

- Responsive desktop/mobile navigation
- Animated cyberpunk hero with floating neon controller illustration
- Glitch typography, particle field, scroll progress and motion reveals
- Gaming-zone cards: PS5/PS4, PC, racing simulator, multiplayer, snacks & drinks
- Experience section and animated visual panel
- Original NEXT LVL signboard image in the gallery section
- Booking enquiry form that opens WhatsApp with the enquiry pre-filled
- Click-to-call numbers, floating WhatsApp CTA and footer contact area
- Reduced-motion support

## Before publishing

Update `src/site.js` with the café's confirmed details:

- Verify which number should receive WhatsApp enquiries (`whatsappNumber` currently uses the first number from the supplied signboard).
- Add the full address, opening hours, Google Maps URL and Instagram URL when available.
- Replace the CSS-made gallery/experience visuals with real photos of the café and gaming setups when available.
- Add actual hourly prices once the owner confirms them. No prices or address have been invented in this starter.

## Deploy

You can deploy the project to Vercel or Netlify. Import the project folder/repository, use `npm run build` as the build command, and `dist` as the output directory.

The supplied signboard image is stored at `public/nextlvl-banner.png`.

## Open it online without installing on your computer

1. Create a new repository on GitHub (for example, `nextlvl-gaming-cafe`).
2. Upload the contents of this project folder to that repository using GitHub's website. Keep `package.json` and `index.html` at the repository root.
3. Open `https://stackblitz.com/github/YOUR-USERNAME/nextlvl-gaming-cafe` and replace `YOUR-USERNAME` with your GitHub username. StackBlitz can run a Vite project in the browser.
4. For a public website URL, import the same GitHub repository into Vercel and deploy it. Use `npm run build` and `dist` as the output directory.

You do not need to install Node.js or VS Code on your computer for the StackBlitz browser preview. The first StackBlitz load will still install the project's npm dependencies in its browser environment.
