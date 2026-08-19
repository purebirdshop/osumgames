import React, { useState } from 'react';
import { Flame, Swords } from 'lucide-react';

const RELICS = [
  { id: 'ribcage', name: 'Smoldering Ribcage', type: 'Pyromancy', dps: 35, posture: 10, special: '+40% Fire Burst upon Parrying' },
  { id: 'catalyst', name: 'Soul-Ember Catalyst', type: 'Necrotic', dps: 28, posture: 15, special: 'Siphons 5% HP on Heavy Stance Strike' },
  { id: 'talisman', name: 'Iron Will Talisman', type: 'Armor', dps: 12, posture: 40, special: 'Immune to Knockdown from Boss Sweeps' },
  { id: 'scythe_blade', name: 'Ashen Crescent Tooth', type: 'Bleed', dps: 45, posture: 5, special: 'Stacks 3x Blood-Ash debuff over 4s' },
];

export const VanquishedRelicForge: React.FC = () => {
  const [weapon, setWeapon] = useState<'greatsword' | 'scythe' | 'halberd'>('greatsword');
  const [activeRelics, setActiveRelics] = useState<string[]>(['ribcage', 'talisman']);

  const toggleRelic = (id: string) => {
    if (activeRelics.includes(id)) {
      setActiveRelics(activeRelics.filter(r => r !== id));
    } else {
      if (activeRelics.length >= 3) {
        // replace oldest
        setActiveRelics([...activeRelics.slice(1), id]);
      } else {
        setActiveRelics([...activeRelics, id]);
      }
    }
  };

  const totalDPS = 120 + activeRelics.reduce((acc, id) => {
    const r = RELICS.find(item => item.id === id);
    return acc + (r?.dps || 0);
  }, 0);

  const totalPosture = 45 + activeRelics.reduce((acc, id) => {
    const r = RELICS.find(item => item.id === id);
    return acc + (r?.posture || 0);
  }, 0);

  return (
    <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-3 border-black">
        <div>
          <div className="flex items-center gap-2 text-white text-xs font-mono font-black uppercase tracking-widest bg-[#EF476F] px-2 py-0.5 border border-black inline-flex shadow-[2px_2px_0_0_#000]">
            <Flame className="w-4 h-4" />
            <span>Ashforge Workshop</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-black tracking-tight uppercase mt-2">
            Vanquished Relic Crucible & Loadout Synergy
          </h3>
          <p className="text-xs font-bold text-slate-800 mt-0.5">
            Melt the ash of fallen champions to test relic synergy combinations against Sovereign demigods.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#FFDA00] px-4 py-2 border-2 border-black text-xs font-mono font-black text-black shadow-[2px_2px_0_0_#000]">
          <div>
            <span className="text-slate-700">TOTAL DPS: </span>
            <span className="text-black font-black underline">{totalDPS}</span>
          </div>
          <div>
            <span className="text-slate-700">POSTURE BREAK: </span>
            <span className="text-black font-black underline">{totalPosture}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Weapon Frame */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-mono font-black uppercase text-black block">
            1. Ashen Weaponry
          </label>
          <div className="space-y-2">
            {[
              { id: 'greatsword', name: 'Smoldering Greatsword', desc: 'Heavy poise & wide cleaves' },
              { id: 'scythe', name: 'Obsidian Reaping Scythe', desc: 'High bleed & whirlwind mobility' },
              { id: 'halberd', name: 'Vanguard War-Halberd', desc: 'Armor-piercing thrusts & parry counter' },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setWeapon(item.id as any)}
                className={`p-3 border-2 border-black cursor-pointer transition-all flex items-center justify-between ${
                  weapon === item.id
                    ? 'bg-black text-[#FFDA00] shadow-[3px_3px_0_0_#000]'
                    : 'bg-white text-black hover:bg-[#FFDA00]/40'
                }`}
              >
                <div>
                  <div className="text-sm font-black uppercase">{item.name}</div>
                  <div className="text-xs font-medium text-slate-600">{item.desc}</div>
                </div>
                <Swords className={`w-4 h-4 ${weapon === item.id ? 'text-[#FFDA00]' : 'text-black'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Relic Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-black uppercase text-black">
              2. Slot Up to 3 Soul-Forged Relics
            </label>
            <span className="text-xs font-mono font-black bg-black text-[#FFDA00] px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#000]">
              {activeRelics.length}/3 SLOTTED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RELICS.map((relic) => {
              const isSlotted = activeRelics.includes(relic.id);
              return (
                <div
                  key={relic.id}
                  onClick={() => toggleRelic(relic.id)}
                  className={`p-3.5 border-2 border-black cursor-pointer transition-all ${
                    isSlotted
                      ? 'bg-[#EF476F] text-white shadow-[4px_4px_0_0_#000]'
                      : 'bg-white text-black hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase font-display">{relic.name}</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-black text-white border border-black">
                      {relic.type}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium leading-snug mt-1">{relic.special}</p>
                  <div className="flex items-center gap-3 mt-2 text-[10px] font-mono font-black">
                    <span>+{relic.dps} DPS</span>
                    <span>+{relic.posture}% Stagger</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
