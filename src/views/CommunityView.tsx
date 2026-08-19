import React, { useState, useEffect } from 'react';
import { useSanityData } from '../context/SanityDataContext';
import { CommunitySubmission } from '../types';
import { OsumOpossum } from '../components/mascot/OsumOpossum';
import { 
  Heart, 
  MessageSquare, 
  ThumbsUp, 
  Sparkles, 
  ExternalLink, 
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommunityViewProps {
  onOpenPlaytestModal: () => void;
  onNavigateDomain: (domain: string) => void;
}

interface IdeaItem {
  id: string;
  title: string;
  category: string;
  votes: number;
  hasVoted: boolean;
  status: 'In Review' | 'Prototyping' | 'Planned' | 'Released';
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  onOpenPlaytestModal,
  onNavigateDomain,
}) => {
  const { community: initialCommunity } = useSanityData();
  const [submissions, setSubmissions] = useState<CommunitySubmission[]>(initialCommunity);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    setSubmissions(initialCommunity);
  }, [initialCommunity]);

  const [ideas, setIdeas] = useState<IdeaItem[]>([
    { id: '1', title: 'Add ultrasonic obstacle sound feedback to ReMoro SDK', category: 'ReMoro', votes: 412, hasVoted: false, status: 'Prototyping' },
    { id: '2', title: '5-6 Player Expansion Board for The King’s Order', category: 'Tabletop', votes: 689, hasVoted: false, status: 'Planned' },
    { id: '3', title: 'Acoustic waveform visualizer mode in An Ancient Resound', category: 'Video Games', votes: 531, hasVoted: false, status: 'Prototyping' },
    { id: '4', title: 'Official STL file repository for 3D printed wall mounts', category: 'ReMoro', votes: 340, hasVoted: false, status: 'Released' },
    { id: '5', title: 'Co-op Boss Crucible Boss Rush in Vanquished', category: 'Vanquished', votes: 495, hasVoted: false, status: 'Released' },
  ]);

  const handleLike = (id: string) => {
    setLikedIds(prev => {
      const isLiked = !prev[id];
      setSubmissions(subList => subList.map(s => {
        if (s.id === id) {
          return { ...s, likes: isLiked ? s.likes + 1 : s.likes - 1 };
        }
        return s;
      }));
      if (isLiked) {
        try {
          confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
        } catch (e) {}
      }
      return { ...prev, [id]: isLiked };
    });
  };

  const handleVoteIdea = (id: string) => {
    setIdeas(prev => prev.map(item => {
      if (item.id === id) {
        const nextVote = !item.hasVoted;
        if (nextVote) {
          try {
            confetti({ particleCount: 25, spread: 35, origin: { y: 0.7 } });
          } catch (e) {}
        }
        return {
          ...item,
          hasVoted: nextVote,
          votes: nextVote ? item.votes + 1 : item.votes - 1,
        };
      }
      return item;
    }));
  };

  const filteredSubmissions = selectedType === 'all'
    ? submissions
    : submissions.filter(s => s.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-12">
      
      {/* 1. Header & Community Mission */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase bg-[#FFDA00] text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] mb-2">
            <Users className="w-4 h-4" />
            <span>The Player & Maker Guild</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
            Community Hub
          </h1>
          <p className="text-sm sm:text-base font-medium text-black max-w-2xl mt-2 leading-relaxed">
            Osum Games isn’t a one-way broadcast. We build games and toys to be modified, broken down, argued over, and reimagined by curious people like you.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPlaytestModal}
            className="px-6 py-3.5 bg-black hover:bg-[#FFDA00] text-[#FFDA00] hover:text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply to Playtest Lab</span>
          </button>
        </div>
      </div>

      {/* 2. Discord & Social Banner */}
      <div className="bg-[#4834D4] text-white border-4 border-black shadow-[8px_8px_0_0_#000] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="bg-white p-2 border-2 border-black shadow-[3px_3px_0_0_#000] rotate-[-2deg]">
            <OsumOpossum state="waving" size="lg" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase">
              Join 14,000+ Players in the Official OSUM Discord
            </h3>
            <p className="text-xs sm:text-sm font-medium text-white/90 mt-1 max-w-xl">
              Share ReMoro Python scripts, coordinate King’s Order tournament matches, share speedrun clips, and chat directly with our dev team.
            </p>
          </div>
        </div>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 bg-[#FFDA00] hover:bg-white text-black font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 shrink-0"
        >
          <span>Join Server</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* 3. Community Creations & Fan Mods Showcase */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Creations, Mods & Guides
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
              Highlighting exceptional player builds, 3D prints, and tabletop variants.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Creations' },
              { id: 'toy_build', label: 'Toy Builds' },
              { id: 'strategy_guide', label: 'Strategy Guides' },
              { id: 'fan_art', label: 'Fan Art' },
              { id: 'mod', label: 'Code & Mods' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border-2 border-black ${
                  selectedType === tab.id
                    ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                    : 'bg-white text-black hover:bg-[#FFDA00]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubmissions.map((item) => {
            const isLiked = likedIds[item.id];
            return (
              <div
                key={item.id}
                className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="aspect-video bg-black border-b-3 border-black relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono font-black uppercase px-2.5 py-0.5 bg-[#FFDA00] text-black border border-black shadow-[1px_1px_0_0_#000]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.authorAvatar}
                          alt={item.author}
                          className="w-6 h-6 border border-black object-cover"
                        />
                        <div className="text-xs">
                          <span className="text-black font-black block">{item.author}</span>
                          <span className="text-[10px] text-slate-600 font-mono font-bold">{item.authorHandle}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-600">{item.date}</span>
                    </div>

                    <h3 className="font-display font-black text-base text-black uppercase group-hover:text-[#4834D4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-black mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t-2 border-black flex items-center justify-between text-xs font-mono font-bold text-black mt-2">
                  <span className="bg-[#FFDA00] px-1.5 py-0.5 border border-black text-[10px]">
                    {item.productName}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLike(item.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 border border-black transition-colors ${
                        isLiked
                          ? 'bg-[#EF476F] text-white font-black'
                          : 'bg-slate-100 hover:bg-black hover:text-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{item.likes}</span>
                    </button>

                    <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 border border-black text-[11px]">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{item.commentsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Live Player Idea & Feedback Voting Board */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-[#00A896] text-black px-2 py-0.5 border border-black inline-block shadow-[2px_2px_0_0_#000] mb-1">
              Direct Democracy
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Feature Roadmap & Idea Voting
            </h2>
            <p className="text-xs font-bold text-slate-700 mt-0.5">
              Vote on hardware expansions, game updates, and community tools.
            </p>
          </div>
        </div>

        <div className="divide-y-2 divide-black">
          {ideas.map((idea) => (
            <div key={idea.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 bg-black text-white border border-black">
                    {idea.category}
                  </span>
                  <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 border border-black ${
                    idea.status === 'Released' ? 'bg-[#10b981] text-black' :
                    idea.status === 'Planned' ? 'bg-[#FFDA00] text-black' :
                    'bg-[#38bdf8] text-black'
                  }`}>
                    {idea.status}
                  </span>
                </div>
                <h4 className="font-display font-black text-sm text-black uppercase">
                  {idea.title}
                </h4>
              </div>

              <button
                onClick={() => handleVoteIdea(idea.id)}
                className={`flex items-center gap-1.5 px-4 py-2 border-2 border-black text-xs font-mono font-black transition-all shrink-0 ${
                  idea.hasVoted
                    ? 'bg-[#FFDA00] text-black shadow-[3px_3px_0_0_#000]'
                    : 'bg-white hover:bg-black hover:text-white text-black shadow-[2px_2px_0_0_#000]'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${idea.hasVoted ? 'fill-current' : ''}`} />
                <span>{idea.votes} VOTES</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
