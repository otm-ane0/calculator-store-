'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="30" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="30" rx="4" fill="#1A1F71"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontFamily="Arial" fontWeight="bold" fontStyle="italic" letterSpacing="1">VISA</text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 30" width="48" height="30" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="30" rx="4" fill="#252525"/>
      <circle cx="18" cy="15" r="9" fill="#EB001B"/>
      <circle cx="30" cy="15" r="9" fill="#F79E1B"/>
      <path d="M24 8.27a9 9 0 0 1 0 13.46A9 9 0 0 1 24 8.27z" fill="#FF5F00"/>
    </svg>
  );
}

function CashIcon() {
  return (
    <svg viewBox="0 0 48 30" width="48" height="30" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="30" rx="4" fill="#1a1a1a"/>
      <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#F5C400" fontSize="6.5" fontFamily="Arial" fontWeight="bold" letterSpacing="0.3">CASH ON</text>
      <text x="50%" y="75%" dominantBaseline="middle" textAnchor="middle" fill="#F5C400" fontSize="6.5" fontFamily="Arial" fontWeight="bold" letterSpacing="0.3">DELIVERY</text>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Instagram, href: '#' },
    { Icon: Facebook,  href: '#' },
    { Icon: TikTokIcon, href: '#' },
    { Icon: Youtube,   href: '#' },
  ];

  return (
    <footer className="w-full bg-cream border-t-[3px] border-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="font-bebas text-[28px] text-black tracking-[0.05em] mb-4">
              THE SUPPLEMENT STORE
            </Link>
            <p className="font-special text-[14px] text-gray-t mb-6">
              Premium nutrition for elite performance. Founded in Casa, delivering across Morocco.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-[32px] h-[32px] bg-yellow border-[1.5px] border-black flex items-center justify-center hover:bg-black hover:text-yellow transition-colors group">
                  <Icon size={16} className="text-black group-hover:text-yellow transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-oswald text-[13px] font-bold text-black uppercase tracking-[0.2em] mb-6">SHOP</h4>
            <ul className="flex flex-col gap-3">
              {['Whey Protein', 'Pre-Workout', 'Creatine', 'Mass Gainers', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-special text-[14px] text-gray-t hover:text-black transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-[13px] font-bold text-black uppercase tracking-[0.2em] mb-6">SUPPORT</h4>
            <ul className="flex flex-col gap-3">
              {['Contact Us', 'Shipping & Delivery', 'Returns Policy', 'FAQ', 'Track Order'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-special text-[14px] text-gray-t hover:text-black transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-[13px] font-bold text-black uppercase tracking-[0.2em] mb-6">COMPANY</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Our Athletes', 'Careers', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-special text-[14px] text-gray-t hover:text-black transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-m flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-oswald text-[11px] text-gray-t tracking-[0.1em] uppercase">
            © {currentYear} THE SUPPLEMENT STORE. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-2 items-center">
            {[VisaIcon, MastercardIcon, CashIcon].map((PayIcon, i) => (
              <div key={i} className="border border-gray-m bg-white flex items-center justify-center p-1 rounded-sm">
                <PayIcon />
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}