import React, { useState } from 'react';
import { Product } from '../types';
import { ReadinessBadge } from '../components/common/ReadinessBadge';
import { AvailabilityBadge } from '../components/common/AvailabilityBadge';
import { ReMoroConfigurator } from '../components/interactive/ReMoroConfigurator';
import { AncientResoundTuner } from '../components/interactive/AncientResoundTuner';
import { VanquishedRelicForge } from '../components/interactive/VanquishedRelicForge';
import { KingsOrderWarTable } from '../components/interactive/KingsOrderWarTable';
import { OsumOpossum } from '../components/mascot/OsumOpossum';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  Cpu, 
  Gamepad2, 
  Crown, 
  Music, 
  Flame, 
  Swords, 
  Layers, 
  Check, 
  Eye, 
  Compass, 
  Headphones, 
  Smartphone, 
  Scroll, 
  Users, 
  Heart, 
  Activity,
  Image as ImageIcon
} from 'lucide-react';

interface ProductWorldViewProps {
  product: Product;
  onNavigateDomain: (domain: string) => void;
  onOpenPlaytestModal: () => void;
  onOpenPreorderModal: (product?: Product) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  Zap: Sparkles,
  ShieldCheck,
  Eye,
  Music,
  Activity,
  Compass,
  Headphones,
  Flame,
  Shield: ShieldCheck,
  Gamepad2,
  Users,
  Crown,
  Swords,
  Scroll,
  Smartphone,
  Layers,
  Heart,
  Sparkles,
};

