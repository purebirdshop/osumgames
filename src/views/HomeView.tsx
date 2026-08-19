import React from 'react';
import { useSanityData } from '../context/SanityDataContext';
import { CATEGORIES } from '../data/products';
import { Product } from '../types';
import { ReadinessBadge } from '../components/common/ReadinessBadge';
import { AvailabilityBadge } from '../components/common/AvailabilityBadge';
import { OsumOpossum } from '../components/mascot/OsumOpossum';
import { 
  Gamepad2, 
  Cpu, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Calendar, 
  ChevronRight, 
  Flame,
  ShieldCheck,
  Play,
  Heart
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onNavigateDomain: (domain: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenPlaytestModal: () => void;
  onOpenPreorderModal: (product?: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onNavigateDomain,
  onSelectProduct,
  onOpenPlaytestModal,
  onOpenPreorderModal,
}) => {
  const { products, news: NEWS_POSTS, community: COMMUNITY_SUBMISSIONS } = useSanityData();
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="space-y-20 py-4">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Hero Container - Creative Playground Brutalist Card */}
          <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-6 sm:p-10 md:p-12 relative overflow-hidden">
            
            {/* Top Sticker Banner */}
            <div className="absolute top-4 right-4 hidden sm:inline-flex items-center gap-2 bg-[#FF6B35] text-black font-black uppercase text-xs px-3 py-1.5 border-2 border-black shadow-[3px_3px_0_0_#000] rotate-2 hover:rotate-0 transition-transform">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>INDEPENDENT PLAYGROUND</span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Hero Left Content */}
              <div className="lg:max-w-2xl text-left space-y-6">
                
                {/* Brand Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFDA00] text-black border-2 border-black shadow-[3px_3px_0_0_#000] text-xs font-mono font-black uppercase -rotate-1">
                  <span>★ FUN · EXPLORATION · CREATIVITY ★</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.02] uppercase">
                  Come see what we've been making. <br />
                  <span className="bg-[#FFDA00] px-3 py-1 border-3 border-black shadow-[4px_4px_0_0_#000] inline-block mt-2 rotate-[-1deg]">
                    Want to play?
                  </span>
                </h1>

                {/* Body Manifesto */}
                <p className="text-base sm:text-lg text-black font-medium leading-relaxed max-w-xl">
                  <strong>OSUM Games</strong> creates video games, tactile tabletop strategy games, and modular robotics designed to spark wonder, invention, and genuine curiosity.
                </p>

                {/* Dual Primary Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('catalog')}
                    className="px-6 py-4 bg-black text-[#FFDA00] hover:bg-[#FFDA00] hover:text-black font-display font-black text-sm uppercase tracking-wider border-3 border-black shadow-[5px_5px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2.5"
                  >
                    <span>Explore What We Make</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenPlaytestModal}
                    className="px-6 py-4 bg-[#00A896] hover:bg-black hover:text-[#00A896] text-black font-display font-black text-sm uppercase tracking-wider border-3 border-black shadow-[5px_5px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    <span>Join Playtest Lab</span>
                  </button>
                </div>

                {/* Quick Subdomain Switcher Hint */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-black">
                  <span className="bg-slate-100 px-2 py-1 border border-black">Subdomain Spaces:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <button 
                      onClick={() => onNavigateDomain('remoro.osumgames.com')}
                      className="bg-[#10b981] hover:bg-black hover:text-[#10b981] text-black px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#000]"
                    >
                      remoro.
                    </button>
                    <button 
                      onClick={() => onNavigateDomain('anancientresound.osumgames.com')}
                      className="bg-[#38bdf8] hover:bg-black hover:text-[#38bdf8] text-black px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#000]"
                    >
                      ancient.
                    </button>
                    <button 
                      onClick={() => onNavigateDomain('vanquished.osumgames.com')}
                      className="bg-[#EF476F] hover:bg-black hover:text-[#EF476F] text-black px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#000]"
                    >
                      vanquished.
                    </button>
                    <button 
                      onClick={() => onNavigateDomain('thekingsorder.osumgames.com')}
                      className="bg-[#FFDA00] hover:bg-black hover:text-[#FFDA00] text-black px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#000]"
                    >
                      kingsorder.
                    </button>
                  </div>
                </div>

              </div>

              {/* Hero Right Visual: Mascot & Multi-World Showcase Portal */}
              <div className="w-full lg:w-auto flex-1 max-w-lg relative">
                <div className="bg-[#FFDA00] border-4 border-black shadow-[8px_8px_0_0_#000] p-6 space-y-4">
                  
                  {/* Header card with Mascot */}
                  <div className="flex items-center justify-between pb-4 border-b-3 border-black bg-white p-3 border-2 shadow-[3px_3px_0_0_#000]">
                    <div className="flex items-center gap-3">
                      <OsumOpossum state="waving" size="md" />
                      <div>
                        <div className="text-sm font-black font-display text-black uppercase">The Osum Universe</div>
                        <div className="text-[11px] text-slate-700 font-mono font-bold">4 Dedicated Product Worlds</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase font-mono px-2 py-1 bg-black text-[#FFDA00] border border-black">
                      LIVE PORTAL
                    </span>
                  </div>

                  {/* 4 Mini Product World Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => onNavigateDomain(product.canonical_domain)}
                        className="group p-3.5 bg-white hover:bg-black hover:text-white border-3 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span 
                              className="w-3 h-3 border border-black" 
                              style={{ backgroundColor: product.theme.primaryColor }} 
                            />
                            <span className="text-[9px] font-mono font-bold text-slate-600 group-hover:text-slate-300">
                              {product.slug}.osumgames
                            </span>
                          </div>
                          <h4 className="font-display text-sm font-black text-black group-hover:text-[#FFDA00] uppercase transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-[11px] font-medium text-slate-700 group-hover:text-slate-200 line-clamp-2 mt-1">
                            {product.tagline}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t-2 border-black group-hover:border-white/30 flex items-center justify-between text-[11px]">
                          <span className="font-mono uppercase font-bold text-[9px] text-slate-500 group-hover:text-slate-400">
                            {product.product_type.replace('_', ' ')}
                          </span>
                          <span className="font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>ENTER</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mascot Signature Tagline */}
                  <div className="pt-2 text-center text-xs font-black uppercase tracking-wider text-black bg-white p-2 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    "Don't play dead. Play Osum."
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED WORLDS DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-black text-[#FFDA00] px-2.5 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000] mb-2">
              Dedicated Subdomain Experiences
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
              Featured Worlds
            </h2>
          </div>
          <p className="text-sm font-bold text-black max-w-md bg-white p-3 border-2 border-black shadow-[3px_3px_0_0_#000]">
            Each product has its own dedicated website, canonical domain, visual design language, and interactive sandbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top color bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-3 border-b-2 border-black"
                style={{ backgroundColor: product.theme.primaryColor }}
              />

              <div>
                {/* Domain & Status badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black px-2.5 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0_0_#000]">
                      {product.canonical_domain}
                    </span>
                    <ReadinessBadge readiness={product.readiness} size="sm" />
                  </div>
                  <AvailabilityBadge availability={product.availability} size="sm" />
                </div>

                {/* Title and Tagline */}
                <h3 
                  className="font-display text-2xl sm:text-4xl font-black text-black group-hover:text-[#4834D4] transition-colors tracking-tight uppercase"
                >
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-black uppercase text-black bg-[#FFDA00] px-2 py-0.5 border-2 border-black inline-block mt-2 shadow-[2px_2px_0_0_#000]">
                  {product.tagline}
                </p>

                {/* Product Image with Brutalist Frame */}
                <div className="my-5 border-3 border-black shadow-[4px_4px_0_0_#000] aspect-video bg-black relative overflow-hidden">
                  <img
                    src={product.hero_image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-black text-white text-[11px] font-mono font-bold px-2 py-0.5 border border-white">
                    {product.hero_tag}
                  </div>
                </div>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
                  {product.short_description}
                </p>

                {/* Verbs Highlight */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs font-mono font-bold">
                  <span className="bg-black text-white px-2 py-0.5 border border-black">Core Loop:</span>
                  {product.verbs.map((v) => (
                    <span
                      key={v.verb}
                      className="px-2 py-0.5 bg-[#FFDA00] text-black border border-black"
                    >
                      {v.verb}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t-3 border-black flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onNavigateDomain(product.canonical_domain)}
                  className="px-5 py-3 bg-black hover:bg-[#FFDA00] text-white hover:text-black font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-2"
                >
                  <span>Enter {product.name} World</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenPreorderModal(product)}
                  className="px-4 py-3 text-xs font-black uppercase text-black bg-white hover:bg-slate-100 border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  {product.primary_cta.label}
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT WE MAKE (Category Taxonomy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-[#FFDA00] px-3 py-1 border-2 border-black inline-block shadow-[3px_3px_0_0_#000] mb-2">
              Creative Catalog
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
              What We Make
            </h2>
            <p className="text-sm font-bold text-black mt-2">
              We reject rigid boundaries. Video games bring narrative depth to our toys, while tabletop woodworking brings tactile satisfaction to our games.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onNavigate('catalog')}
                className="bg-[#FFDA00]/20 hover:bg-[#FFDA00] border-3 border-black shadow-[5px_5px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-1 hover:translate-y-1 p-6 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-12 h-12 border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform"
                    style={{ backgroundColor: cat.accentColor, color: '#000000' }}
                  >
                    {cat.id === 'video_game' && <Gamepad2 className="w-6 h-6" />}
                    {cat.id === 'tabletop' && <Crown className="w-6 h-6" />}
                    {cat.id === 'toy' && <Cpu className="w-6 h-6" />}
                    {cat.id === 'interactive' && <Sparkles className="w-6 h-6" />}
                  </div>

                  <h3 className="font-display font-black text-lg text-black uppercase mb-2">
                    {cat.label}
                  </h3>
                  <p className="text-xs font-medium text-black leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase text-black">
                  <span>Browse Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT'S HAPPENING (News & Dev Activity) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-black text-white px-2.5 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000] mb-2">
              Studio Activity & Devlogs
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
              What's Happening
            </h2>
          </div>
          <button
            onClick={() => onNavigate('news')}
            className="text-xs font-black uppercase bg-white hover:bg-black hover:text-white text-black px-3 py-2 border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center gap-1.5 transition-all self-start sm:self-auto"
          >
            <span>View All Announcements</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_POSTS.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate('news')}
              className="bg-white border-3 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer flex flex-col group overflow-hidden"
            >
              <div className="aspect-video bg-black border-b-3 border-black overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono font-black uppercase px-2 py-0.5 bg-[#FFDA00] text-black border-2 border-black shadow-[2px_2px_0_0_#000]">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-slate-800 font-mono font-bold mb-1.5 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-black text-base text-black group-hover:text-[#4834D4] uppercase transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-800 mt-2 line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-black flex flex-wrap items-center gap-1.5 text-[10px] font-mono font-bold text-black">
                  {post.tags.map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-[#FFDA00] border border-black">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMMUNITY CREATIONS & MODS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#4834D4] border-4 border-black shadow-[10px_10px_0_0_#000] p-8 sm:p-12 text-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-mono font-black uppercase tracking-widest bg-[#FFDA00] text-black px-2.5 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_#000] mb-2">
                Builder Ecosystem
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Community Creations & Mods
              </h2>
              <p className="text-xs sm:text-sm font-medium text-white/90 mt-1 max-w-xl">
                From autonomous ReMoro vacuum carts to hand-gilded King's Order meeples, see what our players are inventing.
              </p>
            </div>
            <button
              onClick={() => onNavigate('community')}
              className="px-5 py-3 bg-[#FFDA00] hover:bg-white text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all self-start md:self-auto shrink-0"
            >
              Explore Community Hub
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_SUBMISSIONS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('community')}
                className="bg-white text-black border-3 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-1 hover:translate-y-1 p-4 transition-all cursor-pointer group"
              >
                <div className="aspect-video bg-black border-2 border-black overflow-hidden mb-3 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono font-black uppercase px-2 py-0.5 bg-[#FFDA00] text-black border-2 border-black">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={item.authorAvatar}
                    alt={item.author}
                    className="w-6 h-6 border border-black object-cover"
                  />
                  <span className="text-xs font-bold text-black">{item.author}</span>
                </div>

                <h4 className="font-display font-black text-sm text-black uppercase group-hover:text-[#4834D4] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-slate-800 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRAND SIGNATURE MOMENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#FFDA00] border-4 border-black shadow-[10px_10px_0_0_#000] p-8 sm:p-12 relative overflow-hidden">
          <div className="w-24 h-24 mx-auto mb-4 bg-white p-2 border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-2deg]">
            <OsumOpossum state="celebrating" size="lg" />
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Don't play dead. <span className="bg-black text-[#FFDA00] px-2 py-0.5 inline-block">Play Osum.</span>
          </h3>
          <p className="text-xs sm:text-sm font-bold text-black max-w-lg mx-auto mt-3 leading-relaxed">
            The opossum teaches us a simple truth: When life gets heavy, don't freeze or play dead. Choose play, curiosity, invention, and participation.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('story')}
              className="px-6 py-3.5 bg-black hover:bg-white hover:text-black text-[#FFDA00] font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              Read Our Story & Manifesto
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
