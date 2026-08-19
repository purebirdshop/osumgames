import React, { useState } from 'react';
import { useSanityData } from '../context/SanityDataContext';
import { CATEGORIES } from '../data/products';
import { Product } from '../types';
import { ReadinessBadge } from '../components/common/ReadinessBadge';
import { AvailabilityBadge } from '../components/common/AvailabilityBadge';
import { OsumOpossum } from '../components/mascot/OsumOpossum';
import { Search, ArrowRight } from 'lucide-react';

interface CatalogViewProps {
  onNavigateDomain: (domain: string) => void;
  onOpenPreorderModal: (product?: Product) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onNavigateDomain,
  onOpenPreorderModal,
}) => {
  const { products } = useSanityData();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedReadiness, setSelectedReadiness] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesType = selectedType === 'all' || product.product_type === selectedType;
    const matchesReadiness = selectedReadiness === 'all' || product.readiness === selectedReadiness;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesReadiness && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      {/* Header */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase bg-[#FFDA00] text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] mb-2">
            <span>★ Creative Catalog & Worlds ★</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
            What We Make
          </h1>
          <p className="text-sm sm:text-base font-bold text-black max-w-2xl mt-2 leading-relaxed">
            From acoustic video games and modular robotics to deep strategic tabletop games, explore our physical and digital creations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-black bg-black text-[#FFDA00] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
            SHOWING {filteredProducts.length} CREATIONS
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border-2 border-black ${
              selectedType === 'all'
                ? 'bg-black text-[#FFDA00] shadow-[3px_3px_0_0_#000]'
                : 'bg-white text-black hover:bg-[#FFDA00]'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedType(cat.id)}
              className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border-2 border-black ${
                selectedType === cat.id
                  ? 'text-black shadow-[3px_3px_0_0_#000]'
                  : 'bg-white text-black hover:bg-slate-100'
              }`}
              style={selectedType === cat.id ? { backgroundColor: cat.accentColor } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Lifecycle Select */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <select
            value={selectedReadiness}
            onChange={(e) => setSelectedReadiness(e.target.value)}
            className="bg-white border-2 border-black text-black font-black uppercase text-xs px-3 py-2 outline-none focus:bg-[#FFDA00] font-mono shadow-[2px_2px_0_0_#000]"
          >
            <option value="all">All Lifecycle Stages</option>
            <option value="LAUNCHED">Launched & Available</option>
            <option value="PRE_RELEASE">Pre-Release / Pre-Order</option>
            <option value="DEVELOPMENT">In Development</option>
            <option value="IDEA">Idea & Prototyping</option>
          </select>

          {/* Search Box */}
          <div className="relative flex-1 sm:w-60">
            <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creations..."
              className="w-full pl-9 pr-3 py-2 bg-white border-2 border-black text-xs font-bold text-black placeholder-slate-500 outline-none focus:bg-[#FFDA00] shadow-[2px_2px_0_0_#000] transition-colors"
            />
          </div>
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Product Hero Media */}
                <div className="aspect-video bg-black border-b-3 border-black relative overflow-hidden">
                  <img
                    src={product.hero_image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Domain Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase px-2.5 py-1 bg-black text-[#FFDA00] border-2 border-black shadow-[2px_2px_0_0_#000]">
                      {product.canonical_domain}
                    </span>
                  </div>

                  {/* Bottom Spec Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono font-black uppercase text-white bg-black/80 px-2 py-1 border border-white">
                    <span>{product.age_recommendation}</span>
                    <span>{product.players_or_audience}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Readiness & Availability */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <ReadinessBadge readiness={product.readiness} size="sm" />
                    <AvailabilityBadge availability={product.availability} size="sm" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-black text-black group-hover:text-[#4834D4] uppercase transition-colors tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs font-black uppercase text-black bg-[#FFDA00] px-2 py-0.5 border border-black inline-block mt-1">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-black font-medium mt-3 line-clamp-3 leading-relaxed">
                    {product.short_description}
                  </p>

                  {/* Verbs List */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.verbs.map((v) => (
                      <span
                        key={v.verb}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-black border border-black"
                      >
                        {v.verb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t-2 border-black flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => onNavigateDomain(product.canonical_domain)}
                  className="px-4 py-2.5 bg-black hover:bg-[#FFDA00] text-white hover:text-black font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5"
                >
                  <span>Enter World</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenPreorderModal(product)}
                  className="text-xs font-black uppercase text-black hover:underline"
                >
                  {product.primary_cta.label}
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Empty State with Mascot */
        <div className="text-center py-16 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-8 max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-3 bg-[#FFDA00] p-2 border-2 border-black shadow-[3px_3px_0_0_#000]">
            <OsumOpossum state="curious" size="lg" />
          </div>
          <h3 className="font-display font-black text-xl text-black uppercase">No products found</h3>
          <p className="text-xs font-bold text-slate-700 mt-1">
            "I checked under every hollow log, but couldn't find matches for that filter!"
          </p>
          <button
            onClick={() => {
              setSelectedType('all');
              setSelectedReadiness('all');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2.5 bg-black text-[#FFDA00] font-black uppercase text-xs border-2 border-black shadow-[3px_3px_0_0_#000]"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
