import React from 'react';
import { OsumOpossum } from '../components/mascot/OsumOpossum';
import { Sparkles, ArrowRight } from 'lucide-react';

interface OurStoryViewProps {
  onNavigate: (view: string) => void;
  onNavigateDomain: (domain: string) => void;
}

export const OurStoryView: React.FC<OurStoryViewProps> = ({
  onNavigate,
  onNavigateDomain,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-12">
      {/* 1. Header & Manifesto */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFDA00] border-2 border-black shadow-[2px_2px_0_0_#000] text-xs font-mono font-black uppercase">
          <span>★ STUDIO MANIFESTO & ORIGINS ★</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-black tracking-tight uppercase">
          We build things worth playing with.
        </h1>
        <p className="text-sm sm:text-base font-medium text-black max-w-2xl mx-auto leading-relaxed">
          <strong>OSUM Games</strong> was founded on a conviction: Play is not a trivial pastime or a distraction from real life. Play is how human beings explore ideas, build friendships, solve complex puzzles, and feel alive.
        </p>
      </div>

      {/* 2. The Physical + Digital Philosophy */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-[#00A896] text-black px-2 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0_0_#000]">
              Our Core Philosophy
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Why make both video games and physical toys?
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              Most entertainment companies put themselves in strict silos: you are either a software developer or a toy manufacturer. We refused that divide from day one.
            </p>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              When our engineers design a modular magnetic toy like <strong className="bg-[#10b981] px-1 border border-black">ReMoro</strong>, they apply the fluid feedback loops of video game design. When our narrative artists write the world of <strong className="bg-[#38bdf8] px-1 border border-black">An Ancient Resound</strong>, they draw inspiration from the acoustic physicality of hollow wooden instruments.
            </p>
          </div>

          <div className="bg-[#FFDA00]/20 border-3 border-black shadow-[4px_4px_0_0_#000] p-5 space-y-3 font-mono text-xs text-black">
            <div className="flex items-center gap-2 text-black font-black uppercase text-sm border-b-2 border-black pb-2">
              <Sparkles className="w-4 h-4" />
              <span>THE OSUM CREATIVE TRIAD</span>
            </div>
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0_0_#000]">
              <span className="font-black uppercase block mb-1">1. TACTILE SATISFACTION</span>
              Everything should feel good to touch, click, manipulate, and hold.
            </div>
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0_0_#000]">
              <span className="font-black uppercase block mb-1">2. UNGUARDED CURIOSITY</span>
              No patronizing hand-holding. We invite players to poke, probe, and discover secrets.
            </div>
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0_0_#000]">
              <span className="font-black uppercase block mb-1">3. HUMAN CONNECTION</span>
              Games that spark conversation across kitchen tables and living room floors.
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Mascot Story: Don't Play Dead. Play Osum. */}
      <div className="bg-[#FFDA00] border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 shrink-0 bg-white p-2 border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-2deg]">
            <OsumOpossum state="waving" size="lg" />
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 border border-black inline-block">
              The Mascot Origin
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              The Story of the Osum Opossum
            </h2>
            <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
              When threatened, the common opossum goes limp and plays dead. It’s an evolutionary reflex—but in the creative life, playing dead is a trap. When faced with boredom, stress, or cynicism, the easiest reaction is to freeze.
            </p>
            <blockquote className="p-3 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] text-black text-sm font-black uppercase">
              "Don't play dead. Play Osum."
            </blockquote>
            <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
              Our mascot represents the opposite choice: active curiosity, resilience, tinkering, and laughter. Pronounced like <em>"Awesome"</em>, OSUM is a reminder that the world is filled with wonder if you’re willing to play with it.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Interactive Studio Journey Timeline */}
      <div className="space-y-6">
        <h3 className="font-display text-2xl sm:text-3xl font-black text-black uppercase text-center">
          Our Journey So Far
        </h3>

        <div className="space-y-4">
          {[
            {
              year: '2024',
              title: 'The Kitchen Table Workshop',
              desc: 'Maya and Julian prototype the first magnetic 40-pin toy joint on a 3D printer in a garage, while drafting the initial faction rules for The King’s Order.',
            },
            {
              year: '2025',
              title: 'The King’s Order Tabletop Launch',
              desc: 'The King’s Order releases to critical acclaim, selling out its first 10,000-unit print run in 72 hours and receiving Dice Tower Seal of Excellence.',
            },
            {
              year: '2026',
              title: 'Vanquished & ReMoro Wave 1',
              desc: 'Vanquished launches on Steam, reaching 850,000 fallen warriors. ReMoro completes precision steel mold tooling for holiday deliveries.',
            },
            {
              year: '2027 & Beyond',
              title: 'An Ancient Resound & Chrono-Marbles',
              desc: 'Expanding our universe into binaural acoustic adventures, kinetic laser tracks, and open community hardware platforms.',
            },
          ].map((milestone, idx) => (
            <div
              key={idx}
              className="bg-white border-3 border-black shadow-[5px_5px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-all"
            >
              <div className="font-mono text-xl font-black bg-[#FFDA00] text-black px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] w-28 text-center shrink-0">
                {milestone.year}
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-black text-base text-black uppercase">
                  {milestone.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('team')}
          className="px-6 py-4 bg-black hover:bg-white hover:text-black text-[#FFDA00] font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none inline-flex items-center gap-2 transition-all"
        >
          <span>Meet the Inventors Behind OSUM</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
