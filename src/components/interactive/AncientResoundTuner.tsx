import React, { useState } from 'react';
import { Volume2, Sparkles, Music } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AncientResoundTuner: React.FC = () => {
  const [frequency, setFrequency] = useState(432);
  const [chamber, setChamber] = useState<'vault' | 'abyss' | 'cathedral' | 'crystalline'>('vault');
  const [interval, setInterval] = useState<'root' | 'fifth' | 'octave'>('fifth');
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Target resonance condition: frequency === 432 && chamber === 'vault' && interval === 'fifth'
  const isHarmonized = frequency >= 428 && frequency <= 436 && chamber === 'vault' && interval === 'fifth';

  const handleTune = () => {
    if (isHarmonized) {
      setIsUnlocked(true);
      try {
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
      } catch (e) {}
    }
  };

  return (
    <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-3 border-black">
        <div>
          <div className="flex items-center gap-2 text-black text-xs font-mono font-black uppercase tracking-widest bg-[#38bdf8] px-2 py-0.5 border border-black inline-flex shadow-[2px_2px_0_0_#000]">
            <Music className="w-4 h-4" />
            <span>Acoustic Puzzle Chamber</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-black tracking-tight uppercase mt-2">
            The Caelum Diapason & Resonance Tuner
          </h3>
          <p className="text-xs font-bold text-slate-800 mt-0.5">
            Tune acoustic standing waves to match the natural harmonic chord of the Whispering Monolith.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FFDA00] px-3 py-1.5 border-2 border-black text-xs font-mono font-black text-black shadow-[2px_2px_0_0_#000]">
          <span className={`w-2 h-2 rounded-full border border-black ${isHarmonized ? 'bg-[#10b981] animate-ping' : 'bg-black'}`} />
          <span>{isHarmonized ? 'Resonance Locked (432 Hz)' : 'Searching Acoustic Echo'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Waveform & Monolith Visualizer */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-[#38bdf8]/20 border-3 border-black shadow-[6px_6px_0_0_#000] p-6 min-h-[340px] relative overflow-hidden">
          
          {/* SVG Monolith & Standing Wave Simulation */}
          <div className="relative z-10 w-full max-w-sm h-48 flex items-center justify-center">
            <svg viewBox="0 0 300 160" className="w-full h-full">
              {/* Central Monolith */}
              <polygon
                points="130,20 170,20 180,140 120,140"
                fill={isHarmonized ? "#FFDA00" : "#ffffff"}
                stroke="#000000"
                strokeWidth="3.5"
                className="transition-colors duration-500"
              />

              {/* Inscriptions */}
              <text 
                x="150" 
                y="85" 
                textAnchor="middle" 
                fill="#000000" 
                className="font-cinzel text-xs font-black tracking-widest select-none"
              >
                {isHarmonized ? '✦ 432 Hz ✦' : '· · ·'}
              </text>

              {/* Sine Wave 1 */}
              <path
                d={`M 10,80 Q 75,${80 - (frequency - 400) * 0.4} 150,80 T 290,80`}
                fill="none"
                stroke="#000000"
                strokeWidth={isHarmonized ? "4" : "2"}
              />

              {/* Sine Wave 2 (Harmonic overtone) */}
              <path
                d={`M 10,80 Q 45,${80 + (frequency - 400) * 0.25} 80,80 T 150,80 T 220,80 T 290,80`}
                fill="none"
                stroke="#4834D4"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </svg>
          </div>

          {/* Resonance Result Fragment */}
          {isUnlocked ? (
            <div className="mt-4 bg-[#FFDA00] border-2 border-black p-3 text-xs text-black shadow-[3px_3px_0_0_#000] text-center font-bold">
              <span className="font-cinzel font-black block mb-1 uppercase">ARCHIVIST LORE DISCOVERED:</span>
              "The First Accord was struck when the seven celestial bell-spires aligned with the earth's pulse."
            </div>
          ) : (
            <div className="mt-2 text-xs font-mono font-bold text-black text-center bg-white p-2 border border-black shadow-[2px_2px_0_0_#000]">
              Current Frequency: <strong className="text-black underline">{frequency} Hz</strong> · Match <span className="bg-[#FFDA00] px-1 border border-black font-black">432 Hz in Vault of Caelum</span> to awaken monolith.
            </div>
          )}
        </div>

        {/* Sliders and Chamber Controls */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono font-black uppercase text-black mb-1">
              <span>1. Frequency Dial (Hz)</span>
              <span className="bg-[#FFDA00] px-2 py-0.5 border border-black">{frequency} Hz</span>
            </div>
            <input
              type="range"
              min="200"
              max="600"
              value={frequency}
              onChange={(e) => {
                setFrequency(Number(e.target.value));
                if (isUnlocked) setIsUnlocked(false);
              }}
              className="w-full h-3 bg-slate-200 border-2 border-black appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] font-mono font-bold text-slate-700 mt-1">
              <span>216 Hz (Deep)</span>
              <span className="font-black bg-[#FFDA00] px-1 border border-black">432 Hz (Key)</span>
              <span>528 Hz (High)</span>
            </div>
          </div>

          {/* Chamber Acoustic Filter */}
          <div>
            <label className="text-xs font-mono font-black uppercase text-black block mb-1.5">
              2. Acoustic Chamber Formation
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'vault', label: 'Vault of Caelum' },
                { id: 'abyss', label: 'Obsidian Abyss' },
                { id: 'cathedral', label: 'Silent Cathedral' },
                { id: 'crystalline', label: 'Quartz Spires' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setChamber(item.id as any);
                    if (isUnlocked) setIsUnlocked(false);
                  }}
                  className={`py-2 px-2.5 text-xs font-mono font-black uppercase border-2 border-black transition-all text-left ${
                    chamber === item.id
                      ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                      : 'bg-white text-black hover:bg-[#FFDA00]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Harmonic Interval */}
          <div>
            <label className="text-xs font-mono font-black uppercase text-black block mb-1.5">
              3. Harmonic Overtone
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'root', label: 'Unison (1:1)' },
                { id: 'fifth', label: '5th (3:2)' },
                { id: 'octave', label: 'Octave (2:1)' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setInterval(item.id as any);
                    if (isUnlocked) setIsUnlocked(false);
                  }}
                  className={`py-2 px-2 text-xs font-mono font-black uppercase border-2 border-black transition-all text-center ${
                    interval === item.id
                      ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                      : 'bg-white text-black hover:bg-[#FFDA00]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleTune}
            className={`w-full py-3.5 border-3 border-black text-xs font-black font-mono uppercase transition-all flex items-center justify-center gap-2 ${
              isHarmonized
                ? 'bg-[#FFDA00] hover:bg-black hover:text-[#FFDA00] text-black shadow-[4px_4px_0_0_#000] cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none'
                : 'bg-slate-200 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isHarmonized ? 'Harmonize Standing Wave' : 'Align Waveform First'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
