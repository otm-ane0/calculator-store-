import type { Metadata } from 'next';
import { Bebas_Neue, Oswald, Space_Grotesk, Special_Elite } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special-elite',
});

export const metadata: Metadata = {
  title: 'THE SUPPLEMENT STORE',
  description: 'Premium Nutrition for Elite Performance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${oswald.variable} ${spaceGrotesk.variable} ${specialElite.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white text-[#0A0A0A] antialiased">
        <svg
          className="pointer-events-none fixed left-0 top-0 z-[9999] h-full w-full opacity-[0.08]"
          style={{ filter: "url(#grain)" }}
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        {children}
      </body>
    </html>
  );
}