export const ProductWorldView: React.FC<ProductWorldViewProps> = ({
  product,
  onNavigateDomain,
  onOpenPlaytestModal,
  onOpenPreorderModal,
}) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const handlePrimaryCTA = () => {
    if (product.primary_cta.actionType === 'custom_builder') {
      const el = document.getElementById('interactive-sandbox');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else onOpenPreorderModal(product);
    } else if (product.availability === 'PREORDER') {
      onOpenPreorderModal(product);
    } else if (product.readiness === 'DEVELOPMENT' || product.primary_cta.actionType === 'playtest') {
      onOpenPlaytestModal();
    } else {
      onOpenPreorderModal(product);
    }
  };

  const handleSecondaryCTA = () => {
    if (product.secondary_cta?.actionType === 'playtest') {
      onOpenPlaytestModal();
    } else if (product.secondary_cta?.actionType === 'rulebook') {
      onOpenPreorderModal(product);
    } else {
      const el = document.getElementById('interactive-sandbox');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 py-4">
      {/* 1. IMMERSIVE PRODUCT HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb & Domain Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <button
              onClick={() => onNavigateDomain('osumgames.com')}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black bg-white hover:bg-black hover:text-white px-3 py-1.5 border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to OSUM Hub</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-black uppercase px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0_0_#000]">
                {product.canonical_domain}
              </span>
              <ReadinessBadge readiness={product.readiness} size="sm" />
              <AvailabilityBadge availability={product.availability} size="sm" />
            </div>
          </div>

          {/* Main Hero Banner Content Card */}
          <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-6 sm:p-10 md:p-12 relative overflow-hidden">
            
            {/* Top Color Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-3 border-b-2 border-black"
              style={{ backgroundColor: product.theme.primaryColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">
              
              <div className="lg:col-span-7 space-y-5">
                {/* Product Logo / Type Badge */}
                <div 
                  className="inline-flex items-center gap-2 text-xs font-mono font-black tracking-widest uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] rotate-[-1deg]"
                  style={{ backgroundColor: product.theme.primaryColor, color: '#000000' }}
                >
                  <span>{product.logo_text}</span>
                </div>

                {/* Title & Tagline */}
                <h1 className={`text-4xl sm:text-6xl font-black text-black tracking-tight leading-[1.04] uppercase ${product.theme.fontFamilyClass}`}>
                  {product.name}
                </h1>

                <p className="text-lg sm:text-xl font-black uppercase text-black bg-[#FFDA00] p-2 border-2 border-black shadow-[3px_3px_0_0_#000] inline-block">
                  {product.tagline}
                </p>

                <p className="text-sm sm:text-base text-black font-medium leading-relaxed max-w-xl">
                  {product.description}
                </p>

                {/* Status Note */}
                <div className="p-3 bg-slate-100 border-2 border-black text-xs font-mono font-bold text-black flex items-center gap-2 max-w-lg shadow-[2px_2px_0_0_#000]">
                  <span className="w-2.5 h-2.5 border border-black" style={{ backgroundColor: product.theme.primaryColor }} />
                  <span>{product.status}</span>
                </div>

                {/* Primary and Secondary Action CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={handlePrimaryCTA}
                    className="px-6 py-4 text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
                    style={{ backgroundColor: product.theme.primaryColor }}
                  >
                    <span>{product.primary_cta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {product.secondary_cta && (
                    <button
                      onClick={handleSecondaryCTA}
                      className="px-5 py-4 bg-white hover:bg-black hover:text-white text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
                    >
                      <span>{product.secondary_cta.label}</span>
                    </button>
                  )}
                </div>

              </div>

              {/* Hero Right Media Card */}
              <div className="lg:col-span-5">
                <div className="border-3 border-black shadow-[6px_6px_0_0_#000] bg-white group overflow-hidden">
                  <div className="aspect-[4/3] bg-black border-b-3 border-black overflow-hidden relative">
                    <img
                      src={product.hero_image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 bg-white space-y-2 font-mono text-xs font-bold text-black">
                    <div className="flex items-center justify-between pb-1 border-b border-black">
                      <span className="text-slate-600">AUDIENCE:</span>
                      <span className="text-black">{product.players_or_audience}</span>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-black">
                      <span className="text-slate-600">RECOMMENDED AGE:</span>
                      <span className="text-black">{product.age_recommendation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">STATUS:</span>
                      <span className="bg-[#FFDA00] px-1.5 py-0.5 border border-black text-black">{product.launch_date}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT IS IT?" ELEVATOR EXPLANATION */}
      <section id="what-is-it" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-8 sm:p-12">
          <div className="max-w-3xl space-y-3">
            <div 
              className="text-xs font-mono font-black uppercase tracking-widest px-2 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]"
              style={{ backgroundColor: product.theme.primaryColor, color: '#000000' }}
            >
              What Is It?
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black text-black uppercase tracking-tight ${product.theme.fontFamilyClass}`}>
              The Essential Concept
            </h2>
            <p className="text-base sm:text-lg text-black font-medium leading-relaxed">
              {product.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. "THE EXPERIENCE" (Verbs explaining what users actually do) */}
      <section id="the-experience" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div 
                className="text-xs font-mono font-black uppercase tracking-widest mb-1 px-2 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]"
                style={{ backgroundColor: product.theme.primaryColor, color: '#000000' }}
              >
                The Player Journey
              </div>
              <h2 className={`text-3xl sm:text-4xl font-black text-black uppercase tracking-tight ${product.theme.fontFamilyClass}`}>
                {product.verbs_title || 'The Experience'}
              </h2>
            </div>
            <p className="text-sm font-bold text-black max-w-md bg-white p-2.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
              Every Osum creation is designed around active participation and joyful tactile verbs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {product.verbs.map((verbItem, index) => (
              <div
                key={verbItem.verb}
                className="bg-white border-3 border-black shadow-[5px_5px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-1 hover:translate-y-1 p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="text-xs font-mono font-black px-2 py-0.5 border border-black"
                      style={{ backgroundColor: product.theme.primaryColor, color: '#000000' }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className={`text-xl font-black text-black uppercase mb-1 ${product.theme.fontFamilyClass}`}>
                    {verbItem.verb}
                  </h3>
                  <div className="text-xs font-bold text-slate-700 mb-2">
                    {verbItem.subtitle}
                  </div>
                  <p className="text-xs text-black leading-relaxed font-medium">
                    {verbItem.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SANDBOX (Toy customizer / Sound wave tuner / Relic forge / War table) */}
      {product.interactive_type && (
        <section id="interactive-sandbox" className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {product.interactive_type === 'remoro_builder' && <ReMoroConfigurator />}
            {product.interactive_type === 'ancient_tuner' && <AncientResoundTuner />}
            {product.interactive_type === 'vanquished_forge' && <VanquishedRelicForge />}
            {product.interactive_type === 'kings_decree' && <KingsOrderWarTable />}
          </div>
        </section>
      )}

      {/* 5. "THE WORLD" / "THE SYSTEM" / "THE LORE" */}
      <section id="the-world" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-8 sm:p-12">
          <div className="max-w-3xl space-y-3 mb-8">
            <div 
              className="text-xs font-mono font-black uppercase tracking-widest px-2 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]"
              style={{ backgroundColor: product.theme.primaryColor, color: '#000000' }}
            >
              Deep Dive
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black text-black uppercase tracking-tight ${product.theme.fontFamilyClass}`}>
              {product.world_section_title}
            </h2>
            <p className="text-base text-black font-medium leading-relaxed">
              {product.world_section_description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.world_highlights.map((item, i) => (
              <div
                key={i}
                className="bg-[#FFDA00]/20 border-3 border-black shadow-[4px_4px_0_0_#000] p-6 space-y-2"
              >
                <h3 className="font-display font-black text-base text-black uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURES BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <h2 className={`text-3xl font-black text-black uppercase tracking-tight ${product.theme.fontFamilyClass}`}>
            Key Features & Innovations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, idx) => {
              const Icon = ICON_MAP[feature.iconName] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white border-3 border-black shadow-[6px_6px_0_0_#000] p-6 space-y-3"
                >
                  <div 
                    className="w-10 h-10 border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center"
                    style={{ backgroundColor: product.theme.primaryColor, color: '#000000' }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-black text-base text-black uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-black font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. MEDIA GALLERY */}
      <section id="media" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className={`text-3xl font-black text-black uppercase tracking-tight ${product.theme.fontFamilyClass}`}>
              Media & Renders
            </h2>
            <span className="text-xs font-mono font-black uppercase bg-black text-white px-2 py-1 border border-black shadow-[2px_2px_0_0_#000]">
              {product.media_gallery.length} visual assets
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.media_gallery.map((media) => (
              <div
                key={media.id}
                onClick={() => setSelectedMedia(media.url)}
                className="bg-white border-3 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="aspect-video bg-black border-b-2 border-black relative overflow-hidden">
                  <img
                    src={media.url}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-mono uppercase font-black px-2 py-0.5 bg-[#FFDA00] text-black border border-black shadow-[1px_1px_0_0_#000]">
                    {media.type}
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-display font-black text-sm text-black uppercase transition-colors">
                    {media.title}
                  </h4>
                  <p className="text-xs text-slate-700 font-medium line-clamp-2">
                    {media.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPECIFICATIONS, SAFETY & SPECS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specs Table */}
          <div className="lg:col-span-7 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-8 space-y-6">
            <h3 className="font-display text-xl font-black text-black uppercase">
              Specifications & Details
            </h3>
            <div className="divide-y-2 divide-black text-xs">
              {product.specs.map((spec, i) => (
                <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
                  <span className="text-slate-600 font-bold uppercase">{spec.label}</span>
                  <span className="text-black font-black text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety or Reviews Card */}
          <div className="lg:col-span-5 space-y-6">
            {product.safety_specs && product.safety_specs.length > 0 && (
              <div className="bg-[#10b981] border-4 border-black shadow-[8px_8px_0_0_#000] p-6 space-y-3 text-black">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-black bg-black text-white px-2 py-1 border border-black inline-flex">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Toy Safety Compliance</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-black">
                  {product.safety_specs.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.quotes && product.quotes.length > 0 && (
              <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 space-y-3">
                <div className="text-xs font-mono uppercase font-black bg-[#FFDA00] text-black px-2 py-1 border border-black inline-block">
                  Critical Acclaim
                </div>
                {product.quotes.map((q, i) => (
                  <blockquote key={i} className="space-y-2 pt-1 border-l-4 border-black pl-3">
                    <p className="text-xs text-black italic font-serif leading-relaxed">
                      "{q.quote}"
                    </p>
                    <cite className="text-[11px] font-mono font-bold text-slate-800 block not-italic">
                      — {q.author}, <span className="text-black underline">{q.publication}</span>
                    </cite>
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM PRODUCT CTA BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-8 sm:p-12 space-y-6">
          <div className="w-20 h-20 mx-auto bg-[#FFDA00] p-2 border-2 border-black shadow-[3px_3px_0_0_#000] rotate-[-2deg]">
            <OsumOpossum state="curious" size="lg" />
          </div>

          <h3 className={`text-3xl sm:text-4xl font-black text-black uppercase tracking-tight ${product.theme.fontFamilyClass}`}>
            Ready to step into {product.name}?
          </h3>
          <p className="text-xs sm:text-sm font-bold text-black max-w-lg mx-auto leading-relaxed">
            Whether participating in closed acoustic tests, physical table play, or building magnetic rovers, we want you in the playground.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handlePrimaryCTA}
              className="px-6 py-4 text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              style={{ backgroundColor: product.theme.primaryColor }}
            >
              {product.primary_cta.label}
            </button>
            <button
              onClick={() => onNavigateDomain('osumgames.com')}
              className="px-5 py-4 bg-white hover:bg-black hover:text-white text-black text-xs font-black uppercase border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              Return to OSUM Hub
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Media */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white p-2 border-4 border-black shadow-[10px_10px_0_0_#000]">
            <img
              src={selectedMedia}
              alt="Preview"
              className="w-full h-auto max-h-[80vh] object-contain border-2 border-black"
            />
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 px-3 py-1 bg-black text-[#FFDA00] text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0_0_#000]"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
