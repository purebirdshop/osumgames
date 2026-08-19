import React, { useState } from 'react';
import { Crown, Scroll, Swords, Coins, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const FACTIONS = [
  { id: 'crown', name: 'Crown Loyals', bonus: '+2 Royal Guard Influence', icon: Crown, color: 'text-black' },
  { id: 'guild', name: 'Iron Merchant Guild', bonus: '+15 Gold Treasury income', icon: Coins, color: 'text-black' },
  { id: 'clerisy', name: 'High Sun Clerisy', bonus: 'Immune to Vengeance tokens', icon: Scroll, color: 'text-black' },
  { id: 'spies', name: 'Shadow Spymasters', bonus: 'Peek at opponent sealed decrees', icon: Swords, color: 'text-black' },
];

const DECREES = [
  { id: 'tax', name: 'Imperial War Levy', effect: 'Steal 8 gold from each neighboring province.', risk: 'Medium' },
  { id: 'march', name: 'Siege of the Northern Duchy', effect: 'Deploy 4 heavy wooden siege towers across the river.', risk: 'High' },
  { id: 'inquest', name: 'Diplomatic Treason Inquest', effect: 'Force rival lord to reveal their clandestine agenda card.', risk: 'Low' },
  { id: 'bribe', name: 'Bribe the Royal Chamberlain', effect: 'Swap order of decree resolution to strike first.', risk: 'Safe' },
];

export const KingsOrderWarTable: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState('crown');
  const [selectedDecree, setSelectedDecree] = useState('tax');
  const [isSealed, setIsSealed] = useState(false);
  const [resolutionOutcome, setResolutionOutcome] = useState<string | null>(null);

  const handleSealAndResolve = () => {
    setIsSealed(true);
    setResolutionOutcome('Wax seal applied... Chamber decree opened!');
    setTimeout(() => {
      if (selectedDecree === 'tax') {
        setResolutionOutcome('Outcome: The Treasury swells by +16 Gold! The Iron Guild glares across the table and vows vengeance.');
      } else if (selectedDecree === 'march') {
        setResolutionOutcome('Outcome: Siege engines break the outer keep gates! 2 enemy battalions surrender without blood.');
      } else if (selectedDecree === 'inquest') {
        setResolutionOutcome('Outcome: Treason exposed! Lord Vaelen’s shadow contract is declared null by the King.');
      } else {
        setResolutionOutcome('Outcome: The Chamberlain takes your coin purse with a subtle nod. Your decree acts first.');
      }
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.75 } });
      } catch (e) {}
    }, 1000);
  };

  const activeFac = FACTIONS.find(f => f.id === selectedFaction) || FACTIONS[0];
  const activeDec = DECREES.find(d => d.id === selectedDecree) || DECREES[0];

  return (
    <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-3 border-black">
        <div>
          <div className="flex items-center gap-2 text-black text-xs font-mono font-black uppercase tracking-widest bg-[#FFDA00] px-2 py-0.5 border border-black inline-flex shadow-[2px_2px_0_0_#000]">
            <Crown className="w-4 h-4" />
            <span>Tabletop War Table</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-black tracking-tight uppercase mt-2">
            The King's Council: Wax-Sealed Decree Simulator
          </h3>
          <p className="text-xs font-bold text-slate-800 mt-0.5">
            Test the simultaneous blind-order diplomacy system that makes The King's Order legendary on game night.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FFDA00] px-3 py-1.5 border-2 border-black text-xs font-mono font-black text-black shadow-[2px_2px_0_0_#000]">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span>Council Round: 4 of 7</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left: Faction & Board State */}
        <div className="lg:col-span-6 space-y-4">
          <label className="text-xs font-mono font-black uppercase text-black block">
            1. Select Your Great House
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {FACTIONS.map((fac) => {
              const Icon = fac.icon;
              return (
                <div
                  key={fac.id}
                  onClick={() => {
                    setSelectedFaction(fac.id);
                    setResolutionOutcome(null);
                    setIsSealed(false);
                  }}
                  className={`p-3 border-2 border-black cursor-pointer transition-all ${
                    selectedFaction === fac.id
                      ? 'bg-[#FFDA00] text-black shadow-[3px_3px_0_0_#000]'
                      : 'bg-white text-black hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-black" />
                    <span className="font-cinzel text-xs font-black uppercase">{fac.name}</span>
                  </div>
                  <p className="text-[10px] text-black font-mono font-bold">{fac.bonus}</p>
                </div>
              );
            })}
          </div>

          <label className="text-xs font-mono font-black uppercase text-black block pt-2">
            2. Choose Secret Royal Decree
          </label>
          <div className="space-y-2">
            {DECREES.map((dec) => (
              <div
                key={dec.id}
                onClick={() => {
                  setSelectedDecree(dec.id);
                  setResolutionOutcome(null);
                  setIsSealed(false);
                }}
                className={`p-3 border-2 border-black cursor-pointer transition-all flex items-center justify-between ${
                  selectedDecree === dec.id
                    ? 'bg-black text-[#FFDA00] shadow-[3px_3px_0_0_#000]'
                    : 'bg-white text-black hover:bg-[#FFDA00]/40'
                }`}
              >
                <div>
                  <div className="font-cinzel text-xs font-black uppercase">{dec.name}</div>
                  <div className="text-[11px] font-medium opacity-90">{dec.effect}</div>
                </div>
                <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 border border-current shrink-0">
                  {dec.risk} Risk
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: The Wax-Sealed Chamber & Resolution */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-[#FFDA00]/20 border-3 border-black shadow-[6px_6px_0_0_#000] p-6 relative">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-black text-xs font-mono font-black uppercase">
              <span>Sealed Chamber Portfolio</span>
              <span>Priority: C</span>
            </div>

            <div className="my-6 text-center">
              <div className="w-16 h-16 mx-auto bg-white border-3 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center mb-3 rotate-[-2deg]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h4 className="font-cinzel text-lg font-black uppercase text-black mb-1">
                House {activeFac.name} Decree
              </h4>
              <p className="text-xs font-black uppercase text-black bg-[#FFDA00] px-2 py-0.5 border border-black inline-block">
                "{activeDec.name}"
              </p>
            </div>

            {resolutionOutcome ? (
              <div className="bg-white border-2 border-black p-4 text-xs text-black shadow-[3px_3px_0_0_#000]">
                <div className="font-cinzel font-black uppercase text-black mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span>DECREE RESOLUTION:</span>
                </div>
                <p className="font-medium leading-relaxed">{resolutionOutcome}</p>
              </div>
            ) : (
              <div className="bg-white border-2 border-black p-4 text-center text-xs font-bold text-slate-700 shadow-[2px_2px_0_0_#000]">
                All 6 lords have placed their sealed folders into the King's basin. Click below to unseal and resolve simultaneously.
              </div>
            )}
          </div>

          <button
            onClick={handleSealAndResolve}
            className="w-full mt-4 py-3.5 bg-black hover:bg-[#FFDA00] text-white hover:text-black font-cinzel font-black uppercase text-xs border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <Scroll className="w-4 h-4" />
            <span>Unseal Royal Folders & Resolve Turn</span>
          </button>
        </div>
      </div>
    </div>
  );
};
