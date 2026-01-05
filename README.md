# Mentorship Matching Mixer

A simple web application to complement an IRL event with three timer-based activities for mentorship discussions.

**Core Concept:** "We all have something to teach and something to learn."

## Features

### Three Core Activities

1. **Speed Round** - 1:1 discussion with 60-second alternating turns
2. **Small Groups** - Group discussion with 5-minute timer
3. **Hot Seat** - Open discussion with 3-minute timer (no prompts)

All activities include:
- Start, Reset, and Stop timer controls
- Mobile-first responsive design
- Growth garden aesthetic matching p2pmentor

## Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm (recommended)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 22+ (LTS recommended)
- pnpm (recommended), npm, or Bun

### Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
mentormixer/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── speed-round/       # Speed Round activity
│   ├── small-groups/      # Small Groups activity
│   └── hot-seat/          # Hot Seat activity
├── components/            # React components
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
├── data/                  # Prompt JSON files
└── public/                # Static assets
```

## Deployment

This app is designed to deploy easily to Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Next.js
4. Deploy (automatic on every push)

## License

MIT License - see LICENSE file for details

