import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowLeft, Gamepad2, Users } from 'lucide-react';
import { Product } from '../../types';

interface HeaderProps {
  currentDomain: string;
  activeView: string;
  onNavigate: (view: string) => void;
  onNavigateDomain: (domain: string) => void;
  activeProduct?: Product;
  onOpenPlaytestModal: () => void;
  onOpenPreorderModal: (product?: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDomain,
  activeView,
  onNavigate,
  onNavigateDomain,
  activeProduct,
  onOpenPlaytestModal,
  onOpenPreorderModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isCorporate = currentDomain === 'osumgames.com';

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'What We Make' },
    { id: 'story', label: 'Our Story' },
    { id: 'community', label: 'Community' },
    { id: 'news', label: "What's Happening" },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductAction = () => {
    if (!activeProduct) return;
    if (activeProduct.availability === 'PREORDER') {
      onOpenPreorderModal(activeProduct);
    } else if (activeProduct.readiness === 'DEVELOPMENT') {
      onOpenPlaytestModal();
    } else if (activeProduct.primary_cta.actionType === 'custom_builder') {
      const el = document.getElementById('interactive-sandbox');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else onOpenPreorderModal(activeProduct);
    } else {
      onOpenPreorderModal(activeProduct);
    }
  };

  return (
    <header className="sticky top-[0px] z-40 bg-white border-b-4 border-black text-black transition-colors shadow-[0_4px_0_0_#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* ZONE 1: BRAND TITLE (One line, single text element / wordmark) */}
        <div className="flex items-center gap-3 shrink-0">
          {isCorporate ? (
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="w-9 h-9 bg-black text-[#FFDA00] flex items-center justify-center font-black font-display text-xl tracking-tighter border-2 border-black shadow-[2px_2px_0_0_#000] group-hover:rotate-6 transition-transform">
                O!
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-black group-hover:text-black transition-colors whitespace-nowrap uppercase">
                OSUM GAMES
              </span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigateDomain('osumgames.com')}
                className="flex items-center gap-1.5 text-xs font-black uppercase text-black bg-[#FFDA00] hover:bg-black hover:text-[#FFDA00] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] transition-colors whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>OSUM Hub</span>
              </button>
              <span className="text-black font-black">/</span>
              <span 
                className="font-display font-black text-lg sm:text-xl tracking-tight text-black uppercase whitespace-nowrap px-2 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000]"
                style={{ backgroundColor: activeProduct?.theme.primaryColor || '#FFDA00' }}
              >
                {activeProduct?.name || 'Product World'}
              </span>
            </div>
          )}
        </div>

        {/* ZONE 2: NAV LINKS (4-6 links, single line, 1-2 words) */}
        {isCorporate ? (
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border-2 ${
                    isActive
                      ? 'bg-black text-[#FFDA00] border-black shadow-[2px_2px_0_0_#000] -translate-y-0.5'
                      : 'bg-transparent text-black border-transparent hover:border-black hover:bg-[#FFDA00]/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <a
              href="#what-is-it"
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black whitespace-nowrap shrink-0 transition-colors"
            >
              Overview
            </a>
            <a
              href="#the-experience"
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black whitespace-nowrap shrink-0 transition-colors"
            >
              Experience
            </a>
            <a
              href="#the-world"
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black whitespace-nowrap shrink-0 transition-colors"
            >
              {activeProduct?.world_section_title || 'World'}
            </a>
            {activeProduct?.interactive_type && (
              <a
                href="#interactive-sandbox"
                className="px-3 py-1.5 text-xs font-black uppercase tracking-wider bg-[#00A896] text-black border-2 border-black shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-[#00A896] whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Play Sandbox</span>
              </a>
            )}
            <a
              href="#media"
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black whitespace-nowrap shrink-0 transition-colors"
            >
              Media
            </a>
          </nav>
        )}

        {/* ZONE 3: PRIMARY ACTIONS (1-2 primary actions) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {isCorporate ? (
            <>
              <button
                onClick={() => handleNavClick('catalog')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black uppercase text-black bg-white hover:bg-black hover:text-white border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap shrink-0"
              >
                <Gamepad2 className="w-4 h-4 text-[#FF6B35]" />
                <span>Explore Worlds</span>
              </button>

              <button
                onClick={onOpenPlaytestModal}
                className="px-4 py-2 text-xs font-black uppercase text-black bg-[#FFDA00] hover:bg-black hover:text-[#FFDA00] border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap shrink-0 rotate-[-1deg] hover:rotate-0"
              >
                Playtest Lab
              </button>
            </>
          ) : (
            <button
              onClick={handleProductAction}
              className="px-4 py-2 text-xs font-black uppercase text-black hover:bg-black hover:text-white border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
              style={{ backgroundColor: activeProduct?.theme.primaryColor || '#FFDA00' }}
            >
              <span>{activeProduct?.primary_cta.label || 'Get Yours'}</span>
            </button>
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black bg-white hover:bg-black hover:text-white border-2 border-black shadow-[2px_2px_0_0_#000] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFDA00] border-t-2 border-b-4 border-black px-4 py-4 space-y-2 shadow-[0_6px_0_0_#000] animate-in fade-in duration-150">
          {isCorporate ? (
            navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 text-xs font-black uppercase tracking-wider border-2 border-black ${
                  activeView === link.id
                    ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))
          ) : (
            <>
              <a
                href="#what-is-it"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-black uppercase tracking-wider bg-white border-2 border-black text-black hover:bg-black hover:text-white"
              >
                Overview
              </a>
              <a
                href="#the-experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-black uppercase tracking-wider bg-white border-2 border-black text-black hover:bg-black hover:text-white"
              >
                The Experience
              </a>
              <a
                href="#the-world"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-black uppercase tracking-wider bg-white border-2 border-black text-black hover:bg-black hover:text-white"
              >
                {activeProduct?.world_section_title}
              </a>
              <a
                href="#media"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-black uppercase tracking-wider bg-white border-2 border-black text-black hover:bg-black hover:text-white"
              >
                Media & Specs
              </a>
            </>
          )}

          <div className="pt-3 border-t-2 border-black flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPlaytestModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-black uppercase tracking-wider text-white bg-black border-2 border-black shadow-[3px_3px_0_0_#000]"
            >
              Join Playtest Lab
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
