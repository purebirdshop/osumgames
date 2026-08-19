import React, { useState, useEffect } from 'react';
import { OsumOpossum, OpossumState } from './OsumOpossum';
import { Sparkles, Volume2, X, ChevronUp, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MascotFloatWidgetProps {
  currentDomain: string;
}

const OSUM_FACTS = [
  "Psst! 'OSUM' is pronounced like 'Awesome' — just packed with opossum curiosity!",
  "Our philosophy: 'Don't play dead. Play Osum.' When life gets serious, choose curiosity!",
  "Did you know ReMoro's magnetic ball joints can hold 5kg of shear weight?",
  "An Ancient Resound's audio was recorded in underground salt caverns and resonant silos!",
  "The King's Order was playtested over 300 times to guarantee backroom betrayal balance!",
  "We release open-source 3D print files for all ReMoro armor shells. Go make cool mods!",
  "Looking for the hidden redirect? Try ancient.osumgames.com in the URL simulator above!"
];

export const MascotFloatWidget: React.FC<MascotFloatWidgetProps> = ({ currentDomain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mascotState, setMascotState] = useState<OpossumState>('curious');
  const [factIndex, setFactIndex] = useState(0);
  const [isPlayingDeadMode, setIsPlayingDeadMode] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Initial welcome pop after 3 seconds if not interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPrompted) {
        setMascotState('waving');
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasPrompted]);

  const handlePoke = () => {
    setHasPrompted(true);
    if (isPlayingDeadMode) {
      // Wake up!
      setIsPlayingDeadMode(false);
      setMascotState('celebrating');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.9, x: 0.9 }
        });
      } catch (e) {
        // ignore
      }
      setTimeout(() => setMascotState('waving'), 2000);
      return;
    }

    const nextStates: OpossumState[] = ['waving', 'curious', 'celebrating'];
    const randomState = nextStates[Math.floor(Math.random() * nextStates.length)];
    setMascotState(randomState);
    setFactIndex((prev) => (prev + 1) % OSUM_FACTS.length);
    setIsOpen(true);
  };

  const togglePlayDead = () => {
    if (!isPlayingDeadMode) {
      setIsPlayingDeadMode(true);
      setMascotState('playing_dead');
    } else {
      setIsPlayingDeadMode(false);
      setMascotState('celebrating');
      try {
        confetti({ particleCount: 70, spread: 80, origin: { x: 0.9, y: 0.85 } });
      } catch (e) {}
    }
  };

  return (
    <>
      {/* Play Dead Screen Filter if active */}
      {isPlayingDeadMode && (
        <div className="fixed inset-0 pointer-events-none z-40 backdrop-grayscale backdrop-contrast-125 bg-black/40 transition-all duration-700 flex items-center justify-center">
          <div className="bg-slate-900/90 border border-amber-400/40 p-6 rounded-2xl max-w-md mx-4 text-center pointer-events-auto shadow-2xl animate-fade-in">
            <h3 className="font-display text-xl text-amber-400 mb-2">🐾 Playing Dead Mode Activated</h3>
            <p className="text-sm text-slate-300 mb-4">
              "Wait! Don't play dead. In life and in games, we choose play, discovery, and participation!"
            </p>
            <button
              onClick={togglePlayDead}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition-transform active:scale-95 shadow-lg"
            >
              Don't Play Dead · Play Osum! ⚡
            </button>
          </div>
        </div>
      )}

      {/* Floating Mascot Dock */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/* Expanded Speech Card */}
        {isOpen && (
          <div className="mb-3 w-80 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-slate-100 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Osum Opossum
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs leading-relaxed text-slate-200 mb-3">
              {OSUM_FACTS[factIndex]}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
              <button
                onClick={() => setFactIndex((prev) => (prev + 1) % OSUM_FACTS.length)}
                className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Next Tip
              </button>
              
              <button
                onClick={togglePlayDead}
                className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 font-mono"
              >
                <Eye className="w-3 h-3" /> {isPlayingDeadMode ? 'Wake Up' : 'Play Dead?'}
              </button>
            </div>
          </div>
        )}

        {/* Mascot Trigger Button */}
        <div className="flex items-center gap-2">
          {!isOpen && (
            <div 
              onClick={handlePoke}
              className="cursor-pointer bg-slate-900/90 border border-slate-700/80 text-xs px-3 py-1.5 rounded-full text-slate-300 shadow-md hover:border-amber-400/60 hover:text-white transition-all hidden md:flex items-center gap-1.5"
            >
              <span>Say hi to Opossum</span>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </div>
          )}

          <div 
            onClick={handlePoke}
            className="p-1.5 bg-slate-900/90 hover:bg-slate-800 border-2 border-amber-400/40 hover:border-amber-400 rounded-full shadow-2xl transition-all duration-300 cursor-pointer group"
            title="Osum Opossum - Click to chat!"
          >
            <OsumOpossum state={mascotState} size="md" />
          </div>
        </div>
      </div>
    </>
  );
};
