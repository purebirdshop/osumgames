import React, { useState } from 'react';
import { Globe, RefreshCw, ChevronDown, Database, Sparkles } from 'lucide-react';
import { useSanityData } from '../context/SanityDataContext';

interface DomainSimulatorBarProps {
  currentDomain: string;
  onNavigateDomain: (domain: string, redirectedFrom?: string) => void;
  redirectNotice: string | null;
  onOpenSanityCmsModal?: () => void;
}

export const DomainSimulatorBar: React.FC<DomainSimulatorBarProps> = ({
  currentDomain,
  onNavigateDomain,
  redirectNotice,
  onOpenSanityCmsModal,
}) => {
  const { products, getProductByDomain, getProductByRedirect, isSanityConnected } = useSanityData();
  const [inputVal, setInputVal] = useState(currentDomain);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  React.useEffect(() => {
    setInputVal(currentDomain);
  }, [currentDomain]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDomain = inputVal.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');
    
    // Check if it matches any redirect domains in Sanity dataset
    const redirectProduct = getProductByRedirect(cleanDomain);
    if (redirectProduct) {
      onNavigateDomain(redirectProduct.canonical_domain, cleanDomain);
      return;
    }

    const directProduct = getProductByDomain(cleanDomain);
    if (directProduct) {
      onNavigateDomain(directProduct.canonical_domain);
      return;
    }

    if (cleanDomain === 'osumgames.com' || cleanDomain === 'www.osumgames.com' || cleanDomain === '') {
      onNavigateDomain('osumgames.com');
      return;
    }

    onNavigateDomain(cleanDomain);
  };

  const isMainHub = currentDomain === 'osumgames.com';

  if (isCollapsed) {
    return (
      <div className="bg-black border-b-2 border-black text-[#FFDA00] px-4 py-1.5 flex items-center justify-between text-xs z-50 sticky top-0 font-mono">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#FFDA00]" />
          <span>Active Domain: <strong className="text-white bg-slate-900 px-1.5 py-0.5 border border-[#FFDA00]">{currentDomain}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          {onOpenSanityCmsModal && (
            <button
              onClick={onOpenSanityCmsModal}
              className="text-[10px] font-black uppercase bg-[#10b981] text-black px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#fff]"
            >
              Sanity CMS Hub
            </button>
          )}
          <button
            onClick={() => setIsCollapsed(false)}
            className="text-[10px] font-black uppercase text-black bg-[#FFDA00] hover:bg-white px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#fff] transition-colors"
          >
            Expand Subdomain Switcher ▾
          </button>
        </div>
      </div>
    );
  }

  return (
    <aside aria-label="Domain Simulator" className="bg-black border-b-4 border-black text-white text-xs z-50 sticky top-0 shadow-[0_4px_0_0_#000] font-mono">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Domain Simulation Control */}
        <div className="flex items-center gap-2 w-full md:w-auto flex-1 max-w-xl">
          <div className="flex items-center gap-1.5 shrink-0 bg-[#FFDA00] text-black px-2 py-0.5 border-2 border-white text-[10px] font-black uppercase">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <span className="hidden sm:inline">CMS Subdomain Router:</span>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 relative flex items-center">
            <div className="absolute left-2.5 text-[#FFDA00] pointer-events-none flex items-center">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="e.g. remoro.osumgames.com or ancient.osumgames.com"
              className="w-full pl-8 pr-14 py-1 bg-slate-900 border-2 border-[#FFDA00] focus:bg-black text-xs text-[#FFDA00] font-mono tracking-tight outline-none focus:ring-1 focus:ring-white transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1 px-2.5 py-0.5 bg-[#FFDA00] text-black font-black uppercase hover:bg-white hover:text-black border border-black text-[10px] transition-colors"
            >
              GO
            </button>
          </form>
        </div>

        {/* Redirect Notice Indicator */}
        {redirectNotice && (
          <div className="flex items-center gap-1.5 bg-[#FF6B35] text-black border-2 border-white text-[11px] font-black uppercase px-3 py-0.5 animate-bounce shrink-0 shadow-[2px_2px_0_0_#fff]">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>{redirectNotice}</span>
          </div>
        )}

        {/* Quick Domain Switcher Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          
          {/* Sanity Studio CMS Manager Button */}
          {onOpenSanityCmsModal && (
            <button
              onClick={onOpenSanityCmsModal}
              className="px-2.5 py-1 bg-[#10b981] hover:bg-white text-black font-black uppercase text-[10px] flex items-center gap-1 border-2 border-white shadow-[2px_2px_0_0_#fff] shrink-0 transition-transform active:translate-x-0.5 active:translate-y-0.5"
              title="Open Sanity Studio CMS & Subdomain Architecture Hub"
            >
              <Database className="w-3 h-3" />
              <span>Sanity CMS Hub</span>
            </button>
          )}

          <button
            onClick={() => onNavigateDomain('osumgames.com')}
            className={`px-2.5 py-1 text-[11px] font-black uppercase whitespace-nowrap transition-all flex items-center gap-1 shrink-0 border-2 ${
              isMainHub
                ? 'bg-[#FFDA00] text-black border-white shadow-[2px_2px_0_0_#fff]'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-white hover:text-white'
            }`}
          >
            <span>OSUM Hub</span>
          </button>

          {products.slice(0, 4).map((p) => {
            const isActive = currentDomain === p.canonical_domain;
            return (
              <button
                key={p.id}
                onClick={() => onNavigateDomain(p.canonical_domain)}
                className={`px-2.5 py-1 text-[11px] font-black uppercase whitespace-nowrap transition-all flex items-center gap-1 shrink-0 border-2 ${
                  isActive
                    ? 'text-black border-white shadow-[2px_2px_0_0_#fff]'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-white hover:text-white'
                }`}
                style={isActive ? { backgroundColor: p.theme?.primaryColor || '#FFDA00' } : {}}
              >
                <span>{p.name}</span>
                <span className="text-[9px] opacity-80 font-mono">.{p.slug}</span>
              </button>
            );
          })}

          {/* Test Redirect Dropdown */}
          <div className="relative shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-2 py-1 bg-white text-black hover:bg-[#FFDA00] font-black uppercase text-[10px] flex items-center gap-1 border-2 border-black shadow-[2px_2px_0_0_#fff]"
            >
              <span>Test Redirects</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {isMenuOpen && (
              <div 
                className="absolute right-0 mt-1 w-64 bg-white text-black border-4 border-black shadow-[6px_6px_0_0_#000] p-2 z-50 animate-in fade-in duration-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-[10px] font-mono font-black uppercase bg-[#FFDA00] text-black px-2 py-1 border-2 border-black mb-1.5">
                  CMS Subdomain Aliases:
                </div>
                <div className="py-1 space-y-1 max-h-60 overflow-y-auto">
                  {products.flatMap(p => 
                    (p.redirect_domains || []).map(rd => ({
                      redirect: rd,
                      canonical: p.canonical_domain,
                      name: p.name,
                    }))
                  ).map((item, idx) => (
                    <button
                      key={`${item.redirect}-${idx}`}
                      onClick={() => onNavigateDomain(item.canonical, item.redirect)}
                      className="w-full text-left px-2 py-1.5 border border-black hover:bg-[#FFDA00] hover:text-black text-xs flex flex-col transition-colors"
                    >
                      <span className="font-bold font-mono">{item.redirect}</span>
                      <span className="text-[10px] text-slate-600">↳ redirects to {item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(true)}
            className="text-slate-400 hover:text-white p-1 text-xs font-black"
            title="Minimize bar"
          >
            ✕
          </button>
        </div>

      </div>
    </aside>
  );
};
