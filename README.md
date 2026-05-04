# 🚀 Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features bilingual support (English/French), dynamic background rotation from Unsplash, and intelligent caching to minimize API calls.

Deployed on [Vercel](https://vercel.com).

## ✨ Features

- **🌐 Bilingual Support:** Seamlessly switch between English and French with locale-aware routing (`/en` and `/fr`).
- **🎨 Dynamic Backgrounds:** Automatically fetches and rotates through Unsplash images with a user-controlled refresh button.
- **💾 Smart Caching:** Caches Unsplash API responses for 2 minutes to reduce API overhead while keeping backgrounds fresh.
- **📧 Contact Form:** Fully functional contact form with email notifications via EmailJS.
- **🍪 Consent Management:** GDPR-compliant cookie banner with Google Analytics integration that respects user consent preferences.
- **⚡ Performance Optimized:** Server-side rendering, static generation, and image optimization.
- **📱 Fully Responsive:** Mobile-first design that works beautifully on all devices.
- **🎯 Analytics Ready:** Integrated with Google Analytics (loads only after user consent).
- **♿ Accessible:** Built with semantic HTML and accessibility best practices.

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) (React 18) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [SCSS](https://sass-lang.com/) |
| **Icons** | [react-icons](https://react-icons.github.io/react-icons/) (FontAwesome) |
| **Email** | [EmailJS](https://www.emailjs.com/) |
| **Analytics** | [Google Analytics](https://analytics.google.com/) |
| **Performance** | [Vercel Analytics](https://vercel.com/docs/analytics), [Vercel Speed Insights](https://vercel.com/docs/speed-insights) |
| **Internationalization** | [next-translate](https://github.com/vinissimus/next-translate) |
| **HTTP Client** | Native `fetch` API |
| **Hosting** | [Vercel](https://vercel.com) |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gen035/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── [lang]/                    # Locale-based routing
│   │   ├── layout.tsx             # Root layout with providers
│   │   ├── page.tsx               # Home page
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx           # Privacy policy
│   │   ├── cookie-policy/
│   │   │   └── page.tsx           # Cookie policy
│   │   └── styles/
│   │       ├── _animation.scss
│   │       ├── _button.scss
│   │       ├── _cookie-banner.scss
│   │       ├── _contact.scss
│   │       ├── _fonts.scss
│   │       ├── index.scss
│   │       └── ...
│   └── middleware.ts              # Locale detection & routing
├── components/
│   ├── BackgroundImage.tsx        # Dynamic background with caching
│   ├── BackgroundSwitcher.tsx     # Background refresh button
│   ├── CookieBanner.tsx           # Cookie consent banner
│   ├── ContactForm.tsx            # Email form component
│   ├── GoogleAnalytics.tsx        # GA integration
│   ├── SocialMediaLinks.tsx       # Social links footer
│   └── Skills.tsx                 # Skills showcase
├── lib/
│   └── dictionary.ts              # i18n helper
└── middleware.ts                  # Locale routing middleware

dictionaries/
├── en.json                        # English translations
└── fr.json                        # French translations

public/
└── og.jpg                         # Open Graph image
```

## 🔧 Configuration

### Google Analytics
Set your GA ID in `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXXXXX
```

Analytics only loads after the user accepts analytics cookies via the banner.

### Unsplash API
The background image rotator uses the Unsplash API (embedded client ID in the component). The API call is cached for 2 minutes to minimize requests.

## 📊 Environment Variables

| Variable | Type | Description |
|----------|------|-------------|
| `NEXT_PUBLIC_GA_ID` | string | Google Analytics Measurement ID (optional) |

## 🌍 Internationalization

The site uses Next.js locale routing. URLs follow the pattern:
- English: `/` and `/en/*`
- French: `/fr/*`

Locale detection is handled via [next-translate](https://github.com/vinissimus/next-translate) and custom middleware.

## 🙋 Questions?

Feel free to reach out via the [contact form](https://gen-migneron.com/contact) or check out my [GitHub](https://github.com/gen035).
