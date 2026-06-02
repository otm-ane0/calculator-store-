'use client';

import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-[32px] h-[32px] bg-yellow border-[1.5px] border-black flex items-center justify-center hover:bg-black hover:text-yellow transition-colors group">
                  <Icon size={16} className="text-black group-hover:text-yellow transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-oswald text-[13px] font-bold text-black uppercase tracking-[0.2em] mb-6">
              SHOP
            </h4>
            <ul className="flex flex-col gap-3">
              {['Whey Protein', 'Pre-Workout', 'Creatine', 'Mass Gainers', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-special text-[14px] text-gray-t hover:text-black transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-[13px] font-bold text-black uppercase tracking-[0.2em] mb-6">
              SUPPORT
            </h4>
            <ul className="flex flex-col gap-3">
              {['Contact Us', 'Shipping & Delivery', 'Returns Policy', 'FAQ', 'Track Order'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-special text-[14px] text-gray-t hover:text-black transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-[13px] font-bold text-black uppercase tracking-[0.2em] mb-6">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Our Athletes', 'Careers', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-special text-[14px] text-gray-t hover:text-black transition-colors">
                    {link}
                  </Link>
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
          
          <div className="flex gap-2">
            {['VISA', 'MASTERCARD', 'CASH ON DELIVERY'].map((payment) => (
              <div key={payment} className="border border-gray-m px-3 py-1 bg-white flex items-center justify-center">
                <span className="font-oswald text-[10px] text-black font-bold tracking-wider">
                  {payment}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
