import React, { useState } from 'react';
import { useSanityData } from '../context/SanityDataContext';
import { NewsPost } from '../types';
import { Search, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { Modal } from '../components/common/Modal';

interface WhatsHappeningViewProps {
  onNavigateDomain: (domain: string) => void;
  onOpenPlaytestModal: () => void;
}

export const WhatsHappeningView: React.FC<WhatsHappeningViewProps> = ({
  onNavigateDomain,
  onOpenPlaytestModal,
}) => {
  const { news: NEWS_POSTS } = useSanityData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsPost | null>(null);

  const categories = ['all', 'Development', 'Playtest', 'Launch', 'Events', 'Behind the Scenes'];

  const filteredPosts = NEWS_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      {/* Header */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase bg-[#FFDA00] text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] mb-2">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <span>Studio Feed & Dispatch</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
            What's Happening
          </h1>
          <p className="text-sm sm:text-base font-medium text-black max-w-2xl mt-2 leading-relaxed">
            Direct development updates, hardware tooling reports, playtest invitations, and convention announcements from our studio benches.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-black bg-black text-[#FFDA00] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
            {filteredPosts.length} ARTICLES PUBLISHED
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-black uppercase whitespace-nowrap transition-all border-2 border-black ${
                selectedCategory === cat
                  ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                  : 'bg-white text-black hover:bg-[#FFDA00]'
              }`}
            >
              {cat === 'all' ? 'All Updates' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search devlogs & tags..."
            className="w-full pl-9 pr-3 py-2 bg-white border-2 border-black text-xs font-bold text-black placeholder-slate-500 outline-none focus:bg-[#FFDA00] shadow-[2px_2px_0_0_#000] transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setActiveArticle(post)}
            className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between cursor-pointer group overflow-hidden"
          >
            <div>
              <div className="aspect-video bg-black border-b-3 border-black relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono font-black uppercase px-2.5 py-1 bg-[#FFDA00] text-black border-2 border-black shadow-[2px_2px_0_0_#000]">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="text-[11px] font-mono font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display font-black text-lg text-black group-hover:text-[#4834D4] uppercase transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs font-medium text-black mt-2.5 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t-2 border-black flex items-center justify-between text-xs font-mono text-black mt-2">
              <div className="flex items-center gap-1.5 truncate">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-[#FFDA00] border border-black truncate">
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="font-black text-black uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                <span>Read</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <Modal
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          subtitle={`${activeArticle.date} · ${activeArticle.category} · ${activeArticle.readTime}`}
          maxWidth="lg"
        >
          <div className="space-y-6">
            <div className="aspect-video bg-black border-3 border-black overflow-hidden shadow-[4px_4px_0_0_#000]">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-black font-medium leading-relaxed font-sans">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {activeArticle.relatedProductSlug && (
              <div className="pt-4 border-t-2 border-black flex items-center justify-between">
                <span className="text-xs font-mono font-black text-black uppercase">
                  Related Product: <strong className="bg-[#FFDA00] px-1.5 py-0.5 border border-black">{activeArticle.relatedProductSlug}</strong>
                </span>
                <button
                  onClick={() => {
                    const slug = activeArticle.relatedProductSlug;
                    setActiveArticle(null);
                    if (slug) onNavigateDomain(`${slug}.osumgames.com`);
                  }}
                  className="px-4 py-2.5 bg-black hover:bg-[#FFDA00] text-white hover:text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center gap-1.5"
                >
                  <span>Visit {activeArticle.relatedProductSlug}.osumgames.com</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
