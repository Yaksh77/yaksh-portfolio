# Cyber-Minimal Portfolio (Next.js + Three.js)

Modern, futuristic personal portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

## Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, Drei, lucide-react
- **Backend**: Next.js API Routes, MongoDB via Mongoose

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Create environment file**

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required vars:

- `MONGODB_URI` - your MongoDB connection string
- `NEXT_PUBLIC_SITE_URL` - base URL of your app (e.g. `http://localhost:3000` or your Vercel URL)

3. **Run the development server**

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm start
```

The project is designed to be **Vercel-ready** with no extra configuration required.


