import React from 'react';
import { PRODUCTS } from '../../data/products';
import { OsumOpossum } from '../mascot/OsumOpossum';
import { ShieldCheck, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onNavigateDomain: (domain: string) => void;
  onOpenPlaytestModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onNavigateDomain,
  onOpenPlaytestModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: string) => {
    onNavigateDomain('osumgames.com');
    onNavigate(view);
    scrollToTop();
  };

  return (
    <footer className="bg-white border-t-4 border-black text-black text-sm mt-24 shadow-[0_-4px_0_0_#000]">
      {/* Playful Brand Signature Banner */}
      <div className="border-b-4 border-black bg-[#FFDA00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="p-2 bg-white border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-2deg] shrink-0">
              <OsumOpossum state="waving" size="md" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-display text-black tracking-tight uppercase">
                Don't play dead. <span className="bg-black text-[#FFDA00] px-2 py-0.5 inline-block -rotate-1">Play Osum.</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-black/80 mt-1 max-w-md">
                We make video games, tabletop strategy board games, and creative toys at the intersection of fun, exploration, and creativity.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleNav('catalog')}
              className="px-5 py-3 bg-white hover:bg-black hover:text-white text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              Explore All Worlds
            </button>
            <button
              onClick={onOpenPlaytestModal}
              className="px-5 py-3 bg-[#00A896] hover:bg-black hover:text-[#00A896] text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              Join Playtest Cohort
            </button>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Studio */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-black text-sm uppercase tracking-wider bg-[#FFDA00] px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]">
              Studio & Story
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-[#FF6B35] transition-colors text-left flex items-center gap-1">
                  <span>↳ Our Story & Manifesto</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-[#FF6B35] transition-colors text-left flex items-center gap-1">
                  <span>↳ Meet the Team & Inventors</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('news')} className="hover:text-[#FF6B35] transition-colors text-left flex items-center gap-1">
                  <span>↳ What's Happening (Devlogs)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('press')} className="hover:text-[#FF6B35] transition-colors text-left flex items-center gap-1">
                  <span>↳ Press Kit & Media Assets</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-[#FF6B35] transition-colors text-left flex items-center gap-1">
                  <span>↳ Contact Studio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Dedicated Product Worlds */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-black text-sm uppercase tracking-wider bg-[#00A896] text-black px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]">
              Product Worlds
            </h4>
            <ul className="space-y-2 text-xs font-mono font-bold">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => {
                      onNavigateDomain(prod.canonical_domain);
                      scrollToTop();
                    }}
                    className="hover:bg-[#FFDA00] px-1 transition-colors flex items-center gap-1 text-left"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-500">({prod.slug})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support, Safety & Parts */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-black text-sm uppercase tracking-wider bg-[#4834D4] text-white px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]">
              Safety & Care
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <button onClick={() => handleNav('safety')} className="hover:text-[#4834D4] transition-colors text-left flex items-center gap-1">
                  <span>↳ Toy Safety Standards (ASTM/EN71)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-[#4834D4] transition-colors text-left flex items-center gap-1">
                  <span>↳ Free Board Game Parts</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-[#4834D4] transition-colors text-left flex items-center gap-1">
                  <span>↳ Shipping & Warranty</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-[#4834D4] transition-colors text-left flex items-center gap-1">
                  <span>↳ Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('safety')} className="hover:text-[#4834D4] transition-colors text-left flex items-center gap-1">
                  <span>↳ Accessibility Standards</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Values */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-black text-sm uppercase tracking-wider bg-[#EF476F] text-white px-2 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]">
              Play Community
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <button onClick={() => handleNav('community')} className="hover:text-[#EF476F] transition-colors text-left flex items-center gap-1">
                  <span>↳ Builder Creations & Mods</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenPlaytestModal} className="hover:text-[#EF476F] transition-colors text-left flex items-center gap-1">
                  <span>↳ Playtest Program Signups</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('community')} className="hover:text-[#EF476F] transition-colors text-left flex items-center gap-1">
                  <span>↳ Community Guidelines</span>
                </button>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#EF476F] transition-colors inline-flex items-center gap-1 text-black font-bold"
                >
                  <span>Official Discord Server</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Ticker Bar */}
        <div className="pt-8 mt-10 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-800">
          <div>
            © {new Date().getFullYear()} OSUM Games Inc. Registered domain: <span className="font-mono text-black underline">osumgames.com</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('safety')} className="hover:underline">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('safety')} className="hover:underline">
              Terms of Service
            </button>
            <button onClick={() => handleNav('safety')} className="hover:underline">
              Cookie Preferences
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
