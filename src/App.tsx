import React, { useState, useEffect } from 'react';
import { SanityDataProvider, useSanityData } from './context/SanityDataContext';
import { DomainSimulatorBar } from './components/DomainSimulatorBar';
import { SanityCmsDrawer } from './components/SanityCmsDrawer';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Modal } from './components/common/Modal';
import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { ProductWorldView } from './views/ProductWorldView';
import { OurStoryView } from './views/OurStoryView';
import { TeamView } from './views/TeamView';
import { CommunityView } from './views/CommunityView';
import { WhatsHappeningView } from './views/WhatsHappeningView';
import { SupportSafetyView } from './views/SupportSafetyView';
import { OsumOpossum, OpossumState } from './components/mascot/OsumOpossum';
import { Product } from './types';
import { CheckCircle2, Sparkles, Send, ShoppingBag, ShieldCheck, Database } from 'lucide-react';
import confetti from 'canvas-confetti';

function AppContent() {
  const { products, getProductByDomain, getProductByRedirect } = useSanityData();
  const [currentDomain, setCurrentDomain] = useState<string>('osumgames.com');
  const [activeView, setActiveView] = useState<string>('home');
  const [redirectNotice, setRedirectNotice] = useState<string | null>(null);

  // Modals state
  const [isPlaytestModalOpen, setIsPlaytestModalOpen] = useState(false);
  const [isPreorderModalOpen, setIsPreorderModalOpen] = useState(false);
  const [isSanityHubOpen, setIsSanityHubOpen] = useState(false);
  const [preorderTargetProduct, setPreorderTargetProduct] = useState<Product | null>(null);

  // Playtest form state
  const [playtestProduct, setPlaytestProduct] = useState('anancientresound');
  const [playtestEmail, setPlaytestEmail] = useState('');
  const [playtestHardware, setPlaytestHardware] = useState('PC (Steam) + Studio Headphones');
  const [playtestSubmitted, setPlaytestSubmitted] = useState(false);

  // Pre-order form state
  const [preorderEmail, setPreorderEmail] = useState('');
  const [preorderQty, setPreorderQty] = useState(1);
  const [preorderSubmitted, setPreorderSubmitted] = useState(false);

  // Mascot interactive state
  const [mascotState, setMascotState] = useState<OpossumState>('default');
  const [mascotBubble, setMascotBubble] = useState<string | undefined>(undefined);

  // Auto-detect production hostname on initial mount if on custom subdomain
  useEffect(() => {
    try {
      const hostname = window.location.hostname.toLowerCase();
      if (hostname && hostname !== 'localhost' && !hostname.includes('run.app') && !hostname.includes('127.0.0.1')) {
        const matchingProduct = getProductByDomain(hostname);
        if (matchingProduct) {
          setCurrentDomain(matchingProduct.canonical_domain);
          return;
        }
        const redirectProd = getProductByRedirect(hostname);
        if (redirectProd) {
          setCurrentDomain(redirectProd.canonical_domain);
          setRedirectNotice(`Redirected: ${hostname} ➔ ${redirectProd.canonical_domain}`);
          return;
        }
      }
    } catch (e) {}
  }, [products]);

  // Domain navigation handler
  const handleNavigateDomain = (domain: string, redirectedFrom?: string) => {
    // Check if domain is a redirect alias configured in Sanity CMS
    const redirectProduct = getProductByRedirect(domain);
    if (redirectProduct) {
      setCurrentDomain(redirectProduct.canonical_domain);
      setRedirectNotice(`Redirected: ${domain} ➔ ${redirectProduct.canonical_domain}`);
      setTimeout(() => setRedirectNotice(null), 4500);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (redirectedFrom) {
      setRedirectNotice(`Redirected: ${redirectedFrom} ➔ ${domain}`);
      setTimeout(() => setRedirectNotice(null), 4500);
    } else {
      setRedirectNotice(null);
    }

    setCurrentDomain(domain);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    handleNavigateDomain(product.canonical_domain);
  };

  const handleOpenPreorder = (product?: Product) => {
    const prod = product || activeProduct || products[0];
    setPreorderTargetProduct(prod);
    setPreorderSubmitted(false);
    setIsPreorderModalOpen(true);
  };

  const handleOpenPlaytest = () => {
    setPlaytestSubmitted(false);
    setIsPlaytestModalOpen(true);
  };

  const handlePlaytestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playtestEmail) return;
    setPlaytestSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handlePreorderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preorderEmail) return;
    setPreorderSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const cycleMascotState = () => {
    const states: OpossumState[] = ['waving', 'celebrating', 'curious', 'playing_dead', 'default'];
    const nextIdx = (states.indexOf(mascotState) + 1) % states.length;
    const nextState = states[nextIdx];
    setMascotState(nextState);

    if (nextState === 'playing_dead') {
      setMascotBubble("ZZZ... (Playing dead! Click to wake)");
    } else if (nextState === 'celebrating') {
      setMascotBubble("Don't play dead. Play Osum!");
      try {
        confetti({ particleCount: 20, spread: 40, origin: { x: 0.9, y: 0.9 } });
      } catch (e) {}
    } else if (nextState === 'waving') {
      setMascotBubble("Hi! Welcome to OSUM Games!");
    } else {
      setMascotBubble(undefined);
    }
  };

  // Determine current active product if on a dedicated subdomain
  const activeProduct = getProductByDomain(currentDomain);
  const isDedicatedProductSite = !!activeProduct;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFDA00] text-black font-sans selection:bg-black selection:text-[#FFDA00]">
      {/* 1. Subdomain Router & Simulator Bar */}
      <DomainSimulatorBar
        currentDomain={currentDomain}
        onNavigateDomain={handleNavigateDomain}
        redirectNotice={redirectNotice}
        onOpenSanityCmsModal={() => setIsSanityHubOpen(true)}
      />

      {/* 2. Primary Navigation Header (Compliant with 3-Zone Contract) */}
      <Header
        currentDomain={currentDomain}
        activeView={activeView}
        onNavigate={setActiveView}
        onNavigateDomain={handleNavigateDomain}
        activeProduct={activeProduct}
        onOpenPlaytestModal={handleOpenPlaytest}
        onOpenPreorderModal={handleOpenPreorder}
      />

      {/* 3. Main Body View Routing */}
      <main className="flex-1">
        {isDedicatedProductSite ? (
          <ProductWorldView
            product={activeProduct}
            onNavigateDomain={handleNavigateDomain}
            onOpenPlaytestModal={handleOpenPlaytest}
            onOpenPreorderModal={handleOpenPreorder}
          />
        ) : (
          <>
            {activeView === 'home' && (
              <HomeView
                onNavigate={setActiveView}
                onNavigateDomain={handleNavigateDomain}
                onSelectProduct={handleSelectProduct}
                onOpenPlaytestModal={handleOpenPlaytest}
                onOpenPreorderModal={handleOpenPreorder}
              />
            )}
            {activeView === 'catalog' && (
              <CatalogView
                onNavigateDomain={handleNavigateDomain}
                onOpenPreorderModal={handleOpenPreorder}
              />
            )}
            {activeView === 'story' && (
              <OurStoryView
                onNavigate={setActiveView}
                onNavigateDomain={handleNavigateDomain}
              />
            )}
            {activeView === 'team' && (
              <TeamView />
            )}
            {activeView === 'community' && (
              <CommunityView
                onOpenPlaytestModal={handleOpenPlaytest}
                onNavigateDomain={handleNavigateDomain}
              />
            )}
            {activeView === 'news' && (
              <WhatsHappeningView
                onNavigateDomain={handleNavigateDomain}
                onOpenPlaytestModal={handleOpenPlaytest}
              />
            )}
            {(activeView === 'support' || activeView === 'safety' || activeView === 'press') && (
              <SupportSafetyView />
            )}
          </>
        )}
      </main>

      {/* 4. Global Footer */}
      <Footer
        onNavigate={setActiveView}
        onNavigateDomain={handleNavigateDomain}
        onOpenPlaytestModal={handleOpenPlaytest}
      />

      {/* 5. Floating Interactive Mascot Buddy & CMS Quick Trigger */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsSanityHubOpen(true)}
          className="bg-black hover:bg-white text-[#FFDA00] hover:text-black text-[10px] font-mono font-black uppercase px-2.5 py-1 border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center gap-1.5 transition-transform active:scale-95"
        >
          <Database className="w-3 h-3 text-[#10b981]" />
          <span>Sanity CMS Hub</span>
        </button>

        <div className="bg-white p-2 border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-2deg] hover:rotate-0 transition-transform">
          <OsumOpossum
            state={mascotState}
            size="md"
            interactive
            speechBubble={mascotBubble}
            onClick={cycleMascotState}
          />
        </div>
      </div>

      {/* Sanity CMS & Subdomain Hub Modal */}
      <SanityCmsDrawer
        isOpen={isSanityHubOpen}
        onClose={() => setIsSanityHubOpen(false)}
        onNavigateDomain={handleNavigateDomain}
      />

      {/* Playtest Modal */}
      <Modal
        isOpen={isPlaytestModalOpen}
        onClose={() => setIsPlaytestModalOpen(false)}
        title="Apply for OSUM Playtest Lab"
        subtitle="Join our closed beta cohort for unreleased physical & digital prototypes."
        maxWidth="md"
      >
        {playtestSubmitted ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto" />
            <h4 className="font-display font-black text-xl text-black uppercase">Cohort Application Received!</h4>
            <p className="text-xs sm:text-sm font-medium text-black max-w-sm mx-auto">
              We've logged your credentials. When the next testing wave opens for <strong>{playtestProduct}</strong>, you'll receive an encrypted test package or Steam key invitation at <strong>{playtestEmail}</strong>.
            </p>
            <button
              onClick={() => setIsPlaytestModalOpen(false)}
              className="mt-4 px-6 py-2.5 bg-black text-[#FFDA00] font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000]"
            >
              Back to Studio
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaytestSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                1. Select Prototype / Project
              </label>
              <select
                value={playtestProduct}
                onChange={(e) => setPlaytestProduct(e.target.value)}
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-mono font-bold outline-none shadow-[2px_2px_0_0_#000]"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.slug}>
                    {p.name} ({p.tagline})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                2. Your Tester Email (NDA agreement will be sent here)
              </label>
              <input
                type="email"
                required
                value={playtestEmail}
                onChange={(e) => setPlaytestEmail(e.target.value)}
                placeholder="developer.player@gmail.com"
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-bold outline-none shadow-[2px_2px_0_0_#000]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                3. Your Setup / Play Environment
              </label>
              <input
                type="text"
                value={playtestHardware}
                onChange={(e) => setPlaytestHardware(e.target.value)}
                placeholder="e.g. Steam Deck, 4-person board game group, 3D printer lab"
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-bold outline-none shadow-[2px_2px_0_0_#000]"
              />
            </div>

            <div className="p-3 bg-[#FFDA00]/30 border-2 border-black text-[11px] font-bold text-black flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <span>All OSUM playtests provide early prototype access, free launch copies upon release, and custom enamel playtester badges.</span>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsPlaytestModalOpen(false)}
                className="px-4 py-2.5 text-xs font-black uppercase text-black hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-black hover:bg-[#FFDA00] text-[#FFDA00] hover:text-black font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Application</span>
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Pre-Order / Waitlist Modal */}
      <Modal
        isOpen={isPreorderModalOpen}
        onClose={() => setIsPreorderModalOpen(false)}
        title={preorderTargetProduct ? `Reserve: ${preorderTargetProduct.name}` : 'Reserve Creation'}
        subtitle={preorderTargetProduct?.tagline || 'Reserve yours directly from the workshop.'}
        maxWidth="md"
      >
        {preorderSubmitted ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto" />
            <h4 className="font-display font-black text-xl text-black uppercase">Reservation Confirmed!</h4>
            <p className="text-xs sm:text-sm font-medium text-black max-w-sm mx-auto">
              Your spot in the workshop assembly queue for <strong>{preorderTargetProduct?.name}</strong> has been secured. Confirmation & order tracking details sent to <strong>{preorderEmail}</strong>.
            </p>
            <button
              onClick={() => setIsPreorderModalOpen(false)}
              className="mt-4 px-6 py-2.5 bg-black text-[#FFDA00] font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000]"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <form onSubmit={handlePreorderSubmit} className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-100 border-2 border-black">
              {preorderTargetProduct && (
                <img
                  src={preorderTargetProduct.hero_image}
                  alt={preorderTargetProduct.name}
                  className="w-16 h-12 object-cover border border-black"
                />
              )}
              <div>
                <h5 className="font-display font-black text-sm text-black uppercase">{preorderTargetProduct?.name}</h5>
                <span className="text-xs font-mono font-bold text-slate-700">Estimated Delivery: {preorderTargetProduct?.launch_date}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                required
                value={preorderEmail}
                onChange={(e) => setPreorderEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-bold outline-none shadow-[2px_2px_0_0_#000]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                Quantity Units
              </label>
              <select
                value={preorderQty}
                onChange={(e) => setPreorderQty(Number(e.target.value))}
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-mono font-bold outline-none shadow-[2px_2px_0_0_#000]"
              >
                <option value={1}>1 Unit (Collector Tier)</option>
                <option value={2}>2 Units (One for you, one for a friend)</option>
                <option value={4}>4 Units (Classroom / Game Club Bundle)</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsPreorderModalOpen(false)}
                className="px-4 py-2.5 text-xs font-black uppercase text-black hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-black hover:bg-[#FFDA00] text-[#FFDA00] hover:text-black font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Lock In Reservation</span>
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default function App() {
  return (
    <SanityDataProvider>
      <AppContent />
    </SanityDataProvider>
  );
}
